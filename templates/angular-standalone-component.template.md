# Angular Standalone Component Template

```ts
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  template: `
    <article class="feature-card">
      <h2>{{ title() }}</h2>
      @if (description()) {
        <p>{{ description() }}</p>
      }
      <button type="button" (click)="selected.emit(id())">
        Seleccionar
      </button>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCardComponent {
  readonly id = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input<string | null>(null);
  readonly selected = output<string>();

  readonly hasDescription = computed(() => Boolean(this.description()));
}
```

Validaciones:

- Inputs tipados.
- Sin NgModule.
- OnPush.
- Estados opcionales tratados.
- HTML semantico.
