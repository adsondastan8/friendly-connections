import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock3, MessageCircle, Phone, ChevronRight, Star, CreditCard, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/")({ component: BakeryHome });

const mapUrl = "https://maps.app.goo.gl/McAz5R3CBrsGpgd97";
const phone = "+258861493492";
const whatsappUrl = "https://wa.me/258861493492?text=" + encodeURIComponent("Olá! Gostaria de fazer uma encomenda no Império do Sabor.");
const photos = [
  "https://img4.restaurantguru.ru/w166/rd15-Imperio-do-Sabor-meals-2026-04-3.jpg",
  "https://img4.restaurantguru.ru/w166/r369-Imperio-do-Sabor-beverage-2026-04.jpg",
  "https://img4.restaurantguru.ru/w166/rbf7-beverage-Imperio-do-Sabor-2026-04.jpg",
];

const menuItems = [
  ["🥪", "Sanduíche", "Opção mencionada nas avaliações públicas."],
  ["🥩", "Carne de vaca", "Opção destacada na ficha pública."],
  ["🥔", "Carne com molho de natas e batatas", "Prato citado numa avaliação pública."],
  ["🍰", "Bolos", "Produto identificado na ficha pública."],
];

function BakeryHome() {
  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#3b2416]">
      <header className="sticky top-0 z-50 border-b border-[#ead9c5] bg-[#fffaf3]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#b85c2b] text-2xl">🥖</span>
            <div><p className="text-lg font-black">Império do Sabor</p><p className="text-xs text-[#8b6b55]">Padaria • N1 • Maputo</p></div>
          </a>
          <nav className="hidden gap-6 text-sm font-bold md:flex">
            <a href="#produtos">Produtos</a><a href="#fotos">Fotos</a><a href="#informacoes">Informações</a><a href="#contactos">Contacto</a>
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white"><MessageCircle size={18}/> WhatsApp</a>
        </div>
      </header>

      <section id="inicio">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex rounded-full bg-[#f3dfc7] px-4 py-2 text-sm font-bold text-[#8d4b25]">⭐ 4,4/5 no Google • 5 avaliações</span>
            <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">Império do <span className="text-[#b85c2b]">Sabor.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f5543]">Padaria e restaurante na N1, em Maputo, com atendimento das 08:00 às 20:00 todos os dias.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white"><MessageCircle size={18}/> Encomendar</a>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#d9c3aa] bg-white px-6 py-3.5 font-bold"><MapPin size={18}/> Como chegar</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] bg-[#3b2416] p-3 shadow-2xl">
            <img src={photos[0]} alt="Menu do Império do Sabor" className="h-[380px] w-full rounded-[2rem] object-cover"/>
          </div>
        </div>
      </section>

      <section id="produtos" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-bold uppercase tracking-[0.18em] text-[#b85c2b]">Menu público</p>
          <h2 className="mt-2 text-4xl font-black md:text-5xl">Sabores do Império</h2>
          <p className="mt-4 max-w-2xl text-[#765e4b]">Itens confirmados nas informações públicas consultadas. Não colocamos preços que não estejam publicados de forma verificável.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {menuItems.map(([icon,name,description]) => (
              <article key={name} className="rounded-3xl border border-[#ead9c5] bg-[#fffaf3] p-6 hover:shadow-lg">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f3dfc7] text-3xl">{icon}</div>
                <h3 className="mt-5 text-xl font-extrabold">{name}</h3><p className="mt-2 text-sm leading-6 text-[#765e4b]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fotos" className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-bold uppercase tracking-[0.18em] text-[#b85c2b]">Galeria</p>
          <h2 className="mt-2 text-4xl font-black">Fotos da ficha pública</h2>
          <p className="mt-3 text-sm text-[#765e4b]">Fotos públicas associadas ao estabelecimento e identificadas como fotos do Google na ficha consultada. Para ver a galeria completa, abra o Google Maps.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {photos.map((photo,index) => <img key={photo} src={photo} alt={index === 0 ? "Menu do Império do Sabor" : "Foto do Império do Sabor"} className="h-80 w-full rounded-3xl border border-[#ead9c5] bg-white object-cover shadow-sm"/>)}
          </div>
        </div>
      </section>

      <section id="informacoes" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] bg-[#3b2416] p-8 text-white md:p-10">
              <ShoppingBag className="text-[#f3b878]" size={38}/>
              <h2 className="mt-5 text-4xl font-black">Informações reais do estabelecimento</h2>
              <div className="mt-6 space-y-4 text-white/85">
                <p className="flex gap-3"><MapPin className="shrink-0" size={20}/> N1, Maputo, Moçambique</p>
                <p className="flex gap-3"><Phone className="shrink-0" size={20}/> {phone}</p>
                <p className="flex gap-3"><Clock3 className="shrink-0" size={20}/> Segunda a domingo: 08:00–20:00</p>
                <p className="flex gap-3"><CreditCard className="shrink-0" size={20}/> Pagamento com cartão indicado na ficha pública</p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-[#ead9c5] bg-[#fffaf3] p-8 md:p-10">
              <div className="flex items-center gap-2 text-[#b85c2b]"><Star fill="currentColor" size={22}/><span className="font-black text-2xl">4,4/5</span></div>
              <p className="mt-2 text-sm text-[#765e4b]">Classificação apresentada atualmente no Google, com 5 avaliações.</p>
              <div className="mt-8 space-y-3">
                <a href={mapUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl bg-white p-4 font-bold shadow-sm">Abrir Google Maps <ChevronRight size={18}/></a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl bg-[#25D366] p-4 font-bold text-white">Falar pelo WhatsApp <ChevronRight size={18}/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contactos" className="bg-[#f3dfc7] py-16 text-center">
        <div className="mx-auto max-w-4xl px-5">
          <p className="font-bold uppercase tracking-[0.18em] text-[#8d4b25]">Império do Sabor</p>
          <h2 className="mt-3 text-4xl font-black">Visite-nos na N1</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#6f5543]">Aberto todos os dias das 08:00 às 20:00.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#3b2416] px-6 py-3.5 font-bold text-white"><MapPin size={18}/> Abrir localização</a>
            <a href={"tel:" + phone} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold"><Phone size={18}/> Ligar</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white"><MessageCircle size={18}/> WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#2a1a11] py-8 text-center text-sm text-white/65">© {new Date().getFullYear()} Império do Sabor • N1, Maputo</footer>
    </main>
  );
}
