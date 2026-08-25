import { useState } from "react";

function Input({
  label,
  name,
  type = "text",
  placeholder = "",
  error,
  showPasswordToggle = false,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    showPasswordToggle && showPassword ? "text" : type;

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

      <div className="relative">
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          className={`w-full rounded-md border bg-surface px-3 py-2.5 pr-16 text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface-variant ${
            error
              ? "border-error focus:border-error"
              : "border-outline-variant focus:border-primary"
          } disabled:cursor-not-allowed disabled:bg-surface-container`}
          {...props}
        />

        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-on-surface-variant hover:text-on-surface"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1.5 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;