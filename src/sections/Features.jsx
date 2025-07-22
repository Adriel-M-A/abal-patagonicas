import { Shield, Truck, Wrench, Star } from "lucide-react";

function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Garantía Extendida */}
          <div className="text-center">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-semibold mb-2">Garantía Extendida</h3>
            <p className="text-gray-600">
              5 años de garantía en todos nuestros productos
            </p>
          </div>

          {/* Envío Gratis */}
          <div className="text-center">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-semibold mb-2">Envío Gratis</h3>
            <p className="text-gray-600">Entrega gratuita en toda la región</p>
          </div>

          {/* Instalación */}
          <div className="text-center">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-semibold mb-2">Instalación</h3>
            <p className="text-gray-600">Servicio de instalación profesional</p>
          </div>

          {/* Calidad Premium */}
          <div className="text-center">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-semibold mb-2">Calidad Premium</h3>
            <p className="text-gray-600">Materiales de primera calidad</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
