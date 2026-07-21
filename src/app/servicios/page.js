export default function Servicios() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-dark text-center mb-4">
          Nuestros servicios
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Tres formas de resolver la tecnología de tu negocio, sin complicaciones.
        </p>

        <div className="space-y-8">
          <div className="border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Presencia Digital Básica
            </h2>
            <p className="text-gray-600 mb-4">
              Web profesional, redes sociales configuradas y correo corporativo,
              todo en un paquete de precio fijo. Ideal si estás empezando tu
              presencia digital o necesitas renovarla.
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Soporte Técnico Mensual
            </h2>
            <p className="text-gray-600 mb-4">
              Mantenimiento recurrente de tus sistemas, respuesta rápida a
              incidencias, y seguimiento continuo. Tu negocio nunca se detiene
              por un problema técnico.
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Consultoría Digital Express
            </h2>
            <p className="text-gray-600 mb-4">
              Sesión estratégica de 2 horas donde diagnosticamos tu situación
              actual y trazamos un plan claro de siguientes pasos.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}