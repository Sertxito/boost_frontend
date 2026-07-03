# Frontend Test Template

## Unit / component

```ts
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('selects the feature when the user clicks the button', async () => {
  const user = userEvent.setup();
  const onSelect = vi.fn();

  render(<FeatureCard id="feature-1" title="Feature" onSelect={onSelect} />);

  await user.click(screen.getByRole('button', { name: /seleccionar/i }));

  expect(onSelect).toHaveBeenCalledWith('feature-1');
});
```

Principios:

- Testear comportamiento, no implementacion.
- Buscar por roles accesibles.
- Evitar snapshots grandes.
