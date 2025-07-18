/**
 * Componente Button reutilizable con variantes de estilo y tamaños.
 * @param {object} props
 * @param {React.ReactNode} props.children – Contenido del botón.
 * @param {'sm'|'md'|'lg'} [props.size='md'] – Tamaño del botón.
 * @param {'default'|'outline'} [props.variant='default'] – Variante de estilo.
 * @param {string} [props.className] – Clases adicionales de Tailwind.
 * @param {object} [props.props] – Props extra (onClick, disabled, etc.).
 */
function Button({
  children,
  size = "md",
  variant = "default",
  className = "",
  ...props
}) {
  // Clases base para todos los botones
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded";

  // Definición de tamaños
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Definición de variantes
  const variantClasses = {
    default: "bg-black text-white hover:bg-gray-800",
    outline:
      "border border-black bg-transparent hover:bg-black hover:text-white",
  };

  // Composición final de clases
  const classes = [
    baseClasses,
    sizeClasses[size] || sizeClasses.md,
    variantClasses[variant] || variantClasses.default,
    className,
  ].join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
