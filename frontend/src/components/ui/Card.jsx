function Card({
  children,
  className = "",
  padding = true,
}) {
  return (
    <div
      className={`rounded-md border border-outline-variant bg-surface ${
        padding ? "p-5" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;