import { bookTitle, unitTitle, unitDescription } from "@/data/unidad2";

export default function Home() {
  return (
    <div className="min-h-screen bg-sgel-light p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-12">
        {/* Prueba de Tipografías */}
        <div className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
          <h1 className="text-5xl font-serif font-bold text-sgel-red">
            Prueba de Tipografías SGEL
          </h1>

          {/* Merriweather Serif */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-sgel-dark">
              Merriweather (Serif - Para Títulos)
            </h2>
            <div className="space-y-2 pl-4">
              <p className="text-xl font-serif font-light">
                Font weight 300 (Light): El plural de nombres y adjetivos
              </p>
              <p className="text-xl font-serif font-normal">
                Font weight 400 (Regular): El plural de nombres y adjetivos
              </p>
              <p className="text-xl font-serif font-bold">
                Font weight 700 (Bold): El plural de nombres y adjetivos
              </p>
              <p className="text-xl font-serif font-black">
                Font weight 900 (Black): El plural de nombres y adjetivos
              </p>
            </div>
          </div>

          {/* PT Sans */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-sgel-dark">
              PT Sans (Sans-serif - Para Texto)
            </h2>
            <div className="space-y-2 pl-4">
              <p className="text-xl font-sans font-normal">
                Font weight 400 (Regular): Material interactivo para pizarras digitales
              </p>
              <p className="text-xl font-sans font-bold">
                Font weight 700 (Bold): Material interactivo para pizarras digitales
              </p>
            </div>
          </div>

          {/* Paleta de Colores SGEL */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-sgel-dark">
              Paleta de Colores SGEL
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="h-20 bg-sgel-red rounded-lg"></div>
                <p className="text-sm font-sans text-center">SGEL Red<br/>#d42a24</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-sgel-blue rounded-lg"></div>
                <p className="text-sm font-sans text-center">SGEL Blue<br/>#459BD8</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-sgel-green rounded-lg"></div>
                <p className="text-sm font-sans text-center">SGEL Green<br/>#62A25C</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-sgel-yellow rounded-lg"></div>
                <p className="text-sm font-sans text-center">SGEL Yellow<br/>#FFC924</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-sgel-dark rounded-lg"></div>
                <p className="text-sm font-sans text-center text-sgel-dark">SGEL Dark<br/>#1a1a1a</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-sgel-light rounded-lg border border-gray-300"></div>
                <p className="text-sm font-sans text-center">SGEL Light<br/>#f5f5f5</p>
              </div>
            </div>
          </div>

          {/* Datos del Proyecto */}
          <div className="space-y-4 pt-8 border-t-2 border-sgel-red">
            <h2 className="text-3xl font-serif font-bold text-sgel-red">
              {bookTitle}
            </h2>
            <h3 className="text-2xl font-serif font-normal text-sgel-blue">
              {unitTitle}
            </h3>
            <p className="text-lg font-sans text-sgel-dark">
              {unitDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
