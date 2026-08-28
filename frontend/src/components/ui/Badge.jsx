function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    // Neutral — calm, informational, no emotional signal
    default: "bg-slate-500/10 text-slate-300 border border-slate-400/20",

    // Success — positive confirmation and reassurance
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-400/25",

    // Pending — attention without creating danger/alarm
    warning: "bg-amber-500/10 text-amber-400 border border-amber-400/25",

    // Error / rejected — strong attention and urgency
    error: "bg-red-500/10 text-red-400 border border-red-400/25",

    // Information — trustworthy, neutral action/information
    info: "bg-blue-500/10 text-blue-400 border border-blue-400/25",
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
