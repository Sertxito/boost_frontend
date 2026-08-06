# Ejemplo rellenado - Frontend Testing Strategy

## Contexto

- Scope: release 2026.08 storefront web.
- Criticidad: alta (impacta conversion en checkout).
- Riesgos principales: regresion en pagos, errores de session, degradacion de INP.

## Matriz riesgo -> test

| Riesgo | Nivel | Tipo de test | Cobertura objetivo |
| --- | --- | --- | --- |
| Calculo incorrecto de total | High | Unit + integration | 100% rutas de descuento y taxes |
| Sesion expirada en checkout | High | Integration + e2e | 100% flujo de recovery |
| Regresion de performance en submit | Medium | Performance integration | INP p75 menor a 200ms |
| Error de tracking de compra | Medium | Integration | 95% eventos criticos |

## Casos obligatorios

- Unit: pricing engine, validadores de formulario, mapeo de payload de pago.
- Integration: checkout shell + gateway adapter + manejo de errores.
- E2E: compra guest, compra logada, reintento tras error de red.

## Datos de prueba y mocks

- Fixtures de carrito minimo, multi-item y cupon combinado.
- Mock de gateway con respuestas success/timeout/declined.

## Estrategia anti-flakiness

- Control de reloj para tests sensibles a timeout.
- Esperas por estado visible, no por delays fijos.
- Retries solo en tests e2e no deterministas y con limite 1.

## Quality gates CI

- Typecheck: bloqueante.
- Lint: bloqueante.
- Test thresholds: ramas criticas 90% minimo.
- E2E policy: smoke obligatorio en PR, suite completa en main.

## Riesgo residual

- Medio-bajo: dependencia de sandbox de pagos en nightly.
