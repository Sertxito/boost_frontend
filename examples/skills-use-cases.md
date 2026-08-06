# Ejemplos de uso por skill

Esta guia muestra ejemplos directos orientados a skills, no solo prompts.

## 1. Arquitectura frontend

- Skill: skills/frontend-architecture-review/SKILL.md
- Cuándo usar: decisiones de boundaries, ownership y roadmap.
- Ejemplo de solicitud:

```text
Analiza este repo con enfoque de arquitectura y aplica la skill frontend-architecture-review. Necesito hallazgos por severidad, quick wins de 2 semanas y plan de 90 dias.
```

- Salida sugerida: templates/frontend-architecture-review.template.md

## 2. Angular en produccion

- Skill: skills/angular-production-review/SKILL.md
- Cuándo usar: feature nueva o refactor con standalone + signals.
- Ejemplo de solicitud:

```text
Implementa esta feature en Angular aplicando angular-production-review. Incluye loading/error/empty, validacion accesible y plan de test unit/integration.
```

- Salida sugerida: templates/angular-standalone-component.template.md + templates/frontend-test.template.md

## 3. React en produccion

- Skill: skills/react-production-review/SKILL.md
- Cuándo usar: composicion de componentes, hooks y estado server/client.
- Ejemplo de solicitud:

```text
Implementa esta feature en React aplicando react-production-review. Quiero estrategia de estado, errores robustos y validacion de performance.
```

- Salida sugerida: templates/react-component.template.md + templates/frontend-test.template.md

## 4. Review de codigo

- Skill: skills/frontend-code-review/SKILL.md
- Cuándo usar: revision de PR o diff antes de merge.
- Ejemplo de solicitud:

```text
Revisa este diff con frontend-code-review. Clasifica hallazgos en Critical/High/Medium/Low y concluye si es mergeable.
```

- Salida sugerida: templates/frontend-code-review-report.template.md

## 5. Estrategia de testing

- Skill: skills/frontend-testing-strategy/SKILL.md
- Cuándo usar: release planning y calidad por riesgo.
- Ejemplo de solicitud:

```text
Define estrategia de testing para esta release usando frontend-testing-strategy. Incluye matriz riesgo->test, quality gates y plan anti-flakiness.
```

- Salida sugerida: templates/testing-strategy.template.md

## 6. Observabilidad frontend

- Skill: skills/frontend-observability-telemetry/SKILL.md
- Cuándo usar: instrumentacion operativa y alertas.
- Ejemplo de solicitud:

```text
Audita observabilidad con frontend-observability-telemetry: errores, eventos, CWV en campo y alertas con runbook.
```

- Salida sugerida: templates/performance-audit.template.md
