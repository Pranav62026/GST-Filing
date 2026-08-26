function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-surface-container text-on-surface-variant",
    success: "bg-green-950/60 text-green-400 border border-green-800/60",
    warning: "bg-amber-950/60 text-amber-400 border border-amber-800/60",
    error: "bg-red-950/60 text-red-400 border border-red-800/60",
    info: "bg-blue-950/60 text-blue-400 border border-blue-800/60",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
        variants[variant] || variants.default
      } ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
