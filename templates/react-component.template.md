# React Component Template

```tsx
type FeatureCardProps = Readonly<{
  id: string;
  title: string;
  description?: string;
  onSelect: (id: string) => void;
}>;

export function FeatureCard({ id, title, description, onSelect }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
      <button type="button" onClick={() => onSelect(id)}>
        Seleccionar
      </button>
    </article>
  );
}
```

Validaciones:

- Props readonly.
- Sin estado innecesario.
- Callback explicito.
- Semantica correcta.
