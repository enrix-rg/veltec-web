import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
       <header className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-primary">V</span>
          <span className="text-dark">ELTEC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/servicios" className="text-dark hover:text-primary">
            Servicios
          </Link>
          <Link href="/nosotros" className="text-dark hover:text-primary">
            Nosotros
          </Link>
          <Link href="/contacto" className="text-dark hover:text-primary">
            Contacto
          </Link>
        </nav>

        <Link
          href="/contacto"
          className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:opacity-90"
        >
          Contáctanos
        </Link>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
          Tu socio tecnológico de confianza
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sin la informalidad de un freelancer, sin el costo de una corporación.
          Soluciones digitales pensadas para PYMEs dominicanas.
        </p>
        <a
          href="#servicios"
          className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90"
        >
          Ver servicios
        </a>
      </section>

      {/* Servicios */}
      <section id="servicios" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-dark text-center mb-12">
          Nuestros servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-dark mb-2">
              Presencia Digital Básica
            </h3>
            <p className="text-gray-600">
              Web, redes sociales y correo corporativo en un solo paquete.
            </p>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-dark mb-2">
              Soporte Técnico Mensual
            </h3>
            <p className="text-gray-600">
              Mantenimiento recurrente para que tu negocio nunca se detenga.
            </p>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-dark mb-2">
              Consultoría Digital Express
            </h3>
            <p className="text-gray-600">
              Sesión estratégica de 2 horas para diagnosticar y planificar.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-dark text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
        <p className="text-gray-300 mb-8">
          Escríbenos y te respondemos el mismo día.
        </p>
        <a
          href="https://wa.me/18093073064"
          className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90"
        >
          Escríbenos por WhatsApp
        </a>
      </section>
    </main>
  );
}