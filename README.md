# Frontend Expert Boost

Convierte Copilot y agentes en un equipo frontend senior/principal orientado a produccion: Angular, React, arquitectura, calidad, accesibilidad y performance.

Paquete npm: `mcpee-frontend`.

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

Como dependencia de desarrollo:

```bash
npm i -D mcpee-frontend
```

O copia manualmente `agents`, `instructions`, `prompts`, `skills`, `specs`, `templates` y `docs` en la raiz de tu repo.

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
