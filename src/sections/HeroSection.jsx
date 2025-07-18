// src/section/HeroSection.jsx

import { ArrowRight, Shield } from "lucide-react";
import Button from "@ui/button";

function HeroSection() {
  return (
    <section className="relative bg-black overflow-hidden min-h-screen flex items-center">
      {/* Formas geométricas de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-400 rounded-full opacity-5 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-yellow-400 opacity-10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
          {/* Texto principal */}
          <div className="lg:col-span-7 lg:col-start-1 space-y-8">
            {/* Badge “Especialistas desde 2008” */}
            <div className="inline-flex items-center bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-black rounded-full mr-2" />
              Especialistas desde 2008
            </div>

            {/* Titular */}
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              Aberturas que
              <span className="block text-yellow-400 relative">
                transforman
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded" />
              </span>
              <span className="block text-gray-300 text-4xl lg:text-5xl font-normal mt-4">
                espacios en hogares
              </span>
            </h1>

            {/* Descripción */}
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Diseñamos y fabricamos ventanas, puertas y cerramientos de
              aluminio premium. Cada proyecto es único, como tu hogar en la
              Patagonia.
            </p>

            {/* Botones de llamada a la acción */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 text-lg font-semibold group"
              >
                Explorar Productos
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent px-8 py-4 text-lg font-semibold"
              >
                Cotización Gratuita
              </Button>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-gray-400">Proyectos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-gray-400">Años</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">5</div>
                <div className="text-gray-400">Años Garantía</div>
              </div>
            </div>
          </div>

          {/* Tarjetas flotantes con imágenes */}
          <div className="lg:col-span-5 lg:col-start-8 relative h-[600px] hidden lg:block">
            {/* Tarjeta principal */}
            <div className="absolute top-0 right-0 w-80 h-96 bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="/placeholder.svg"
                alt="Ventana moderna de aluminio"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white font-semibold text-lg">
                  Ventanas Premium
                </h3>
                <p className="text-gray-300 text-sm">Diseño y funcionalidad</p>
              </div>
            </div>

            {/* Tarjeta secundaria */}
            <div className="absolute top-32 left-0 w-64 h-80 bg-yellow-400 rounded-2xl shadow-xl overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <img
                src="/placeholder.svg"
                alt="Puerta de entrada de aluminio"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white font-semibold">Puertas Seguras</h3>
                <p className="text-gray-300 text-sm">Protección total</p>
              </div>
            </div>

            {/* Elemento flotante con icono */}
            <div className="absolute bottom-0 right-12 w-48 h-32 bg-gray-900 rounded-xl shadow-lg p-4 border border-yellow-400">
              <div className="flex items-center justify-between h-full">
                <div>
                  <div className="text-yellow-400 text-2xl font-bold">
                    ★★★★★
                  </div>
                  <div className="text-white text-sm font-medium">
                    Calidad Premium
                  </div>
                </div>
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-black" />
                </div>
              </div>
            </div>

            {/* Elementos decorativos adicionales */}
            <div className="absolute top-20 left-20 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-40 right-4 w-6 h-6 border-2 border-yellow-400 rounded-full"></div>
            <div className="absolute top-60 left-12 w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
