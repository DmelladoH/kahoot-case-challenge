interface Props {
  loading?: boolean;
  error?: boolean;
  loadingFallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
  children: React.ReactNode;
}

export function LoadingErrorWrapper({
  loading,
  error,
  loadingFallback,
  errorFallback,
  children,
}: Props) {
  if (loading && loadingFallback) {
    return loadingFallback;
  }

  if (error && errorFallback) {
    return errorFallback;
  }

  return <div>{children}</div>;
}
