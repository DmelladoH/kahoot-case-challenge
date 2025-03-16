import { Children, cloneElement, isValidElement, ReactElement } from "react";

export function Slot({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const child = Children.only(children);

  if (!isValidElement(child)) {
    return null;
  }

  const elem = child as ReactElement<{ className?: string }>;

  const combinedClassName = `${className} ${elem.props?.className || ""}`;

  return cloneElement(elem, {
    ...props,
    ...elem.props,
    className: combinedClassName,
  });
}
