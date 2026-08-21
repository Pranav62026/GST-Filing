function Loader({ size = "md" }) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-2",
  };

  return (
    <div
      className={`animate-spin rounded-full border-outline-variant border-t-primary ${sizes[size]}`}
      role="status"
      aria-label="Loading"
    />
  );
}

export default Loader;