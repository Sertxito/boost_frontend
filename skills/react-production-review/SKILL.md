---
name: react-production-review
description: 'Revisa o implementa React moderno y Next.js con estado, rendering, accesibilidad, performance y tests.'
---

# react-production-review

## Description

Revisa o implementa React moderno y Next.js con hooks, estado, rendering, accesibilidad, performance y tests.

## When to use

Usa esta skill para diseno de features React o Next.js, refactor de componentes/hooks, estrategia de estado y optimizacion de render.

## Instructions

1. Lee el contexto existente antes de proponer cambios.
2. Modela el dominio por composicion, no por jerarquia tecnica.
3. Separa explicitamente server state, UI state y URL state.
4. Limita useEffect a efectos reales; evita derivar estado por efectos.
5. Define loading/empty/error y comportamiento de reintentos.
6. Evalua impacto de rendering y bundle antes de cerrar.

### Next.js

1. Identifica la version y si la ruta usa App Router o Pages Router; conserva las convenciones del proyecto y no propongas una migracion implicita.
2. En App Router, usa Server Components por defecto y limita `'use client'` a los componentes que necesiten interactividad, hooks de cliente o APIs del navegador. Manten secretos y operaciones sensibles en el servidor; pasa solo datos serializables al cliente.
3. Decide fetching, cache e invalidacion segun la version y los requisitos de frescura y privacidad. No almacenes en caches compartidas datos privados sin una estrategia de aislamiento validada.
4. En Server Actions y Route Handlers, valida entradas y comprueba autenticacion y autorizacion en el servidor para cada operacion protegida.
5. Usa los mecanismos de carga y error apropiados del router existente y comprueba estados vacios, navegacion y accesibilidad.
6. Valida el cambio en la aplicacion en ejecucion, ademas de ejecutar las pruebas y comprobaciones disponibles. Revisa errores de servidor, consola e hidratacion y mide el impacto en bundle o render cuando aplique.

Ejemplo: en App Router, una pagina que muestra datos privados obtiene y autoriza los datos en el servidor; un boton interactivo puede vivir en un Client Component separado. No envias credenciales ni datos innecesarios al navegador.

## Output esperado

- Decision recomendada y trade-off principal.
- Arbol de componentes y ownership funcional.
- Estrategia de estado y data fetching.
- Plan de implementacion incremental.
- Plan de test y riesgo residual.

## Checklist

- [ ] Tipos correctos.
- [ ] Hooks acotados y sin responsabilidades mezcladas.
- [ ] Sin context global innecesario.
- [ ] Estados loading/error/empty cubiertos.
- [ ] A11y validada en componentes interactivos.
- [ ] Coste de render y bundle revisado.
- [ ] Tests definidos por riesgo.
- [ ] En Next.js, router, version, limites servidor/cliente, seguridad y cache revisados.
