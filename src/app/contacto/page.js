export default function Contacto() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-dark mb-4">Contáctanos</h1>
        <p className="text-gray-600 mb-10">
          Cuéntanos qué necesita tu negocio y te respondemos el mismo día.
        </p>

        <div className="border border-gray-200 rounded-2xl p-8 space-y-4">
          <a
            href="https://wa.me/18093073064"
            className="block bg-primary text-white px-8 py-4 rounded-full font-medium hover:opacity-90"
          >
            Escríbenos por WhatsApp
          </a>
          <a
            href="mailto:veltec084@gmail.com"
            className="block bg-dark text-white px-8 py-4 rounded-full font-medium hover:opacity-90"
          >
            Escríbenos por correo
          </a>
        </div>
      </div>
    </main>
  );
}