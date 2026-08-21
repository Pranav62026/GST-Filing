function Button({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
  className = "",
}) {
  const variants = {
    primary:
      "bg-primary text-on-primary hover:bg-primary/90",
    secondary:
      "border border-outline-variant bg-surface text-on-surface hover:bg-surface-container",
    danger:
      "bg-error text-on-primary hover:bg-error/90",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`rounded-md px-4 py-2.5 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;