# Frontend Expert Boost - Angular + React

Boost estilo awesome-copilot para convertir Copilot / agentes en un equipo frontend senior/principal orientado a produccion.

Paquete npm: `mcpee-frontend`.

## Que incluye

- Agentes especializados para arquitectura frontend, Angular, React, microfrontends, testing, accesibilidad, performance, design systems, migraciones y revision de codigo.
- Skills autoactivables con instrucciones operativas y checklists repetibles.
- Instrucciones de repositorio para GitHub Copilot.
- Specs de arquitectura, calidad, seguridad, performance, accesibilidad y observabilidad.
- Templates para componentes, tests, ADRs, auditorias y planes de implementacion.
- Prompts de uso frecuente para aplicar el boost en VS Code / GitHub Copilot.
- Plugin manifest para distribuirlo como paquete de personalizacion.

## Estructura

```text
frontend-expert-boost/
├── AGENTS.md
├── README.md
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

## Publicacion npm

```bash
npm publish --access public
```

## Evals y control de regresiones

```bash
npm run evals
npm run quality
```

`npm run quality` ejecuta validacion de JSON y evals smoke del boost para bloquear errores de cobertura antes de publicar.

Instalacion como dependencia:

```bash
npm i -D mcpee-frontend
```

## Instalacion manual

Copia las carpetas `agents`, `instructions`, `prompts`, `skills`, `specs`, `templates` y `docs` en la raiz de tu repo.

Para usarlo con GitHub Copilot:

1. Abre el repo en VS Code.
2. Revisa `.github/copilot-instructions.md`.
3. Lanza prompts desde `prompts/`.
4. Invoca agentes por nombre cuando necesites foco experto.
5. Usa los templates como punto de partida, no como dogma.

## Filosofia

Este boost no esta pensado para generar componentes bonitos y ya. Esta pensado para revisar y construir frontend como lo haria un arquitecto: con criterio, trade-offs, seguridad, accesibilidad, rendimiento, DX y mantenibilidad.

Principios:

- Production first.
- TypeScript strict.
- Accesibilidad por defecto.
- Performance medible.
- Arquitectura modular.
- Testing realista.
- Decision records para decisiones importantes.
- Cero humo: si algo no cuadra, el agente debe decirlo.

## Modos de uso

### Modo arquitectura

Usa `FrontendPrincipalArchitect` para decidir estructura, boundaries, microfrontends, monorepo, design system, estado y estrategia de despliegue.

### Modo Angular

Usa `AngularExpertAgent` para Angular moderno con standalone components, signals, functional guards/interceptors, lazy loading y deferrable views.

### Modo React

Usa `ReactExpertAgent` para React moderno, hooks, composition, Suspense, arquitectura de estado, React Server Components si aplica y Next.js App Router si el proyecto lo usa.

### Modo calidad

Usa `FrontendCodeReviewAgent`, `AccessibilityAuditorAgent`, `PerformanceAuditorAgent` y `TestingStrategistAgent` para revisar cambios antes de mergear.

### Modo diseno y plataforma

Usa `DesignSystemArchitectAgent` para tokens y componentes base, y `MicrofrontendArchitectAgent` para decisiones de federacion, contratos y deploy independiente.

## Matriz de enrutado de agentes

Usa esta matriz para decidir rapido que agente invocar segun el tipo de tarea.

| Escenario | Agente principal | Agentes de apoyo | Entregable esperado |
| --- | --- | --- | --- |
| Definir arquitectura frontend para 6-12 meses | `FrontendPrincipalArchitect` | `MicrofrontendArchitectAgent`, `DesignSystemArchitectAgent` | Decision de arquitectura + ADR + plan por fases |
| Crear feature Angular nueva | `AngularExpertAgent` | `TestingStrategistAgent`, `AccessibilityAuditorAgent` | Implementacion + plan de pruebas + checklist a11y |
| Crear feature React nueva | `ReactExpertAgent` | `TestingStrategistAgent`, `PerformanceAuditorAgent` | Implementacion + estrategia de estado + validacion de rendimiento |
| Evaluar si usar microfrontends | `MicrofrontendArchitectAgent` | `FrontendPrincipalArchitect` | Recomendacion con trade-offs + contratos host-remote |
| Disenar o escalar design system | `DesignSystemArchitectAgent` | `AccessibilityAuditorAgent`, `FrontendPrincipalArchitect` | Taxonomia de tokens + API de componentes + governance |
| Revisar PR antes de merge | `FrontendCodeReviewAgent` | `TestingStrategistAgent`, `PerformanceAuditorAgent` | Hallazgos por severidad + riesgo residual |
| Subir cobertura y calidad de tests | `TestingStrategistAgent` | `FrontendCodeReviewAgent` | Estrategia de pruebas + quality gates CI |
| Corregir problemas WCAG AA | `AccessibilityAuditorAgent` | `FrontendCodeReviewAgent` | Hallazgos WCAG + plan de remediacion |
| Mejorar Core Web Vitals y bundle | `PerformanceAuditorAgent` | `ReactExpertAgent` o `AngularExpertAgent` | Diagnostico de cuellos de botella + plan medible |
| Instrumentar o auditar observabilidad frontend | `PerformanceAuditorAgent` | `FrontendPrincipalArchitect`, `FrontendCodeReviewAgent` | Catalogo de telemetria + alertas + runbooks + plan de validacion |
| Auditar autenticacion y seguridad frontend | `FrontendCodeReviewAgent` | `FrontendPrincipalArchitect` | Hallazgos por severidad + mitigaciones + riesgo residual |
| Modernizar codigo legacy sin reescritura total | `FrontendMigrationModernizationAgent` | `FrontendPrincipalArchitect`, `TestingStrategistAgent` | Roadmap incremental + estrategia de convivencia + rollback |

### Reglas de escalado rapido

1. Si la tarea cambia arquitectura, empieza por `FrontendPrincipalArchitect`.
2. Si la tarea cambia codigo de framework, usa `AngularExpertAgent` o `ReactExpertAgent` primero.
3. Si hay riesgo de release, pasa siempre por `FrontendCodeReviewAgent` antes de merge.
4. Si afecta UX critica, ejecuta tambien `AccessibilityAuditorAgent` y `PerformanceAuditorAgent`.
5. Si es migracion, evita big-bang y coordina con `FrontendMigrationModernizationAgent`.

## Playbook prompt -> template

Usa esta tabla para ejecutar rapido un flujo completo: pedir bien al agente y documentar/entregar con formato consistente.

| Prompt | Agente recomendado | Skill recomendada | Template de salida |
| --- | --- | --- | --- |
| `prompts/generate-react-feature.prompt.md` | `ReactExpertAgent` | `skills/react-production-review/SKILL.md` | `templates/react-component.template.md` + `templates/frontend-test.template.md` |
| `prompts/generate-angular-feature.prompt.md` | `AngularExpertAgent` | `skills/angular-production-review/SKILL.md` | `templates/angular-standalone-component.template.md` + `templates/frontend-test.template.md` |
| `prompts/code-review-frontend.prompt.md` | `FrontendCodeReviewAgent` | `skills/frontend-code-review/SKILL.md` | `templates/frontend-code-review-report.template.md` |
| `prompts/create-frontend-adr.prompt.md` | `FrontendPrincipalArchitect` | `skills/frontend-architecture-review/SKILL.md` | `templates/adr-template.md` |
| `prompts/frontend-architecture-review.prompt.md` | `FrontendPrincipalArchitect` | `skills/frontend-architecture-review/SKILL.md` | `templates/frontend-architecture-review.template.md` |
| `prompts/frontend-modernization-plan.prompt.md` | `FrontendMigrationModernizationAgent` | `skills/frontend-modernization-migration/SKILL.md` | `templates/frontend-modernization-plan.template.md` |
| `prompts/audit-accessibility.prompt.md` | `AccessibilityAuditorAgent` | `skills/accessibility-wcag-aa/SKILL.md` | `templates/accessibility-audit.template.md` |
| `prompts/audit-performance.prompt.md` | `PerformanceAuditorAgent` | `skills/performance-core-web-vitals/SKILL.md` | `templates/performance-audit.template.md` |
| `prompts/audit-observability.prompt.md` | `PerformanceAuditorAgent` | `skills/frontend-observability-telemetry/SKILL.md` | `templates/performance-audit.template.md` |
| `prompts/audit-security-auth.prompt.md` | `FrontendCodeReviewAgent` | `skills/security-auth-frontend/SKILL.md` | `templates/security-auth-audit.template.md` |
| `prompts/define-testing-strategy.prompt.md` | `TestingStrategistAgent` | `skills/frontend-testing-strategy/SKILL.md` | `templates/testing-strategy.template.md` |
| `prompts/design-system-plan.prompt.md` | `DesignSystemArchitectAgent` | `skills/design-system-governance/SKILL.md` | `templates/adr-template.md` |
| `prompts/microfrontend-decision.prompt.md` | `MicrofrontendArchitectAgent` | `skills/microfrontend-decision/SKILL.md` | `templates/adr-template.md` |

## Que hace docs y por que no va todo al README

`README.md` es la portada del boost: explica que incluye, como arrancar y como enrutar.

La carpeta `docs` guarda guias operativas que son mas largas y cambiantes:

- `docs/operating-model.md`: explica como razona el boost y como integrarlo en una plataforma agentic.
- `docs/official-references.md`: catalogo de fuentes oficiales (Angular, React, TypeScript, testing, a11y, performance y seguridad).

La carpeta `examples` guarda ejemplos de uso listos para copiar y adaptar:

- `examples/use-cases.md`: prompts de referencia por escenario.
- `examples/skills-use-cases.md`: ejemplos de uso directos por skill.
- `examples/template-examples/`: ejemplos de salida ya rellenados desde templates.

Regla practica:

- README = indice y flujo rapido.
- docs = profundidad operativa.
- examples = ejemplos reutilizables.

## Personalizacion recomendada

Ajusta:

- `specs/frontend-architecture.spec.md` a tu stack real.
- `specs/design-system.spec.md` a tu sistema de tokens y componentes.
- `specs/security-auth.spec.md` a Entra ID / Azure AD B2C / MSAL / OAuth2 segun aplique.
- `templates/adr-template.md` a tu formato de decisiones.

## Indice rapido de specs

| Spec | Cuando usar | Owner recomendado |
| --- | --- | --- |
| [specs/frontend-architecture.spec.md](specs/frontend-architecture.spec.md) | Decisiones estructurales, boundaries, ownership y evolucion | `FrontendPrincipalArchitect` |
| [specs/angular-modern.spec.md](specs/angular-modern.spec.md) | Features/refactors Angular con standalone, signals y routing | `AngularExpertAgent` |
| [specs/react-modern.spec.md](specs/react-modern.spec.md) | Features/refactors React con hooks, estado y rendimiento | `ReactExpertAgent` |
| [specs/design-system.spec.md](specs/design-system.spec.md) | Tokens, componentes base, theming y governance | `DesignSystemArchitectAgent` |
| [specs/microfrontends.spec.md](specs/microfrontends.spec.md) | Evaluar o implementar estrategia microfrontend | `MicrofrontendArchitectAgent` |
| [specs/quality-gates.spec.md](specs/quality-gates.spec.md) | Definir gates de CI/CD y criterios de merge/release | `TestingStrategistAgent` |
| [specs/security-auth.spec.md](specs/security-auth.spec.md) | Auditar o diseñar controles de auth y seguridad frontend | `FrontendCodeReviewAgent` |
| [specs/observability.spec.md](specs/observability.spec.md) | Definir telemetria, dashboards y alertas de frontend | `PerformanceAuditorAgent` |

## Resultado esperado

Cuando este boost esta activo, Copilot debe comportarse como un principal frontend engineer: no solo escribe codigo, sino que explica por que, detecta riesgos, propone alternativas y protege la calidad del producto.
