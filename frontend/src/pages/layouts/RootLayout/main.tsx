import { Outlet } from 'react-router-dom';
import type { RootLayoutProps } from './types';

/**
 * @layout RootLayout
 * @summary Root layout component that wraps all pages with common structure.
 * @domain core
 * @type layout-component
 * @category layout
 *
 * @structure
 * - Header: Application header with navigation
 * - Main: Page content area
 * - Footer: Application footer
 */
export const RootLayout = (props: RootLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">DataFlow</h1>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            © 2024 DataFlow. Sistema de Gerenciamento de Registros.
          </p>
        </div>
      </footer>
    </div>
  );
};
