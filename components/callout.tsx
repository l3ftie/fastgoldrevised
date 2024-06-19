interface CalloutProps {
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
}

export function Callout({ children, type = "default", ...props }: CalloutProps) {
  return (
    <div className="my-6 items-start rounded-md border border-l-4 p-4 w-full dark:max-w-none" {...props}>
      {children}
    </div>
  );
}
