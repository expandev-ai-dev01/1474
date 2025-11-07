import { getLoadingSpinnerClassName } from './variants';
import type { LoadingSpinnerProps } from './types';

/**
 * @component LoadingSpinner
 * @summary Displays a loading spinner with configurable size and styling.
 * @domain core
 * @type ui-component
 * @category feedback
 *
 * @accessibility
 * - ARIA: role="status" with aria-label for screen readers
 * - Screen Reader: Announces "Loading..." to assistive technologies
 */
export const LoadingSpinner = ({ size = 'medium', className }: LoadingSpinnerProps) => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
      <div
        className={getLoadingSpinnerClassName({ size, className })}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
