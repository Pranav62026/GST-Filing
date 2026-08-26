import { useState } from "react";

function Input({
  label,
  name,
  type = "text",
  placeholder = "",
  error,
  showPasswordToggle = false,
  variant = "dark",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPasswordToggle && showPassword ? "text" : type;

  const isLight = variant === "light";

  const inputClasses = `
    w-full
    rounded-md
    border
    px-3
    py-2.5
    pr-16
    text-sm
    outline-none
    transition-colors
    disabled:cursor-not-allowed
    ${
      error
        ? "border-error focus:border-error"
        : isLight
          ? "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#212C43]"
          : "border-outline-variant bg-surface text-on-surface placeholder:text-on-surface-variant focus:border-primary"
    }
    ${isLight ? "disabled:bg-slate-100" : "disabled:bg-surface-container"}
  `;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className={`mb-1.5 block text-sm font-medium ${
            isLight ? "text-slate-900" : "text-on-surface"
          }`}
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
          className={inputClasses}
          {...props}
        />

        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={`absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium ${
              isLight
                ? "text-slate-500 hover:text-slate-900"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {error && <p className="mt-1.5 text-sm text-error">{error}</p>}
    </div>
  );
}

export default Input;
