type CardProps = {
  title: string;
  description: string;
  footer?: string;
};

export default function Card({ title, description, footer }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {footer && <small>{footer}</small>}
    </div>
  );
}
