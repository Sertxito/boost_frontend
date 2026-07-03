# Copilot Instructions - Frontend Expert Boost

Aplica estas instrucciones en todo el repositorio.

## Stack esperado

- TypeScript strict.
- Angular moderno cuando el proyecto sea Angular.
- React moderno cuando el proyecto sea React.
- Testing Library, Vitest/Jest y Playwright/Cypress segun proyecto.
- Accesibilidad WCAG AA.
- Performance con metricas y no solo sensaciones.

## Angular

Preferir:

- Standalone components.
- Signals para estado local/reactivo cuando tenga sentido.
- `input()`, `output()`, `computed()`, `effect()` cuando aplique.
- Control flow moderno: `@if`, `@for`, `@switch`.
- Lazy routes.
- Functional guards, resolvers e interceptors.
- Deferrable views para bloques pesados.

Evitar:

- NgModules nuevos si no son necesarios.
- Subscriptions manuales sin limpieza.
- Servicios gigantes tipo god service.
- Componentes con demasiadas responsabilidades.

## React

Preferir:

- Functional components.
- Custom hooks bien acotados.
- Composition sobre herencia.
- TanStack Query o equivalente para server state si el proyecto lo permite.
- React Hook Form + Zod si hay formularios complejos y ya encaja en el stack.
- Suspense/lazy para splitting cuando aporte valor.

Evitar:

- Context global para todo.
- Prop drilling excesivo.
- Memoizacion prematura.
- Efectos para derivar estado que puede calcularse.

## Reglas de calidad

Antes de terminar cualquier cambio:

- Revisar tipos.
- Revisar tests.
- Revisar accesibilidad basica.
- Revisar impacto en bundle/render.
- Revisar errores y estados vacios.
- Revisar seguridad del flujo.
- Documentar supuestos.
