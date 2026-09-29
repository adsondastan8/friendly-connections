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
    <main className="min-h-screen bg-[#fffaf3] text-[#3b2416]">
      <header className="sticky top-0 z-50 border-b border-[#ead9c5] bg-[#fffaf3]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#b85c2b] text-2xl">🥖</span>
            <div>
              <p className="text-lg font-black">Império do Sabor</p>
              <p className="text-xs text-[#8b6b55]">Encomendas • Maputo</p>
            </div>
          </a>
          <a href="#encomenda" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-white">
            <MessageCircle size={18}/> Fazer encomenda
          </a>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex rounded-full bg-[#f3dfc7] px-4 py-2 text-sm font-bold text-[#8d4b25]">
              📲 Site oficial de encomendas
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[1.02] md:text-7xl">
              Viu algo nas redes? <span className="text-[#b85c2b]">Encomende aqui.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f5543]">
              O Instagram e o Facebook mostram as novidades. Aqui você só precisa dizer o que gostou e enviar o pedido pelo WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#encomenda" className="inline-flex items-center gap-2 rounded-full bg-[#b85c2b] px-6 py-3.5 font-bold text-white">
                <ShoppingBag size={18}/> Começar encomenda
              </a>
              <a href={"tel:" + phone} className="inline-flex items-center gap-2 rounded-full border border-[#d9c3aa] bg-white px-6 py-3.5 font-bold">
                <Phone size={18}/> Ligar
              </a>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-[#3b2416] p-8 text-white shadow-2xl md:p-10">
            <MessageCircle size={42} className="text-[#25D366]"/>
            <h2 className="mt-6 text-3xl font-black">Como funciona?</h2>
            <div className="mt-7 space-y-5">
              {[
                ["01", "Veja a novidade", "Encontre o bolo, doce ou outro produto nas redes sociais da padaria."],
                ["02", "Preencha o pedido", "Diga exatamente o que viu, a quantidade e a data que pretende."],
                ["03", "Confirme no WhatsApp", "O pedido abre no WhatsApp para a padaria confirmar disponibilidade e preço."],
              ].map(([number, title, text]) => (
                <div key={number} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#b85c2b] font-black">{number}</span>
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
            <p className="font-bold uppercase tracking-[0.18em] text-[#b85c2b]">Pedido</p>
            <h2 className="mt-2 text-4xl font-black md:text-5xl">Faça a sua encomenda</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#765e4b]">
              Não existe um catálogo fixo aqui de propósito. As novidades podem mudar nas redes sociais.
            </p>
          </div>

          <form onSubmit={submitOrder} className="rounded-[2rem] border border-[#ead9c5] bg-[#fffaf3] p-6 shadow-xl md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-bold">Seu nome *</span>
                <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex.: Adson Dastan" className="w-full rounded-2xl border border-[#dcc8b3] bg-white px-4 py-3.5 outline-none focus:border-[#b85c2b]"/>
              </label>
              <label className="block">
                <span className="mb-2 block font-bold">Seu contacto *</span>
                <input required value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Seu número de telefone" className="w-full rounded-2xl border border-[#dcc8b3] bg-white px-4 py-3.5 outline-none focus:border-[#b85c2b]"/>
              </label>
            </div>

            <label className="mt-6 block">
              <span className="mb-2 block font-bold">O que você viu e quer encomendar? *</span>
              <textarea required value={order} onChange={(e) => setOrder(e.target.value)} rows={4} placeholder="Ex.: Vi no Instagram o bolo da publicação de hoje, quero saber se ainda está disponível e encomendar 1." className="w-full rounded-2xl border border-[#dcc8b3] bg-white px-4 py-3.5 outline-none focus:border-[#b85c2b]"/>
            </label>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-bold">Data pretendida *</span>
                <input required type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-2xl border border-[#dcc8b3] bg-white px-4 py-3.5 outline-none focus:border-[#b85c2b]"/>
              </label>
              <label className="block">
                <span className="mb-2 block font-bold">Como vai receber?</span>
                <select value={type} onChange={(e) => setType(e.target.value)} className="w-full rounded-2xl border border-[#dcc8b3] bg-white px-4 py-3.5 outline-none focus:border-[#b85c2b]">
                  <option>Levantamento na padaria</option>
                  <option>Entrega — combinar pelo WhatsApp</option>
                </select>
              </label>
            </div>

            <label className="mt-6 block">
              <span className="mb-2 block font-bold">Observações</span>
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder="Quantidade, sabor, tamanho, decoração ou qualquer detalhe..." className="w-full rounded-2xl border border-[#dcc8b3] bg-white px-4 py-3.5 outline-none focus:border-[#b85c2b]"/>
            </label>

            <button type="submit" className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 text-lg font-black text-white shadow-lg transition hover:scale-[1.01]">
              <MessageCircle size={22}/> Enviar encomenda pelo WhatsApp
            </button>

            {sent && (
              <p className="mt-4 flex items-center justify-center gap-2 text-center font-bold text-[#2f7d4a]">
                <CheckCircle2 size={18}/> O WhatsApp foi aberto para confirmar o seu pedido.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-[#3b2416] p-7 text-white">
              <Clock3 className="text-[#f3b878]" size={32}/>
              <h3 className="mt-5 text-xl font-black">Horário</h3>
              <p className="mt-2 text-white/70">Todos os dias<br/>08:00–20:00</p>
            </div>
            <div className="rounded-3xl bg-[#f3dfc7] p-7">
              <MapPin className="text-[#b85c2b]" size={32}/>
              <h3 className="mt-5 text-xl font-black">Localização</h3>
              <p className="mt-2 text-[#765e4b]">N1, Maputo, Moçambique</p>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block font-black text-[#b85c2b]">Abrir no Google Maps →</a>
            </div>
            <div className="rounded-3xl bg-[#25D366] p-7 text-white">
              <MessageCircle size={32}/>
              <h3 className="mt-5 text-xl font-black">WhatsApp</h3>
              <p className="mt-2 text-white/80">Fale diretamente com a padaria para confirmar disponibilidade, preço e detalhes.</p>
              <a href={"https://wa.me/258861493492"} target="_blank" rel="noreferrer" className="mt-4 inline-block font-black">Abrir WhatsApp →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#ead9c5] bg-white py-14">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-black">Acompanhe as novidades nas redes</h2>
          <p className="mt-3 text-[#765e4b]">
            A ideia deste site é não ficar com produtos antigos. As publicações das redes sociais continuam sendo a vitrine da padaria.
          </p>
          <div className="mt-7 flex justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ead9c5] px-5 py-3 font-bold text-[#765e4b]"><Instagram size={18}/> Instagram</div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ead9c5] px-5 py-3 font-bold text-[#765e4b]"><Facebook size={18}/> Facebook</div>
          </div>
          <p className="mt-4 text-xs text-[#9a806c]">Os links oficiais das redes serão adicionados quando forem confirmados.</p>
        </div>
      </section>

      <footer className="bg-[#2a1a11] py-8 text-center text-sm text-white/65">
        © {new Date().getFullYear()} Império do Sabor • Encomendas via WhatsApp
      </footer>
    </main>
  );
}
