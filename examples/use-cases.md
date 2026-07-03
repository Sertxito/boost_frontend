# Casos de uso rapidos

Ejemplos listos para copiar y adaptar. Cada caso indica el prompt recomendado y el artefacto de salida esperado.

## 1. Revisar arquitectura frontend

Prompt:

```text
Usa .github/prompts/frontend-architecture-review.prompt.md para revisar este repo. Quiero diagnostico por dominio, riesgos por severidad, quick wins de 2 semanas y plan de 90 dias.
```

Salida esperada:

- templates/frontend-architecture-review.template.md

## 2. Crear una feature Angular

Prompt:

```text
Usa .github/prompts/generate-angular-feature.prompt.md para implementar esta feature: [describe funcionalidad]. Incluye estados loading/error/empty, tests y checklist a11y.
```

Salida esperada:

- templates/angular-standalone-component.template.md
- templates/frontend-test.template.md

## 3. Crear una feature React

Prompt:

```text
Usa .github/prompts/generate-react-feature.prompt.md para implementar esta feature: [describe funcionalidad]. Incluye estrategia de estado, tests y validacion de rendimiento.
```

Salida esperada:

- templates/react-component.template.md
- templates/frontend-test.template.md

## 4. Review severa de PR

Prompt:

```text
Usa .github/prompts/code-review-frontend.prompt.md para revisar este diff. Clasifica hallazgos en Critical/High/Medium/Low y di si es mergeable.
```

Salida esperada:

- templates/frontend-code-review-report.template.md

## 5. Auditar accesibilidad

Prompt:

```text
Usa .github/prompts/audit-accessibility.prompt.md sobre estas rutas: [lista]. Necesito hallazgos WCAG AA y plan de remediacion priorizado.
```

Salida esperada:

- templates/accessibility-audit.template.md

## 6. Auditar performance

Prompt:

```text
Usa .github/prompts/audit-performance.prompt.md para rutas criticas. Quiero baseline, cuellos de botella y plan de optimizacion por impacto/esfuerzo.
```

Salida esperada:

- templates/performance-audit.template.md

## 7. Auditar seguridad y autenticacion

Prompt:

```text
Usa .github/prompts/audit-security-auth.prompt.md para evaluar auth, tokens, XSS/CSRF/CSP y secretos expuestos.
```

Salida esperada:

- templates/security-auth-audit.template.md

## 8. Definir estrategia de testing

Prompt:

```text
Usa .github/prompts/define-testing-strategy.prompt.md para esta release. Quiero matriz riesgo->test, quality gates CI y plan anti-flakiness.
```

Salida esperada:

- templates/testing-strategy.template.md

## 9. Diseñar o escalar design system

Prompt:

```text
Usa .github/prompts/design-system-plan.prompt.md para definir tokens, API de componentes y plan de adopcion por equipos.
```

Salida esperada:

- templates/adr-template.md

## 10. Decidir estrategia de microfrontends

Prompt:

```text
Usa .github/prompts/microfrontend-decision.prompt.md para decidir microfrontend vs modular monolith en este dominio: [describe dominio].
```

Salida esperada:

- templates/adr-template.md

## 11. Plan de modernizacion incremental

Prompt:

```text
Usa .github/prompts/frontend-modernization-plan.prompt.md para modernizar este frontend legacy sin big-bang. Quiero fases, rollback y criterios de retirada de legacy.
```

Salida esperada:

- templates/frontend-modernization-plan.template.md

## 12. Crear ADR de decision tecnica

Prompt:

```text
Usa .github/prompts/create-frontend-adr.prompt.md para esta decision: [describe decision]. Necesito alternativas descartadas, riesgos y plan de validacion.
```

Salida esperada:

- templates/adr-template.md
