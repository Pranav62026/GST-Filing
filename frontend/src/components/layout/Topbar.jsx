function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-outline-variant bg-surface px-6">
      <div>
        <h1 className="text-lg font-semibold text-on-surface">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="rounded-md p-2 text-secondary transition-colors hover:bg-surface-container hover:text-on-surface"
          aria-label="Notifications"
        >
          Notifications
        </button>

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container text-sm font-medium text-on-surface">
            V
          </div>

          <span className="hidden text-sm font-medium text-on-surface sm:block">
            Vishal
          </span>
        </div>
      </div>
    </header>
  );
}

export default Topbar;