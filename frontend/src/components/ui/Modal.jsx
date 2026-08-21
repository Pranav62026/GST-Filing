function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-md border border-outline-variant bg-surface"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-outline-variant px-5 py-4">
          <h2 className="text-lg font-semibold text-on-surface">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-md px-2 py-1 text-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;