function Input({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error,
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="mb-1.5 block text-sm font-medium text-on-surface"
        >
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full rounded-md border bg-surface px-3 py-2.5 text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface-variant ${
          error
            ? "border-error focus:border-error"
            : "border-outline-variant focus:border-primary"
        } disabled:cursor-not-allowed disabled:bg-surface-container ${className}`}
        {...props}
      />

      {error && (
        <p className="mt-1.5 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;