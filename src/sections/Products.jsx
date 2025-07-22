import Card, { CardContent } from "@ui/Card";
import Button from "@ui/button";

function Products() {
  return (
    <section id="productos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nuestros <span className="text-yellow-500">Productos</span>
          </h2>
          <p className="text-xl text-gray-600">
            Descubre nuestra amplia gama de aberturas de aluminio
          </p>
        </div>

        {/* Grid de mosaico */}
        <div className="grid grid-cols-12 gap-4 h-[800px]">
          {/* Ventanas Corredizas - Grande */}
          <Card className="col-span-12 md:col-span-6 row-span-2 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0 h-full relative">
              <img
                src="/placeholder.svg"
                alt="Ventanas Corredizas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Ventanas Corredizas
                  </h3>
                  <p className="text-lg">Máximo aprovechamiento del espacio</p>
                  <Button className="mt-4 yellow">Ver Modelos</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Puertas de Entrada */}
          <Card className="col-span-12 md:col-span-6 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0 h-full relative">
              <img
                src="/placeholder.svg"
                alt="Puertas de Entrada"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Puertas de Entrada</h3>
                  <p>Seguridad y elegancia</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ventanas Batientes */}
          <Card className="col-span-6 md:col-span-3 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0 h-full relative">
              <img
                src="/placeholder.svg"
                alt="Ventanas Batientes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300">
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg font-bold">Ventanas Batientes</h3>
                  <p className="text-sm">Ventilación óptima</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cerramientos */}
          <Card className="col-span-6 md:col-span-3 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0 h-full relative">
              <img
                src="/placeholder.svg"
                alt="Cerramientos"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300">
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg font-bold">Cerramientos</h3>
                  <p className="text-sm">Espacios protegidos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mamparas */}
          <Card className="col-span-6 md:col-span-4 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0 h-full relative">
              <img
                src="/placeholder.svg"
                alt="Mamparas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Mamparas</h3>
                  <p>Divisiones modernas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Portones */}
          <Card className="col-span-6 md:col-span-2 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0 h-full relative">
              <img
                src="/placeholder.svg"
                alt="Portones"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300">
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg font-bold">Portones</h3>
                  <p className="text-sm">Acceso vehicular</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Products;
