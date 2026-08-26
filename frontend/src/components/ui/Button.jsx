function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className = "",
  as,
  href,
  target,
  rel,
  ...props
}) {
  const variants = {
    primary:
      "bg-primary text-on-primary hover:bg-primary/90",
    secondary:
      "border border-outline-variant bg-surface text-on-surface hover:bg-surface-container",
    danger:
      "bg-error text-on-primary hover:bg-error/90",
    navy:
      "bg-brand-navy text-white hover:bg-brand-navy-light",
    whatsapp:
      "bg-brand-whatsapp text-white hover:bg-brand-green-bright",
    "outline-brand":
      "border-2 border-brand-blue text-brand-blue bg-white hover:bg-brand-blue-light",
  };

  const sizes = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const baseClass = `inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (as === "a" || href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseClass}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={baseClass}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;