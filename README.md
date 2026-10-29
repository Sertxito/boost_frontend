# Frontend Expert Boost

Convierte Copilot y agentes en un equipo frontend senior/principal orientado a produccion: Angular, React, arquitectura, calidad, accesibilidad y performance.

Paquete npm: `boost-frontend`.

## Que incluye

| Carpeta | Contenido |
| --- | --- |
| `agents/` | 10 agentes especializados: arquitectura, Angular, React, microfrontends, testing, a11y, performance, design system, migracion y revision de codigo |
| `skills/` | 12 skills autoactivables con checklists operativos repetibles |
| `instructions/` | Instrucciones de repositorio para GitHub Copilot |
| `prompts/` | 13 prompts listos para uso frecuente en VS Code |
| `specs/` | Contratos de calidad: arquitectura, seguridad, performance, a11y, observabilidad |
| `templates/` | Templates para componentes, tests, ADRs, auditorias y planes |
| `docs/` | Modelo operativo, referencias oficiales y matrices de enrutado |
| `examples/` | Casos de uso y ejemplos de salida rellenados |

## Estructura

```text
frontend-expert-boost/
├── AGENTS.md
├── plugin.json
├── agents/
├── instructions/
├── prompts/
├── skills/
├── specs/
├── templates/
├── examples/
├── docs/
└── .github/
    └── copilot-instructions.md
```

## Instalacion

Este boost es **autocontenido**: no necesita runtime, plugin ni servidor MCP. Un solo comando copia sus activos a las rutas donde GitHub Copilot / VS Code los descubren automaticamente.

```bash
# Desde la raiz de TU proyecto
npx github:Sertxito/boost_frontend
# o, una vez publicado en npm
npx boost-frontend
```

| Activo | Se instala en |
|---|---|
| Agentes | `.github/agents/*.agent.md` |
| Skills | `.github/skills/<nombre>/SKILL.md` y `.agents/skills/<nombre>/SKILL.md` |
| Prompts | `.github/prompts/*.prompt.md` |
| Instrucciones | `.github/instructions/*.instructions.md` |
| Instrucciones globales | `.github/copilot-instructions.md` (solo si el proyecto no tiene) |

Opciones: `--target <dir>`, `--force` (sobrescribir), `--dry-run`, `--no-agents-dir` (omite `.agents/skills`), `--check` (verifica la instalacion), `--uninstall`.
Nunca se sobrescriben archivos existentes sin `--force`, asi que varios boosts conviven en el mismo proyecto.

**Verifica:** ejecuta `npx boost-frontend --check`, recarga VS Code (`Developer: Reload Window`) y escribe `@` en Copilot Chat (agentes), `/` (prompts) y abre el selector de skills.

## Arranque rapido

1. Abre el repo en VS Code.
2. Revisa [`.github/copilot-instructions.md`](.github/copilot-instructions.md) — se activa automaticamente en Copilot.
3. Lanza un prompt desde `prompts/` segun lo que necesites.
4. Invoca un agente por nombre para foco experto.
5. Ajusta los `specs/` a tu stack antes de usar en produccion.

## Agentes disponibles

| Agente | Cuando usarlo |
| --- | --- |
| `FrontendPrincipalArchitect` | Arquitectura, boundaries, microfrontends, estado, despliegue |
| `AngularExpertAgent` | Features Angular: signals, standalone, lazy, deferrable views |
| `ReactExpertAgent` | Features React: hooks, composition, Suspense, App Router |
| `FrontendCodeReviewAgent` | Revision de PR: severidad, riesgo residual, quality gates |
| `AccessibilityAuditorAgent` | Hallazgos WCAG AA + plan de remediacion |
| `PerformanceAuditorAgent` | Core Web Vitals, bundle, telemetria y observabilidad |
| `TestingStrategistAgent` | Estrategia de pruebas y quality gates CI |
| `DesignSystemArchitectAgent` | Tokens, componentes base y governance |
| `MicrofrontendArchitectAgent` | Federacion, contratos host-remote, deploy independiente |
| `FrontendMigrationModernizationAgent` | Migracion incremental sin big-bang |

Ver la [matriz de enrutado completa](docs/operating-model.md#matriz-de-enrutado-de-agentes) y el [playbook prompt → template](docs/operating-model.md#playbook-prompt--template) en `docs/operating-model.md`.

## Filosofia

Production first. TypeScript strict. Accesibilidad por defecto. Performance medible. Arquitectura modular. Testing realista. Decision records para cambios estructurales. Cero humo: si algo no cuadra, el agente debe decirlo.

## Evals

```bash
npm run evals   # smoke evals del boost
npm run quality # validacion JSON + evals; bloquea antes de publicar
```

## Personalizacion recomendada

- `specs/frontend-architecture.spec.md` → tu stack real.
- `specs/design-system.spec.md` → tus tokens y componentes.
- `specs/security-auth.spec.md` → Entra ID / MSAL / OAuth2 segun aplique.
- `templates/adr-template.md` → tu formato de decisiones.

## Profundiza

- [docs/operating-model.md](docs/operating-model.md) — modelo operativo, matrices de agentes, playbook y specs.
- [docs/official-references.md](docs/official-references.md) — fuentes oficiales Angular, React, TypeScript, a11y, performance y seguridad.
- [examples/use-cases.md](examples/use-cases.md) — prompts de referencia por escenario.
- [examples/skills-use-cases.md](examples/skills-use-cases.md) — ejemplos de uso por skill.

## Naming and collisions

Installed assets are prefixed with `frontend-` (e.g. `.github/agents/frontend-<name>.agent.md`, `.github/skills/frontend-<name>/`) so several boosts can live in the same project, and internal references are rewritten to match.

- Nothing that already exists in the target is overwritten: each ignored file is reported with a `[WARN] ... already existed ... IGNORED` message. Use `--force` to overwrite.
- An existing `.github/copilot-instructions.md` is kept; the boost's global guidance is installed as `frontend-global.instructions.md` instead.
- Re-running the installer is safe; `--check` and `--uninstall` work from the manifest.

