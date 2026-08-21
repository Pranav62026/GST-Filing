function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-surface-container text-on-surface-variant",
    success: "bg-green-50 text-success",
    warning: "bg-amber-50 text-warning",
    error: "bg-red-50 text-error",
    info: "bg-blue-50 text-blue-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;