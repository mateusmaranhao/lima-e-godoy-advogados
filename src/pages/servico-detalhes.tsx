import { servicesData } from '@/lib/data';
import { useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEOHead } from '@/components/shared/seo-head';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/lib/seo';

export function ServicoDetalhes() {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const jsonLdData: Record<string, unknown>[] = [
    generateBreadcrumbSchema([
      { name: "Áreas de Atuação", item: "/servicos" },
      { name: service.shortTitle, item: `/servicos/${service.id}` }
    ]),
    generateServiceSchema(service.title, service.desc, `/servicos/${service.id}`)
  ];

  if (service.faqs && service.faqs.length > 0) {
    jsonLdData.push(generateFAQSchema(service.faqs));
  }

  return (
    <>
      <SEOHead 
        title={`${service.title} | Lima & Godoy Advogados Associados`}
        description={service.desc}
        canonicalUrl={`/servicos/${service.id}`}
        jsonLd={jsonLdData}
      />
      <main className="flex-1 flex flex-col bg-[#F8FAFC] text-[#0F172A]">
        <Breadcrumbs items={[
          { label: 'Áreas de Atuação', href: '/servicos' },
          { label: service.shortTitle }
        ]} />

        {/* Hero Section */}
        <section className="bg-white text-[#0F2942] p-8 lg:p-20 flex flex-col border-b border-[#E2E8F0]">
          <div className="max-w-4xl mx-auto flex flex-col items-start w-full">
            <div className="w-12 h-12 bg-[#F1F5F9] text-[#9A7226] border border-[#CBD5E1] flex items-center justify-center rounded-sm mb-6">
              <service.icon className="w-6 h-6 stroke-[2]" />
            </div>
            <span className="text-[10px] text-[#9A7226] uppercase font-bold tracking-[0.25em] mb-3">
              Lima & Godoy Advogados Associados
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#0F2942]">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl font-medium text-[#475569] mb-6 max-w-3xl leading-snug">
              {service.heroSubtitle}
            </p>
            <p className="text-[#64748B] leading-relaxed text-sm md:text-base max-w-2xl mb-10">
              {service.desc}
            </p>
            <Button size="lg" className="bg-[#0F2942] text-white hover:bg-[#1B3B5C] rounded-none uppercase tracking-wider font-bold text-xs px-8 py-5 h-auto transition-all shadow-md flex items-center gap-2.5" asChild>
              <a 
                href={`https://wa.me/5519982298018?text=Olá,%20gostaria%20de%20atendimento%20jurídico%20sobre%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Consultar Advogado sobre este tema</span>
              </a>
            </Button>
          </div>
        </section>

        {/* Sections */}
        <section className="bg-[#FAF9F6] border-b border-[#E2E8F0]">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[40%] p-8 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#E2E8F0] bg-white">
              <span className="inline-block text-[#9A7226] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
                Estratégia & Atuação
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0F2942] mb-4">
                Como atuamos nesta frente jurídica
              </h2>
              <p className="text-[#64748B] text-xs leading-relaxed max-w-md">
                Unimos a agilidade das vias extrajudiciais e administrativas à experiência contenciosa para defender seus interesses patrimoniais e familiares com precisão e segurança.
              </p>
            </div>
            
            <div className="w-full lg:w-[60%] p-8 lg:p-16 bg-[#FAF9F6]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {service.sections.map((section, idx) => (
                  <div key={idx} className="flex flex-col bg-white p-6 border border-[#E2E8F0] shadow-2xs">
                    <h3 className="font-bold text-sm tracking-wide mb-2.5 text-[#0F2942] border-l-2 border-[#9A7226] pl-3">
                      {section.title}
                    </h3>
                    <p className="text-[#475569] text-xs leading-relaxed pl-3.5">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="bg-white border-b border-[#E2E8F0]">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-[40%] p-8 lg:p-16 flex flex-col border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
                <span className="inline-block text-[#9A7226] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
                  Esclarecimentos
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-[#0F2942] mb-4">
                  Dúvidas Frequentes
                </h2>
                <p className="text-[#64748B] text-xs leading-relaxed">
                  Perguntas comuns e orientações técnicas sobre {service.shortTitle.toLowerCase()}.
                </p>
              </div>
              <div className="w-full lg:w-[60%] p-8 lg:p-12">
                <div className="flex flex-col border-t border-[#E2E8F0]">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-[#E2E8F0]">
                      <button
                        className="w-full py-6 flex items-center justify-between gap-4 text-left focus:outline-none group"
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      >
                        <span className="font-bold text-sm tracking-wide text-[#0F2942] group-hover:text-[#9A7226] transition-colors">
                          {faq.question}
                        </span>
                        <div className={`w-8 h-8 flex items-center justify-center shrink-0 rounded-sm transition-colors ${openFaqIndex === idx ? 'bg-[#0F2942] text-white' : 'bg-[#F1F5F9] text-[#64748B] group-hover:bg-[#E2E8F0]'}`}>
                          {openFaqIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {openFaqIndex === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="pb-8 text-xs text-[#475569] leading-relaxed pr-8">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Footer CTA Banner */}
        <section className="bg-[#0F2942] p-8 lg:p-16 text-center flex flex-col items-center border-b border-[#0B1727] text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Precisa de orientação jurídica especializada sobre este assunto?
          </h2>
          <p className="text-sm text-[#CBD5E1] mb-8 max-w-lg">
            Entre em contato com o escritório Lima & Godoy Advogados Associados. Atendimento com sigilo profissional no Centro de Campinas.
          </p>
          <Button size="lg" className="bg-[#C5A059] text-[#0F2942] hover:bg-white rounded-none uppercase tracking-wider font-bold text-xs px-8 py-5 h-auto transition-all shadow-md" asChild>
            <a 
              href={`https://wa.me/5519982298018?text=Olá,%20gostaria%20de%20orientação%20jurídica%20sobre%20${encodeURIComponent(service.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com Advogado no WhatsApp
            </a>
          </Button>
        </section>

      </main>
    </>
  );
}
