export function Label({ htmlFor, children, className = "", ...props }) {
  return (
    <label htmlFor={htmlFor} className={"text-sm font-medium " + className} {...props}>
      {children}
    </label>
  );
}
