import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock3, MapPin, MessageCircle, Phone, ShoppingBag, Instagram, Facebook, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({ component: BakeryHome });

const mapUrl = "https://maps.app.goo.gl/McAz5R3CBrsGpgd97";
const phone = "+258861493492";

function BakeryHome() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [order, setOrder] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("Levantamento na padaria");
  const [notes, setNotes] = useState("");
  const [sent, setSent] = useState(false);

  const submitOrder = (event: React.FormEvent) => {
    event.preventDefault();
    const message = [
      "Olá! Quero fazer uma encomenda no Império do Sabor.",
      "",
      "Nome: " + name,
      "Contacto: " + contact,
      "O que quero encomendar: " + order,
      "Data pretendida: " + date,
      "Entrega/levantamento: " + type,
      notes ? "Observações: " + notes : "",
      "",
      "Vi este produto nas redes sociais e quero confirmar a disponibilidade e o preço."
    ].filter(Boolean).join("\n");

    window.open("https://wa.me/258861493492?text=" + encodeURIComponent(message), "_blank");
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#d94f8a]">
      <header className="sticky top-0 z-50 border-b border-[#f3b6d2] bg-[#ffffff]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#d94f8a] text-2xl">🥖</span>
            <div>
              <p className="text-lg font-black">Império do Sabor</p>
              <p className="text-xs text-[#c95b8e]">Padaria & Confeitaria • Maputo</p>
            </div>
          </a>
          <a href="#encomenda" className="inline-flex items-center gap-2 rounded-full bg-[#d94f8a] px-5 py-3 text-sm font-black text-white">
            <MessageCircle size={18}/> Fazer encomenda
          </a>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex rounded-full bg-[#fde3ef] px-4 py-2 text-sm font-bold text-[#c43f78]">
              Padaria & Confeitaria
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[1.02] md:text-7xl">
              Sabores feitos para <span className="text-[#d94f8a]">momentos especiais.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#9b5b78]">
              Bolos, doces e outras especialidades preparados com carinho para tornar cada momento ainda mais especial. Faça a sua encomenda de forma simples e fale connosco pelo WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#encomenda" className="inline-flex items-center gap-2 rounded-full bg-[#d94f8a] px-6 py-3.5 font-bold text-white">
                <ShoppingBag size={18}/> Fazer encomenda
              </a>
              <a href={"tel:" + phone} className="inline-flex items-center gap-2 rounded-full border border-[#f0a8ca] bg-white px-6 py-3.5 font-bold">
                <Phone size={18}/> Contactar
              </a>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-[#d94f8a] p-8 text-white shadow-2xl md:p-10">
            <MessageCircle size={42} className="text-[#d94f8a]"/>
            <h2 className="mt-6 text-3xl font-black">Encomende com facilidade</h2>
            <div className="mt-7 space-y-5">
              {[
                ["01", "Escolha o seu produto", "Conte-nos o que deseja: bolo, doce, sobremesa ou outra especialidade."],
                ["02", "Faça o seu pedido", "Informe a quantidade, a data e os detalhes da sua encomenda."],
                ["03", "Confirme a encomenda", "Falamos consigo pelo WhatsApp para confirmar os detalhes, disponibilidade e preço."],
              ].map(([number, title, text]) => (
                <div key={number} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#d94f8a] font-black">{number}</span>
                  <div><p className="font-extrabold">{title}</p><p className="mt-1 text-sm leading-6 text-white/70">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="encomenda" className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10 text-center">
            <p className="font-bold uppercase tracking-[0.18em] text-[#d94f8a]">Encomendas</p>
            <h2 className="mt-2 text-4xl font-black md:text-5xl">Faça a sua encomenda</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#8f5872]">
              Diga-nos o que pretende encomendar e a data em que precisa. A nossa equipa entrará em contacto para confirmar todos os detalhes.
            </p>
          </div>

          <form onSubmit={submitOrder} className="rounded-[2rem] border border-[#f3b6d2] bg-[#ffffff] p-6 shadow-xl md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-bold">Nome completo *</span>
                <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex.: Adson Dastan" className="w-full rounded-2xl border border-[#efb0cf] bg-white px-4 py-3.5 outline-none focus:border-[#d94f8a]"/>
              </label>
              <label className="block">
                <span className="mb-2 block font-bold">Número de telefone *</span>
                <input required value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Seu número de telefone" className="w-full rounded-2xl border border-[#efb0cf] bg-white px-4 py-3.5 outline-none focus:border-[#d94f8a]"/>
              </label>
            </div>

            <label className="mt-6 block">
              <span className="mb-2 block font-bold">O que deseja encomendar? *</span>
              <textarea required value={order} onChange={(e) => setOrder(e.target.value)} rows={4} placeholder="Ex.: Bolo de aniversário para 10 pessoas, com decoração de chocolate." className="w-full rounded-2xl border border-[#efb0cf] bg-white px-4 py-3.5 outline-none focus:border-[#d94f8a]"/>
            </label>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-bold">Data da encomenda *</span>
                <input required type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-2xl border border-[#efb0cf] bg-white px-4 py-3.5 outline-none focus:border-[#d94f8a]"/>
              </label>
              <label className="block">
                <span className="mb-2 block font-bold">Forma de entrega</span>
                <select value={type} onChange={(e) => setType(e.target.value)} className="w-full rounded-2xl border border-[#efb0cf] bg-white px-4 py-3.5 outline-none focus:border-[#d94f8a]">
                  <option>Levantamento na padaria</option>
                  <option>Entrega — combinar pelo WhatsApp</option>
                </select>
              </label>
            </div>

            <label className="mt-6 block">
              <span className="mb-2 block font-bold">Observações</span>
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder="Quantidade, sabor, tamanho, decoração ou outro detalhe importante..." className="w-full rounded-2xl border border-[#efb0cf] bg-white px-4 py-3.5 outline-none focus:border-[#d94f8a]"/>
            </label>

            <button type="submit" className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#d94f8a] px-6 py-4 text-lg font-black text-white shadow-lg transition hover:scale-[1.01]">
              <MessageCircle size={22}/> Enviar pedido pelo WhatsApp
            </button>

            {sent && (
              <p className="mt-4 flex items-center justify-center gap-2 text-center font-bold text-[#c43f78]">
                <CheckCircle2 size={18}/> O seu pedido foi preparado. Confirme os detalhes no WhatsApp.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-[#d94f8a] p-7 text-white">
              <Clock3 className="text-[#f5c1db]" size={32}/>
              <h3 className="mt-5 text-xl font-black">Horário de funcionamento</h3>
              <p className="mt-2 text-white/70">Todos os dias<br/>08:00–20:00</p>
            </div>
            <div className="rounded-3xl bg-[#fde3ef] p-7">
              <MapPin className="text-[#d94f8a]" size={32}/>
              <h3 className="mt-5 text-xl font-black">Onde estamos</h3>
              <p className="mt-2 text-[#8f5872]">N1, Maputo, Moçambique</p>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block font-black text-[#d94f8a]">Ver localização →</a>
            </div>
            <div className="rounded-3xl bg-[#d94f8a] p-7 text-white">
              <MessageCircle size={32}/>
              <h3 className="mt-5 text-xl font-black">WhatsApp</h3>
              <p className="mt-2 text-white/80">Fale connosco para confirmar disponibilidade, preços e detalhes da sua encomenda.</p>
              <a href={"https://wa.me/258861493492"} target="_blank" rel="noreferrer" className="mt-4 inline-block font-black">Falar no WhatsApp →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#f3b6d2] bg-white py-14">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-black">Siga o Império do Sabor</h2>
          <p className="mt-3 text-[#8f5872]">
            Veja os nossos bolos, doces e novidades no Instagram e faça a sua encomenda directamente connosco.
          </p>
          <div className="mt-7 flex justify-center gap-3">
            <a href="https://www.instagram.com/imperiodesabor/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#f3b6d2] px-5 py-3 font-bold text-[#8f5872] transition hover:border-[#d94f8a] hover:text-[#d94f8a]"><Instagram size={18}/> Instagram</a>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f3b6d2] px-5 py-3 font-bold text-[#8f5872]"><Facebook size={18}/> Facebook</div>
          </div>
          <p className="mt-4 text-xs text-[#a96a88]">@imperiodesabor</p>
        </div>
      </section>

      <footer className="bg-[#d94f8a] py-8 text-center text-sm text-white/65">
        © {new Date().getFullYear()} Império do Sabor • Padaria & Confeitaria • Encomendas via WhatsApp
      </footer>
    </main>
  );
}
