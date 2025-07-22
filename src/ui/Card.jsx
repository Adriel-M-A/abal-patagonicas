/**
 * Componente Card: contenedor externo con estilos de tarjeta.
 * @param {object} props
 * @param {string} [props.className] – Clases adicionales de Tailwind.
 * @param {object} [props.props] – Props extra (onClick, etc.).
 */
function Card({ children, className = "", ...props }) {
  const baseClasses = "bg-white rounded-2xl shadow-lg overflow-hidden";
  return (
    <div className={[baseClasses, className].join(" ")} {...props}>
      {children}
    </div>
  );
}

/**
 * Componente CardContent: contenedor interno para el contenido de la tarjeta.
 * @param {object} props
 * @param {string} [props.className] – Clases adicionales de Tailwind.
 * @param {object} [props.props] – Props extra.
 */
export function CardContent({ children, className = "", ...props }) {
  const baseClasses = "p-4";
  return (
    <div className={[baseClasses, className].join(" ")} {...props}>
      {children}
    </div>
  );
}

export default Card;
