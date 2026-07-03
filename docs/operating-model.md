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
