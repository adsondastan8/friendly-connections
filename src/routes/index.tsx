import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock3, MessageCircle, Phone, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({ component: BakeryHome });

const mapUrl = "https://maps.app.goo.gl/McAz5R3CBrsGpgd97";
const whatsappUrl = "https://wa.me/?text=" + encodeURIComponent("Olá! Gostaria de fazer uma encomenda na padaria.");

const products = [
  ["🥖", "Pães frescos", "Produção diária, quentinha e crocante."],
  ["🎂", "Bolos", "Bolos para momentos especiais e encomendas."],
  ["🥐", "Pastelaria", "Doces e salgados preparados com carinho."],
  ["☕", "Bebidas", "Opções para acompanhar o seu lanche."],
];

function BakeryHome() {
  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#3b2416]">
      <header className="sticky top-0 z-50 border-b border-[#ead9c5] bg-[#fffaf3]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#b85c2b] text-2xl">🥖</span>
            <div><p className="text-lg font-black">A Nossa Padaria</p><p className="text-xs text-[#8b6b55]">Frescos todos os dias</p></div>
          </a>
          <nav className="hidden gap-6 text-sm font-bold md:flex">
            <a href="#produtos">Produtos</a><a href="#sobre">Sobre nós</a><a href="#contactos">Contactos</a>
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white"><MessageCircle size={18}/> WhatsApp</a>
        </div>
      </header>

      <section id="inicio">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex rounded-full bg-[#f3dfc7] px-4 py-2 text-sm font-bold text-[#8d4b25]">🍞 Sabor, tradição e frescura</span>
            <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">O sabor que começa <span className="text-[#b85c2b]">todos os dias.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f5543]">Pães, bolos, pastelaria e bebidas preparados para tornar cada momento mais gostoso.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#produtos" className="inline-flex items-center gap-2 rounded-full bg-[#b85c2b] px-6 py-3.5 font-bold text-white">Ver produtos <ChevronRight size={18}/></a>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#d9c3aa] bg-white px-6 py-3.5 font-bold"><MapPin size={18}/> Como chegar</a>
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[#d7894d] via-[#b85c2b] to-[#71351f] p-8 shadow-2xl">
            <div className="flex min-h-[360px] flex-col justify-between rounded-[2rem] border border-white/20 bg-black/10 p-7 text-white">
              <div className="text-6xl">🥐 🍞 🎂</div>
              <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-white/75">Padaria</p><p className="mt-2 text-4xl font-black">Feito fresco.<br/>Feito para si.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="produtos" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-bold uppercase tracking-[0.18em] text-[#b85c2b]">O nosso menu</p>
          <h2 className="mt-2 text-4xl font-black md:text-5xl">Produtos para todos os momentos</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(([icon,name,description]) => (
              <article key={name} className="rounded-3xl border border-[#ead9c5] bg-[#fffaf3] p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f3dfc7] text-3xl">{icon}</div>
                <h3 className="mt-5 text-xl font-extrabold">{name}</h3><p className="mt-2 text-sm leading-6 text-[#765e4b]">{description}</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#b85c2b]">Encomendar <ChevronRight size={16}/></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div className="rounded-[2rem] bg-[#3b2416] p-8 text-white md:p-12">
            <h2 className="text-4xl font-black">Uma padaria para voltar sempre.</h2>
            <p className="mt-5 leading-7 text-white/75">Um espaço acolhedor dedicado a produtos frescos. Aqui vamos colocar a história e as informações oficiais da padaria.</p>
          </div>
          <div className="space-y-4">
            <Info icon={<MapPin size={22}/>} title="Localização" text="Abra a localização no Google Maps." href={mapUrl}/>
            <Info icon={<Clock3 size={22}/>} title="Horário" text="Os horários oficiais serão apresentados aqui." href={mapUrl}/>
            <Info icon={<Phone size={22}/>} title="Contacto" text="Entre em contacto para fazer uma encomenda." href={whatsappUrl}/>
          </div>
        </div>
      </section>

      <section id="contactos" className="bg-[#f3dfc7] py-16 text-center">
        <div className="mx-auto max-w-4xl px-5">
          <p className="font-bold uppercase tracking-[0.18em] text-[#8d4b25]">Visite-nos</p>
          <h2 className="mt-3 text-4xl font-black">Pronto para um pão quentinho?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#6f5543]">Consulte a localização no Maps ou entre em contacto para fazer a sua encomenda.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#3b2416] px-6 py-3.5 font-bold text-white"><MapPin size={18}/> Abrir localização</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white"><MessageCircle size={18}/> Falar no WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#2a1a11] py-8 text-center text-sm text-white/65">© {new Date().getFullYear()} A Nossa Padaria.</footer>
    </main>
  );
}

function Info({icon,title,text,href}:{icon:React.ReactNode;title:string;text:string;href:string}) {
  return <a href={href} target="_blank" rel="noreferrer" className="flex gap-4 rounded-2xl border border-[#ead9c5] bg-white p-5 hover:shadow-md"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f3dfc7] text-[#b85c2b]">{icon}</div><div><h3 className="font-extrabold">{title}</h3><p className="mt-1 text-sm text-[#765e4b]">{text}</p></div></a>;
}
