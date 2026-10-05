import { Scale, Users, ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '@/components/shared/seo-head';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { localBusinessSchema, generateBreadcrumbSchema } from '@/lib/seo';
import teamImg from '@/assets/images/lima_godoy_team_1791202369832.jpg';
import logoImg from '@/assets/images/lima_godoy_logo_1791202356044.jpg';
import { Button } from '@/components/ui/button';

export function Sobre() {
  return (
    <>
      <SEOHead 
        title="O Escritório | Lima & Godoy Advogados Associados em Campinas"
        description="Conheça a história e atuação da Lima & Godoy Advogados Associados. Há mais de 10 anos atuando em Direito de Família, Sucessões, Previdenciário (INSS) e Trabalhista em Campinas - SP."
        canonicalUrl="/sobre"
        jsonLd={[localBusinessSchema, generateBreadcrumbSchema([{ name: "O Escritório", item: "/sobre" }])]}
      />
      <main className="flex-1 flex flex-col bg-[#F8FAFC] text-[#0F172A]">
        <Breadcrumbs items={[{ label: 'O Escritório' }]} />
        
        <section className="bg-white border-b border-[#E2E8F0]">
          <div className="flex flex-col lg:flex-row min-h-[55dvh]">
            <div className="w-full lg:w-[55%] p-8 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
              <span className="inline-block bg-[#F1F5F9] text-[#9A7226] border border-[#CBD5E1] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] rounded-sm self-start mb-6">
                Institucional • Mais de 10 Anos
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F2942] mb-6">
                Defendendo seus direitos com <span className="text-[#9A7226] italic font-serif">ética</span>, técnica e dedicação.
              </h1>
              <p className="text-[#475569] leading-relaxed max-w-xl text-base md:text-lg mb-6">
                A <strong className="text-[#0F2942]">Lima & Godoy Advogados Associados</strong> nasceu com a missão de prestar uma advocacia acessível, altamente técnica e resolutiva. Com mais de uma década de história no Centro de Campinas, acumulamos sólida credibilidade na solução de conflitos familiares, patrimoniais e previdenciários.
              </p>
              <p className="text-[#475569] leading-relaxed max-w-xl text-sm mb-6">
                Oferecemos assessoria e consultoria na esfera administrativa perante órgãos públicos e cartórios, além de advocacia extrajudicial e representação judicial contenciosa perante as Varas Cíveis, de Família, Fazenda Pública e Justiça Federal.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F2942]">
                  <CheckCircle2 className="w-4 h-4 text-[#9A7226]" />
                  <span>Advocacia Preventiva e Contenciosa</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F2942]">
                  <CheckCircle2 className="w-4 h-4 text-[#9A7226]" />
                  <span>Atendimento Humanizado e Sigiloso</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[45%] relative bg-[#F1F5F9] min-h-[360px] overflow-hidden group">
              <img 
                src={teamImg} 
                alt="Corpo jurídico Lima & Godoy Advogados Associados" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/90 via-[#0F2942]/30 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-end justify-between p-8">
                <div className="bg-white/95 backdrop-blur-md border border-[#E2E8F0] p-6 w-full flex items-center justify-between rounded-xs shadow-md">
                  <div>
                    <span className="block text-2xl font-extrabold text-[#0F2942] flex items-center gap-1.5">
                      <Award className="w-6 h-6 text-[#9A7226]" /> +10 Anos
                    </span>
                    <span className="text-[10px] text-[#9A7226] uppercase tracking-wider font-bold">Experiência & Tradição em Campinas</span>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[#CBD5E1] overflow-hidden bg-white p-0.5">
                    <img src={logoImg} alt="Selo Oficial" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares */}
        <section className="py-20 lg:py-24 border-b border-[#E2E8F0] bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-14">
              <span className="text-[10px] text-[#9A7226] uppercase font-bold tracking-[0.25em] block mb-2">Fundamentos</span>
              <h2 className="text-3xl font-extrabold text-[#0F2942]">Nossos Pilares de Atuação</h2>
              <p className="text-[#64748B] text-sm mt-2 max-w-xl">
                Princípios que orientam cada consulta, parecer e ação conduzida pela equipe de Lima & Godoy Advogados.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#E2E8F0] gap-px border border-[#CBD5E1]">
              <div className="bg-white p-10 lg:p-12 hover:bg-[#FAF9F6] transition-colors">
                <div className="w-12 h-12 bg-[#F1F5F9] border border-[#CBD5E1] flex items-center justify-center rounded-sm mb-6 text-[#9A7226]">
                  <Scale className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-[#0F2942]">Rigor Técnico & Excelência</h3>
                <p className="text-[#475569] text-xs leading-relaxed">
                  Estudo detalhado das peculiaridades fáticas e legais de cada caso, elaborando estratégias fundamentadas na legislação vigente e nas decisões mais recentes dos tribunais.
                </p>
              </div>
              
              <div className="bg-white p-10 lg:p-12 hover:bg-[#FAF9F6] transition-colors">
                <div className="w-12 h-12 bg-[#F1F5F9] border border-[#CBD5E1] flex items-center justify-center rounded-sm mb-6 text-[#9A7226]">
                  <Users className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-[#0F2942]">Acolhimento & Discrição</h3>
                <p className="text-[#475569] text-xs leading-relaxed">
                  Tratamento empático e respeitoso para questões sensíveis do Direito de Família e Sucessões, com preservação integral da privacidade e do sigilo profissional.
                </p>
              </div>
              
              <div className="bg-white p-10 lg:p-12 hover:bg-[#FAF9F6] transition-colors">
                <div className="w-12 h-12 bg-[#F1F5F9] border border-[#CBD5E1] flex items-center justify-center rounded-sm mb-6 text-[#9A7226]">
                  <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-[#0F2942]">Soluções Extrajudiciais</h3>
                <p className="text-[#475569] text-xs leading-relaxed">
                  Compromisso com a desjudicialização e agilidade: priorizamos sempre que possível o caminho dos cartórios de notas e acordos consensuais para reduzir tempo e custos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Localização & Sede */}
        <section className="p-8 lg:p-16 bg-[#0F2942] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] text-[#C5A059] uppercase font-bold tracking-[0.25em] block mb-2">Sede em Campinas</span>
            <h3 className="text-2xl font-bold text-white mb-3">Atendimento Presencial no Centro de Campinas</h3>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              Estamos sediados na <strong className="text-white font-medium">Rua Regente Feijó, 712 - 1º Andar - Sala 14 A - Centro, Campinas - SP</strong>. Dispomos de ambiente privativo para recebê-lo com tranquilidade mediante agendamento prévio.
            </p>
          </div>
          <Button size="lg" className="bg-[#C5A059] text-[#0F2942] hover:bg-white rounded-none uppercase tracking-wider font-bold text-xs px-8 py-5 shrink-0 h-auto shadow-md" asChild>
            <a 
              href="https://wa.me/5519982298018?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20no%20escritório%20Lima%20%26%20Godoy."
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Consulta no WhatsApp
            </a>
          </Button>
        </section>
      </main>
    </>
  );
}
