import type { HomePageProps } from './types';

/**
 * @page HomePage
 * @summary Welcome page for the DataFlow application.
 * @domain core
 * @type landing-page
 * @category public
 *
 * @routing
 * - Path: /
 * - Guards: None (public page)
 *
 * @layout
 * - Layout: RootLayout
 * - Sections: Hero, Features
 */
export const HomePage = (props: HomePageProps) => {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Bem-vindo ao DataFlow</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Sistema simples e intuitivo para gerenciamento de registros. Crie, visualize, edite e
          exclua informações com praticidade.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-600 text-3xl mb-4">📝</div>
          <h3 className="text-xl font-semibold mb-2">Criação de Registros</h3>
          <p className="text-gray-600">
            Crie novos registros facilmente através de formulários intuitivos.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-600 text-3xl mb-4">👁️</div>
          <h3 className="text-xl font-semibold mb-2">Visualização de Registros</h3>
          <p className="text-gray-600">
            Consulte e visualize registros com opções de filtragem e ordenação.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-600 text-3xl mb-4">✏️</div>
          <h3 className="text-xl font-semibold mb-2">Edição de Registros</h3>
          <p className="text-gray-600">Modifique e atualize informações de registros existentes.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-600 text-3xl mb-4">🗑️</div>
          <h3 className="text-xl font-semibold mb-2">Exclusão de Registros</h3>
          <p className="text-gray-600">
            Remova registros com confirmação para evitar exclusões acidentais.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-600 text-3xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold mb-2">Interface Intuitiva</h3>
          <p className="text-gray-600">Interface simples e fácil de usar com navegação clara.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
