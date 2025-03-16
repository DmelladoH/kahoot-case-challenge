import styles from "./skeleton.module.css";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`${styles.container} ${styles.pulse} ${className}`}
      {...props}
    />
  );
}

export { Skeleton };
