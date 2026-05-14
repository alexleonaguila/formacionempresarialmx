import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Nueva solicitud de información de ${form.name}`,
          from_name: 'Formación Empresarial MX',
          ...form,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setForm({ name: "", company: "", email: "", phone: "", message: "" });
      } else {
        alert('Error al enviar el formulario. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el formulario. Por favor, intenta de nuevo.');
    }
  };

  return (
    <section id="contacto" className="bg-[#080808] py-24 relative overflow-hidden">
      {/* Background gold accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 bg-[#c9a227]/3 rounded-full blur-3xl"
        style={{ transform: "translate(30%, 30%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#c9a227]" />
              <span className="text-[#c9a227] tracking-[0.3em] uppercase" style={{ fontSize: "0.7rem" }}>
                Contacto
              </span>
            </div>

            <h2
              className="text-white uppercase mb-6 leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                letterSpacing: "0.03em",
              }}
            >
              El siguiente paso
              <br />
              <span className="text-[#c9a227]">empieza aquí</span>
            </h2>

            <p className="text-gray-400 mb-10 leading-relaxed" style={{ fontSize: "0.95rem", fontWeight: 300 }}>
              ¿Te gustaría que colaboremos en algún proyecto en tu empresa? 🏆 Déjanos tus datos y te contactaremos en breve. ¡Estamos listos para impulsar tu empresa al siguiente nivel! 🚀
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: Phone, label: "Teléfono", value: "+52 9988958521" },
                { icon: Mail, label: "Correo electrónico", value: "info@formacionempresarialmx.com" },
                { icon: MapPin, label: "Ubicación", value: "Playa del Carmen, Quintana Roo." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-[#c9a227]/30 flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-[#c9a227]" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs tracking-[0.15em] uppercase mb-0.5">{item.label}</p>
                    <p className="text-white text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

          
          </div>

          {/* Form */}
          <div className="border border-white/8 p-8 lg:p-10 bg-[#0d0d0d] relative">
            <div className="absolute top-0 left-0 w-16 h-0.5 bg-[#c9a227]" />
            <div className="absolute bottom-0 right-0 w-16 h-0.5 bg-[#c9a227]/40" />

            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 border border-[#c9a227]/30 flex items-center justify-center mb-6">
                  <CheckCircle size={28} className="text-[#c9a227]" />
                </div>
                <h3
                  className="text-white uppercase mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", letterSpacing: "0.05em" }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-500 text-sm mb-8" style={{ fontWeight: 300 }}>
                  Un asesor especializado en tu industria te contactará en menos de 24 horas.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-[#c9a227] text-xs tracking-[0.2em] uppercase border-b border-[#c9a227]/40 hover:border-[#c9a227] transition-colors pb-0.5"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3
                  className="text-white uppercase mb-1"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", letterSpacing: "0.08em" }}
                >
                  Solicita información
                </h3>
                <p className="text-gray-600 text-xs tracking-wide mb-6">
                  Sin costo. Sin compromiso. Solo resultados.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "name", label: "Nombre completo", placeholder: "Tu nombre", type: "text" },
                    { name: "company", label: "Empresa", placeholder: "Nombre de tu empresa", type: "text" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="text-gray-500 text-xs tracking-[0.1em] uppercase mb-1.5 block">{f.label}</label>
                      <input
                        required
                        name={f.name}
                        type={f.type}
                        value={(form as any)[f.name]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        className="w-full bg-black border border-white/10 focus:border-[#c9a227]/50 px-4 py-2.5 text-sm text-white placeholder-gray-700 focus:outline-none transition-colors"
                      />
                    </div>
                  ))}
                </div>

                

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "email", label: "Correo electrónico", placeholder: "tu@empresa.mx", type: "email" },
                    { name: "phone", label: "Teléfono", placeholder: "+52 81 0000 0000", type: "tel" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="text-gray-500 text-xs tracking-[0.1em] uppercase mb-1.5 block">{f.label}</label>
                      <input
                        required={f.name === "email"}
                        name={f.name}
                        type={f.type}
                        value={(form as any)[f.name]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        className="w-full bg-black border border-white/10 focus:border-[#c9a227]/50 px-4 py-2.5 text-sm text-white placeholder-gray-700 focus:outline-none transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="text-gray-500 text-xs tracking-[0.1em] uppercase mb-1.5 block">Mensaje (opcional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="¿Cuántas personas quieres capacitar? ¿Alguna necesidad específica?"
                    rows={3}
                    className="w-full bg-black border border-white/10 focus:border-[#c9a227]/50 px-4 py-2.5 text-sm text-white placeholder-gray-700 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c9a227] hover:bg-[#e0b52b] text-black py-4 text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Enviar solicitud <ArrowRight size={16} />
                </button>

                <p className="text-gray-700 text-xs text-center tracking-wide">
                  Tus datos son confidenciales. No los compartimos.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
