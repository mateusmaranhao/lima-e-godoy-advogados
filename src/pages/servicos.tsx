import { Services } from '@/components/sections/services';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/shared/seo-head';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { generateBreadcrumbSchema } from '@/lib/seo';
import { MessageCircle, Scale } from 'lucide-react';

export function ServicosPage() {
  return (
    <>
      <SEOHead 
        title="Áreas de Atuação | Lima & Godoy Advogados Associados"
        description="Conheça as áreas de atuação jurídica da Lima & Godoy Advogados Associados em Campinas - SP: Divórcio, União Estável, Partilha de Bens, Inventário, Aposentadorias e Benefícios do INSS."
        canonicalUrl="/servicos"
        jsonLd={generateBreadcrumbSchema([{ name: "Áreas de Atuação", item: "/servicos" }])}
      />
      <main className="flex-1 flex flex-col bg-[#F8FAFC] text-[#0F172A]">
        <Breadcrumbs items={[{ label: 'Áreas de Atuação' }]} />
        
        <section className="bg-white border-b border-[#E2E8F0] p-8 lg:p-16 flex flex-col items-center text-center">
          <span className="inline-block bg-[#F1F5F9] text-[#9A7226] border border-[#CBD5E1] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] rounded-sm mb-6">
            Assessoria Extrajudicial & Judicial
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F2942] mb-6 max-w-3xl">
            Nossas Especialidades Jurídicas
          </h1>
          <p className="text-[#475569] leading-relaxed max-w-2xl text-base md:text-lg">
            Há mais de 10 anos oferecendo assessoria e consultoria em esfera administrativa, além de advocacia extrajudicial e judicial com foco em Direito das Famílias & Sucessões, Previdenciário (INSS) e Direito do Trabalho.
          </p>
        </section>

        {/* Grid das soluções */}
        <Services />

        <section className="py-20 bg-[#0F2942] text-white text-center px-6 border-b border-[#0B1727]">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#C5A059] mb-6">
              <Scale className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Precisa de orientação jurídica sobre o seu caso?
            </h2>
            <p className="text-[#CBD5E1] mb-8 text-sm leading-relaxed max-w-lg">
              Converse com a equipe de Lima & Godoy Advogados Associados e obtenha uma avaliação técnica do seu direito com agilidade e total sigilo.
            </p>
            <Button size="lg" className="bg-[#C5A059] text-[#0F2942] hover:bg-white rounded-none uppercase tracking-wider font-bold text-xs px-8 py-5 h-auto transition-all shadow-md" asChild>
              <a 
                href="https://wa.me/5519982298018?text=Olá,%20gostaria%20de%20consultar%20um%20advogado%20sobre%20meu%20caso."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar pelo WhatsApp</span>
              </a>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
