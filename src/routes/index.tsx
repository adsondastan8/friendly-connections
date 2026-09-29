import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: BakeryHome });

const mapUrl = "https://maps.app.goo.gl/McAz5R3CBrsGpgd97";
const phone = "+258861493492";
const whatsappUrl = "https://wa.me/258861493492";
const instagramUrl = "https://www.instagram.com/imperiodesabor/";

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
      "Vi este produto nas redes sociais e quero confirmar a disponibilidade e o preço.",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      "https://wa.me/258861493492?text=" + encodeURIComponent(message),
      "_blank",
    );
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#c43f78]">
      <header className="sticky top-0 z-50 border-b border-[#f3b6d2] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#d94f8a] text-lg text-white shadow-sm sm:h-11 sm:w-11">
              🥐
            </span>
            <div className="leading-tight">
              <p className="text-[15px] font-black tracking-tight text-[#c43f78] sm:text-lg">
                Império do Sabor
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#d94f8a] sm:text-[11px]">
                Padaria & Confeitaria
              </p>
            </div>
          </a>

          <a
            href="#encomenda"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#d94f8a] px-4 py-2.5 text-xs font-extrabold text-white shadow-sm transition hover:bg-[#c43f78] sm:px-5 sm:text-sm"
          >
            Encomendar
            <ArrowRight size={15} />
          </a>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-28 -top-24 h-64 w-64 rounded-full bg-[#fde3ef] sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute -bottom-32 -left-28 h-64 w-64 rounded-full bg-[#f3b6d2] opacity-60 sm:h-80 sm:w-80" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f3b6d2] bg-white px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#d94f8a] shadow-sm sm:text-xs">
              <Sparkles size={14} />
              Feito para momentos especiais
            </div>

            <h1 className="max-w-2xl font-serif text-[2.65rem] font-bold leading-[0.98] tracking-[-0.04em] text-[#c43f78] sm:text-5xl md:text-6xl">
              O sabor que transforma cada momento.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-6 text-[#a65b80] sm:text-base sm:leading-7">
              Bolos, doces e especialidades preparados com carinho. Veja as
              novidades no Instagram e faça a sua encomenda directamente
              connosco pelo WhatsApp.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#encomenda"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d94f8a] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(217,79,138,0.22)] transition hover:-translate-y-0.5 hover:bg-[#c43f78]"
              >
                Fazer encomenda
                <ArrowRight size={17} />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#efb0cf] bg-white px-6 py-3.5 text-sm font-extrabold text-[#c43f78] transition hover:border-[#d94f8a]"
              >
                <Instagram size={17} />
                Ver Instagram
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5 border-t border-[#f3b6d2] pt-5 text-xs font-semibold text-[#a65b80] sm:gap-7">
              <span>Atendimento pelo WhatsApp</span>
              <span className="h-1 w-1 rounded-full bg-[#d94f8a]" />
              <span>Maputo</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#fde3ef]" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-[#f3b6d2] bg-white p-2 shadow-[0_20px_60px_rgba(196,63,120,0.12)] sm:p-3">
              <div className="rounded-[1.3rem] bg-[#d94f8a] px-5 py-8 text-white sm:px-8 sm:py-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                  Império do Sabor
                </p>
                <p className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl">
                  Um pedido simples.
                  <br />
                  Um momento especial.
                </p>
                <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">
                  Escolha o que deseja, indique a data e envie o pedido. Nós
                  confirmamos os detalhes consigo pelo WhatsApp.
                </p>

                <div className="mt-7 border-t border-white/20 pt-5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span>Encomendas</span>
                    <span>01 — 03</span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-1/3 rounded-full bg-white" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 px-2 py-3 text-center text-[10px] font-bold uppercase tracking-wide text-[#c43f78] sm:px-4 sm:text-xs">
                <span>Escolher</span>
                <span>Encomendar</span>
                <span>Confirmar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#f3b6d2] bg-[#fde3ef]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#d94f8a] text-white">
              <Instagram size={17} />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#c43f78]">
                Novidades todos os dias
              </p>
              <p className="text-xs text-[#a65b80] sm:text-sm">
                Veja os produtos actuais em @imperiodesabor
              </p>
            </div>
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-black text-[#c43f78] sm:text-sm"
          >
            Visitar Instagram <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <section id="encomenda" className="scroll-mt-20 bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#d94f8a]">
              Encomendas
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#c43f78] sm:text-4xl">
              Diga-nos o que precisa.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#a65b80] sm:text-base">
              Preencha os dados abaixo e o seu pedido será preparado para
              enviar pelo WhatsApp.
            </p>
          </div>

          <form
            onSubmit={submitOrder}
            className="mx-auto mt-8 rounded-[1.5rem] border border-[#f3b6d2] bg-white p-4 shadow-[0_18px_55px_rgba(196,63,120,0.08)] sm:mt-10 sm:p-7 md:p-9"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-black uppercase tracking-wide text-[#c43f78]">
                  Nome completo *
                </span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite o seu nome"
                  className="w-full rounded-xl border border-[#efb0cf] bg-white px-4 py-3 text-sm text-[#c43f78] outline-none transition placeholder:text-[#d39ab6] focus:border-[#d94f8a] focus:ring-2 focus:ring-[#fde3ef]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-black uppercase tracking-wide text-[#c43f78]">
                  Número de telefone *
                </span>
                <input
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Seu número de telefone"
                  className="w-full rounded-xl border border-[#efb0cf] bg-white px-4 py-3 text-sm text-[#c43f78] outline-none transition placeholder:text-[#d39ab6] focus:border-[#d94f8a] focus:ring-2 focus:ring-[#fde3ef]"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-xs font-black uppercase tracking-wide text-[#c43f78]">
                O que deseja encomendar? *
              </span>
              <textarea
                required
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                rows={4}
                placeholder="Descreva o produto, quantidade, sabor ou o que pretende."
                className="w-full resize-none rounded-xl border border-[#efb0cf] bg-white px-4 py-3 text-sm text-[#c43f78] outline-none transition placeholder:text-[#d39ab6] focus:border-[#d94f8a] focus:ring-2 focus:ring-[#fde3ef]"
              />
            </label>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-black uppercase tracking-wide text-[#c43f78]">
                  Data da encomenda *
                </span>
                <input
                  required
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-[#efb0cf] bg-white px-4 py-3 text-sm text-[#c43f78] outline-none focus:border-[#d94f8a] focus:ring-2 focus:ring-[#fde3ef]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-black uppercase tracking-wide text-[#c43f78]">
                  Entrega
                </span>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full rounded-xl border border-[#efb0cf] bg-white px-4 py-3 text-sm text-[#c43f78] outline-none focus:border-[#d94f8a] focus:ring-2 focus:ring-[#fde3ef]"
                >
                  <option>Levantamento na padaria</option>
                  <option>Entrega — combinar pelo WhatsApp</option>
                </select>
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-xs font-black uppercase tracking-wide text-[#c43f78]">
                Observações
              </span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Algum detalhe importante para o seu pedido?"
                className="w-full resize-none rounded-xl border border-[#efb0cf] bg-white px-4 py-3 text-sm text-[#c43f78] outline-none transition placeholder:text-[#d39ab6] focus:border-[#d94f8a] focus:ring-2 focus:ring-[#fde3ef]"
              />
            </label>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#d94f8a] px-5 py-4 text-sm font-black text-white shadow-[0_10px_25px_rgba(217,79,138,0.2)] transition hover:bg-[#c43f78] sm:text-base"
            >
              <MessageCircle size={19} />
              Enviar pedido pelo WhatsApp
              <ArrowRight size={17} />
            </button>

            {sent && (
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-bold text-[#c43f78]">
                <CheckCircle2 size={17} />
                Pedido preparado. Confirme os detalhes no WhatsApp.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="bg-[#fde3ef] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 sm:p-6">
              <Clock3 size={25} />
              <p className="mt-4 text-xs font-black uppercase tracking-[0.15em]">
                Horário
              </p>
              <p className="mt-2 text-sm font-semibold text-[#a65b80]">
                Todos os dias
                <br />
                08:00–20:00
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 sm:p-6">
              <MapPin size={25} />
              <p className="mt-4 text-xs font-black uppercase tracking-[0.15em]">
                Localização
              </p>
              <p className="mt-2 text-sm font-semibold text-[#a65b80]">
                N1, Maputo, Moçambique
              </p>
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-black text-[#d94f8a]"
              >
                Ver localização <ArrowRight size={15} />
              </a>
            </div>

            <div className="rounded-2xl bg-[#d94f8a] p-5 text-white sm:p-6">
              <Phone size={25} />
              <p className="mt-4 text-xs font-black uppercase tracking-[0.15em]">
                Fale connosco
              </p>
              <p className="mt-2 text-sm text-white/80">
                Tire dúvidas e confirme a sua encomenda directamente.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-black"
              >
                Abrir WhatsApp <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#fde3ef] text-[#d94f8a]">
            <Instagram size={23} />
          </div>
          <h2 className="mt-4 font-serif text-3xl font-bold text-[#c43f78] sm:text-4xl">
            Veja o que estamos a preparar.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#a65b80] sm:text-base">
            Os nossos produtos e novidades estão sempre no Instagram. Escolha
            o que gostou e fale connosco para fazer a sua encomenda.
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#efb0cf] px-6 py-3 text-sm font-black text-[#c43f78] transition hover:border-[#d94f8a]"
          >
            @imperiodesabor
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <footer className="border-t border-[#f3b6d2] bg-[#d94f8a] px-4 py-8 text-center text-xs font-semibold text-white/75">
        <p className="font-black text-white">Império do Sabor</p>
        <p className="mt-1">Padaria & Confeitaria • Maputo</p>
      </footer>
    </main>
  );
}
