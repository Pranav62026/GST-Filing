function SectionLabel({ children, className = "" }) {
  return (
    <span
      className={`mb-2 inline-block text-xs font-bold uppercase tracking-widest text-brand-blue ${className}`}
    >
      {children}
    </span>
  );
}

export default SectionLabel;
