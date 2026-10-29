import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function fail(msg, errors) {
  errors.push(msg);
}

function readJson(relPath, errors) {
  const absPath = path.join(root, relPath);
  if (!fs.existsSync(absPath)) {
    fail(`Missing JSON file: ${relPath}`, errors);
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(absPath, 'utf8'));
  } catch (err) {
    fail(`Invalid JSON in ${relPath}: ${err.message}`, errors);
    return null;
  }
}

function readText(relPath, errors) {
  const absPath = path.join(root, relPath);
  if (!fs.existsSync(absPath)) {
    fail(`Missing file: ${relPath}`, errors);
    return null;
  }
  return fs.readFileSync(absPath, 'utf8');
}

function ensureExists(relPath, errors) {
  const absPath = path.join(root, relPath);
  if (!fs.existsSync(absPath)) {
    fail(`Missing required artifact: ${relPath}`, errors);
    return false;
  }
  return true;
}

function extractFrontmatterValue(text, key) {
  const re = new RegExp(`^${key}:\\s*'([^']+)'`, 'm');
  const m = text.match(re);
  return m ? m[1] : null;
}

function toPosix(relPath) {
  return relPath.split(path.sep).join('/');
}

function listFilesRecursive(relDir, suffix) {
  const absDir = path.join(root, relDir);
  if (!fs.existsSync(absDir)) {
    return [];
  }
  const out = [];
  const stack = [absDir];
  while (stack.length > 0) {
    const dir = stack.pop();
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        stack.push(abs);
      } else if (entry.isFile() && abs.endsWith(suffix)) {
        out.push(toPosix(path.relative(root, abs)));
      }
    }
  }
  return out.sort();
}

function assertContainsAll(relPath, text, requiredSnippets, errors, kind) {
  const normalized = text.toLowerCase();
  const missing = requiredSnippets.filter((s) => !normalized.includes(s.toLowerCase()));
  if (missing.length > 0) {
    fail(`${kind} quality check failed in ${relPath}; missing: ${missing.join(', ')}`, errors);
  }
}

const errors = [];
let caseCount = 0;

const mcpee = readJson('boost.json', errors);
const plugin = readJson('plugin.json', errors);
const suite = readJson('evals/frontend-smoke.json', errors);

if (mcpee?.catalog) {
  for (const [key, relPath] of Object.entries(mcpee.catalog)) {
    ensureExists(relPath, errors);
  }
}

if (plugin) {
  const pluginPaths = [
    plugin.agents,
    ...(plugin.instructions || []),
    ...(plugin.skills || []),
    ...(plugin.prompts || []),
    ...(plugin.specs || []),
    ...(plugin.templates || [])
  ];
  pluginPaths.forEach((p) => ensureExists(p, errors));
}

if (mcpee?.coreSpecs) {
  mcpee.coreSpecs.forEach((specPath) => ensureExists(specPath, errors));
}

if (mcpee?.coreSkillSet) {
  mcpee.coreSkillSet.forEach((skillPath) => ensureExists(skillPath, errors));
}

if (!suite || !Array.isArray(suite.cases)) {
  fail('Eval suite must define an array in evals/frontend-smoke.json:cases.', errors);
} else {
  caseCount = suite.cases.length;
  const caseIds = new Set();
  const coveredPrompts = new Set();
  const coveredAgents = new Set();

  const requiredAgentSections = [
    '## rol',
    '## cuando usar',
    '## entradas minimas',
    '## entregables obligatorios',
    '## workflow',
    '## checklist especializado',
    '## anti-patrones a bloquear'
  ];
  const requiredPromptSnippets = ['description:', 'agent:', 'model:', 'salida obligatoria'];
  const requiredSkillSections = ['## description', '## when to use', '## instructions', '## output esperado', '## checklist'];
  const requiredSpecSections = [
    '## proposito',
    '## ambito',
    '## decisiones estandar',
    '## reglas obligatorias',
    '## antipatrones a bloquear',
    '## checklist de validacion',
    '## evidencias esperadas'
  ];

  for (const c of suite.cases) {
    if (!c.id || caseIds.has(c.id)) {
      fail(`Invalid or duplicated eval case id: ${String(c.id)}`, errors);
      continue;
    }
    caseIds.add(c.id);

    const required = ['agentName', 'agent', 'prompt', 'skill', 'spec'];
    for (const field of required) {
      if (!c[field]) {
        fail(`Eval case ${c.id} is missing field: ${field}`, errors);
      }
    }

    if (!ensureExists(c.agent, errors) || !ensureExists(c.prompt, errors) || !ensureExists(c.skill, errors) || !ensureExists(c.spec, errors)) {
      continue;
    }

    const agentText = readText(c.agent, errors);
    const promptText = readText(c.prompt, errors);
    const skillText = readText(c.skill, errors);
    const specText = readText(c.spec, errors);
    if (!agentText || !promptText) {
      continue;
    }

    coveredPrompts.add(c.prompt);
    coveredAgents.add(c.agent);

    const agentNameFromFile = extractFrontmatterValue(agentText, 'name');
    const agentNameFromPrompt = extractFrontmatterValue(promptText, 'agent');

    if (agentNameFromFile !== c.agentName) {
      fail(`Eval case ${c.id} mismatch: ${c.agent} frontmatter name is '${agentNameFromFile}', expected '${c.agentName}'.`, errors);
    }

    if (agentNameFromPrompt !== c.agentName) {
      fail(`Eval case ${c.id} mismatch: ${c.prompt} frontmatter agent is '${agentNameFromPrompt}', expected '${c.agentName}'.`, errors);
    }

    if (mcpee?.coreSkillSet && !mcpee.coreSkillSet.includes(c.skill)) {
      fail(`Eval case ${c.id} skill not in mcpee coreSkillSet: ${c.skill}`, errors);
    }

    if (mcpee?.coreSpecs && !mcpee.coreSpecs.includes(c.spec)) {
      fail(`Eval case ${c.id} spec not in mcpee coreSpecs: ${c.spec}`, errors);
    }

    assertContainsAll(c.agent, agentText, requiredAgentSections, errors, 'Agent');
    assertContainsAll(c.prompt, promptText, requiredPromptSnippets, errors, 'Prompt');
    if (skillText) {
      assertContainsAll(c.skill, skillText, requiredSkillSections, errors, 'Skill');
    }
    if (specText) {
      assertContainsAll(c.spec, specText, requiredSpecSections, errors, 'Spec');
    }
  }

  const promptFiles = listFilesRecursive('prompts', '.prompt.md');
  const agentFiles = listFilesRecursive('agents', '.agent.md');

  for (const p of promptFiles) {
    if (!coveredPrompts.has(p)) {
      fail(`Prompt is not covered by eval suite: ${p}`, errors);
    }
  }

  for (const a of agentFiles) {
    if (!coveredAgents.has(a)) {
      fail(`Agent is not covered by eval suite: ${a}`, errors);
    }
  }
}

if (errors.length > 0) {
  console.error('Evals FAILED');
  errors.forEach((e) => console.error(`- ${e}`));
  process.exit(1);
}

console.log(`Evals OK: ${caseCount} cases validated.`);
