# Modelo operativo del boost

## Como razona

1. Detecta framework y restricciones.
2. Aplica instrucciones globales.
3. Selecciona agente o skill mas relevante.
4. Usa specs como contrato de calidad.
5. Usa templates solo si aceleran sin romper convenciones.
6. Devuelve implementacion y validacion.

## Como evitar que se vuelva generico

- Siempre pedir contexto de repo o asumir explicitamente.
- Pedir salida con secciones fijas.
- Obligar a incluir trade-offs.
- Obligar a incluir tests.
- Obligar a incluir riesgos.

## Como integrarlo con tu plataforma agentic

Este boost puede vivir como dominio frontend dentro de una plataforma mayor:

- `boosts/frontend-expert-boost` como paquete independiente.
- Agentes frontend invocados por routing corporativo cuando el cambio afecte UI, SPA, microfrontends, design system o DX.
- Skills activadas por palabras clave como Angular, React, component, hook, signal, accessibility, performance o testing.
- Specs usados como contratos de calidad.
- Templates usados por agentes de generacion.

## Fuentes oficiales

Para decisiones tecnicas de framework, API o seguridad, contrasta siempre con fuentes oficiales antes de cerrar la recomendacion.

- Ver `docs/official-references.md` como indice principal de documentacion oficial.

---

## Matriz de enrutado de agentes

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
| Instrumentar o auditar observabilidad frontend | `PerformanceAuditorAgent` | `FrontendPrincipalArchitect`, `FrontendCodeReviewAgent` | Catalogo de telemetria + alertas + runbooks |
| Auditar autenticacion y seguridad frontend | `FrontendCodeReviewAgent` | `FrontendPrincipalArchitect` | Hallazgos por severidad + mitigaciones + riesgo residual |
| Modernizar codigo legacy sin reescritura total | `FrontendMigrationModernizationAgent` | `FrontendPrincipalArchitect`, `TestingStrategistAgent` | Roadmap incremental + estrategia de convivencia + rollback |

### Reglas de escalado rapido

1. Si la tarea cambia arquitectura, empieza por `FrontendPrincipalArchitect`.
2. Si la tarea cambia codigo de framework, usa `AngularExpertAgent` o `ReactExpertAgent` primero.
3. Si hay riesgo de release, pasa siempre por `FrontendCodeReviewAgent` antes de merge.
4. Si afecta UX critica, ejecuta tambien `AccessibilityAuditorAgent` y `PerformanceAuditorAgent`.
5. Si es migracion, evita big-bang y coordina con `FrontendMigrationModernizationAgent`.

---

## Playbook prompt → template

| Prompt | Agente recomendado | Skill | Template de salida |
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

---

## Indice de specs

| Spec | Cuando usar | Owner recomendado |
| --- | --- | --- |
| [specs/frontend-architecture.spec.md](../specs/frontend-architecture.spec.md) | Decisiones estructurales, boundaries, ownership y evolucion | `FrontendPrincipalArchitect` |
| [specs/angular-modern.spec.md](../specs/angular-modern.spec.md) | Features/refactors Angular con standalone, signals y routing | `AngularExpertAgent` |
| [specs/react-modern.spec.md](../specs/react-modern.spec.md) | Features/refactors React con hooks, estado y rendimiento | `ReactExpertAgent` |
| [specs/design-system.spec.md](../specs/design-system.spec.md) | Tokens, componentes base, theming y governance | `DesignSystemArchitectAgent` |
| [specs/microfrontends.spec.md](../specs/microfrontends.spec.md) | Evaluar o implementar estrategia microfrontend | `MicrofrontendArchitectAgent` |
| [specs/quality-gates.spec.md](../specs/quality-gates.spec.md) | Definir gates de CI/CD y criterios de merge/release | `TestingStrategistAgent` |
| [specs/security-auth.spec.md](../specs/security-auth.spec.md) | Auditar o diseñar controles de auth y seguridad frontend | `FrontendCodeReviewAgent` |
| [specs/observability.spec.md](../specs/observability.spec.md) | Definir telemetria, dashboards y alertas de frontend | `PerformanceAuditorAgent` |
