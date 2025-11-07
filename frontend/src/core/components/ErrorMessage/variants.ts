import { clsx } from 'clsx';

export interface ErrorMessageVariantProps {
  variant?: 'error' | 'warning' | 'info';
}

export function getErrorMessageClassName(props: ErrorMessageVariantProps): string {
  const { variant = 'error' } = props;

  return clsx('max-w-md w-full p-8 rounded-lg shadow-lg', {
    'bg-red-50 border-2 border-red-200': variant === 'error',
    'bg-yellow-50 border-2 border-yellow-200': variant === 'warning',
    'bg-blue-50 border-2 border-blue-200': variant === 'info',
  });
}
