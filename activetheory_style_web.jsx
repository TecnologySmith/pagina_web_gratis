import { useEffect } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  useEffect(() => {
    document.title = "TecnologySmith - Webs Gratis para Emprendedores";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white font-sans overflow-x-hidden">
      {/* Hero section estilo Lusion */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          TecnologySmith
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl mt-6 max-w-2xl text-zinc-300"
        >
          Creamos páginas web totalmente gratis para emprendedores y pequeños negocios que quieren crecer.
        </motion.p>
        <a
          href="https://forms.gle/fHgbqwGzpJzaDSGu9"
          target="_blank"
          className="mt-8 bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-zinc-200 transition"
        >
          Regístrate Gratis
        </a>
      </section>

      {/* Showcase estilo visual limpio */}
      <section className="py-24 px-6 bg-zinc-950">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
          ¿Qué tipo de páginas puedes tener?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {["Tienda Online", "Blog", "Portafolio", "Negocio Local"].map((tipo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{tipo}</h3>
              <p className="text-zinc-400 text-sm">
                Ideal para mostrar tu idea, negocio o contenido al mundo de forma profesional y gratuita.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA estilo inmersivo */}
      <section className="py-32 bg-gradient-to-br from-purple-900 to-indigo-900 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-8"
        >
          Potencia tu emprendimiento hoy mismo
        </motion.h2>
        <p className="text-zinc-200 text-lg mb-8">
          Solo llena un formulario y en pocos días tendrás tu sitio web gratuito funcionando.
        </p>
        <a
          href="https://forms.gle/fHgbqwGzpJzaDSGu9"
          target="_blank"
          className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-200 transition"
        >
          Quiero mi página web gratis
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-center text-zinc-500 text-sm">
        <p>© 2025 TecnologySmith. Todos los derechos reservados.</p>
        <p className="mt-2">
          Contacto: <a href="https://wa.me/573222117202" className="underline">+57 322 211 7202</a>
        </p>
      </footer>
    </main>
  );
}
