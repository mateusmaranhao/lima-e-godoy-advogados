import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { ServiceMarquee } from '@/components/sections/service-marquee';
import { TestimonialSlider } from '@/components/sections/testimonial-slider';
import { useEffect, useState } from 'react';
import { localBusinessSchema, webSiteSchema, generateFAQSchema } from '@/lib/seo';
import { SEOHead } from '@/components/shared/seo-head';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus, Minus, MapPin, Phone, Clock, FileCheck, Shield, Scale, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { faqData } from '@/lib/data';
import teamImg from '@/assets/images/lima_godoy_team_1791202369832.jpg';

export function Home() {
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <SEOHead 
        title="Lima & Godoy Advogados Associados | Campinas - SP"
        description="Escritório de advocacia em Campinas - SP com mais de 10 anos de experiência. Especialistas em Divórcio, Partilha de Bens, Inventário, Aposentadorias e Benefícios do INSS."
        canonicalUrl="/"
        jsonLd={[localBusinessSchema, webSiteSchema, generateFAQSchema(faqData)]}
      />
      <main className="flex flex-col bg-[#F8FAFC]">
        <h1 className="sr-only">Lima & Godoy Advogados Associados - Direito de Família e Previdenciário em Campinas</h1>
        <Hero />
      
        <ServiceMarquee />
      
        {/* About Summary */}
        <section className="flex flex-col lg:flex-row border-b border-[#E2E8F0] bg-white">
          <div className="w-full lg:w-[48%] bg-white p-8 lg:p-16 flex flex-col justify-center text-[#0F2942] lg:border-r border-[#E2E8F0]">
            <span className="inline-block text-[#9A7226] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
              Nossa Trajetória
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-[#0F2942] leading-tight">
              Há mais de 10 anos trabalhando na defesa dos seus direitos.
            </h2>
            <p className="text-[#475569] leading-relaxed mb-6 text-sm md:text-base">
              O escritório <strong className="text-[#0F2942]">Lima & Godoy Advogados Associados</strong> oferece assessoria e consultoria em esfera administrativa, além de advocacia extrajudicial e judicial com sólida experiência no Centro de Campinas.
            </p>
            <p className="text-[#475569] leading-relaxed mb-8 text-sm">
              Atuamos com profundidade no Direito das Famílias & Sucessões — Divórcio, Separação, Pensão de Alimentos, Partilha de Bens, Reconhecimento e Dissolução de União Estável, Inventário Extrajudicial e Judicial. Contamos ainda com especialistas para lhe atender nas áreas de Aposentadorias, Cálculo da Vida Toda e Benefícios junto ao INSS, além de equipe especializada na área trabalhista.
            </p>
            <Button variant="outline" className="self-start rounded-none border-[#0F2942] text-[#0F2942] hover:bg-[#0F2942] hover:text-white uppercase tracking-wider font-bold text-xs px-6 py-3 h-auto transition-all shadow-2xs" asChild>
              <Link to="/sobre" onMouseEnter={() => {
                import('@/pages/sobre');
              }}>
                Conheça o Escritório <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="w-full lg:w-[52%] min-h-[420px] bg-[#F1F5F9] relative overflow-hidden group">
            <img 
              src={teamImg} 
              alt="Corpo jurídico e consultoria Lima & Godoy Advogados" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/90 via-[#0F2942]/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-sm flex items-center justify-between rounded-xs">
              <div>
                <span className="block text-[11px] uppercase tracking-wider font-bold text-[#9A7226]">Advocacia Integrada</span>
                <span className="text-sm font-bold text-[#0F2942]">Famílias, Sucessões, INSS & Trabalhista</span>
              </div>
              <span className="text-[11px] text-[#0F2942] font-semibold bg-[#F1F5F9] px-3 py-1 rounded-sm border border-[#CBD5E1]">
                Campinas • SP
              </span>
            </div>
          </div>
        </section>

        <Services />

        {/* Metodologia de Atuação */}
        <section className="bg-white border-b border-[#E2E8F0]">
          <div className="w-full flex flex-col">
            <div className="p-8 lg:p-14 border-b border-[#E2E8F0] bg-[#FAF9F6]">
              <span className="inline-block text-[#9A7226] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">Metodologia</span>
              <h2 className="text-3xl font-extrabold text-[#0F2942] md:text-4xl max-w-2xl">
                Como atuamos na defesa do seu direito
              </h2>
              <p className="text-[#64748B] text-sm mt-2 max-w-xl">
                Três etapas estruturadas para proporcionar rapidez, transparência e proteção jurídica completa.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#E2E8F0] gap-px">
              <div className="bg-white p-8 lg:p-12 group hover:bg-[#FAF9F6] transition-all">
                <div className="w-10 h-10 bg-[#F1F5F9] text-[#0F2942] border border-[#CBD5E1] flex items-center justify-center rounded-sm mb-6 font-bold font-mono">01</div>
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3 text-[#0F2942] flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#9A7226]" /> Diagnóstico & Análise Técnica
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Avaliação aprofundada da documentação, escrituras, histórico do CNIS ou certidões para traçar a melhor rota jurídica antes de qualquer requerimento.
                </p>
              </div>
              
              <div className="bg-white p-8 lg:p-12 group hover:bg-[#FAF9F6] transition-all">
                <div className="w-10 h-10 bg-[#F1F5F9] text-[#0F2942] border border-[#CBD5E1] flex items-center justify-center rounded-sm mb-6 font-bold font-mono">02</div>
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3 text-[#0F2942] flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#9A7226]" /> Atuação Extrajudicial Ágil
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Prioridade para soluções rápidas em cartórios de notas (divórcios e inventários) e órgãos administrativos (INSS), economizando tempo e recursos.
                </p>
              </div>
              
              <div className="bg-white p-8 lg:p-12 group hover:bg-[#FAF9F6] transition-all">
                <div className="w-10 h-10 bg-[#F1F5F9] text-[#0F2942] border border-[#CBD5E1] flex items-center justify-center rounded-sm mb-6 font-bold font-mono">03</div>
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3 text-[#0F2942] flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#9A7226]" /> Defesa Judicial Firme
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Quando o litígio é indispensável, atuamos com combatividade nas Varas de Família, Varas Cíveis, Fazenda Pública e na Justiça Federal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares da Atuação */}
        <TestimonialSlider />

        {/* FAQ */}
        <section id="faq" className="bg-[#FAF9F6] border-b border-[#E2E8F0]">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[45%] p-8 lg:p-16 flex flex-col bg-white border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
              <span className="inline-block text-[#9A7226] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
                Dúvidas Frequentes
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0F2942] mb-6">
                Orientações essenciais para sua decisão.
              </h2>
              <p className="text-[#64748B] text-sm leading-relaxed mb-8">
                Esclareça dúvidas comuns sobre divórcio, inventário, partilha de bens, aposentadorias e pedidos de benefícios junto ao INSS.
              </p>
              <div className="mt-auto p-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xs">
                <span className="block text-xs uppercase tracking-wider text-[#9A7226] font-bold mb-2">Precisa de suporte jurídico?</span>
                <p className="text-xs text-[#475569] mb-4">Nossa equipe está disponível para analisar seu caso com total discrição e cordialidade.</p>
                <Button size="sm" className="bg-[#0F2942] text-white hover:bg-[#1B3B5C] rounded-none font-bold text-xs uppercase tracking-wider w-full h-auto py-3.5" asChild>
                  <a 
                    href="https://wa.me/5519982298018?text=Olá,%20gostaria%20de%20esclarecer%20dúvidas%20sobre%20meu%20caso."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com Advogado no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-[55%] p-8 lg:p-12 bg-white">
              <div className="flex flex-col border-t border-[#E2E8F0]">
                {faqData.map((faq, idx) => (
                  <div key={idx} className="border-b border-[#E2E8F0]">
                    <button
                      className="w-full py-6 flex items-center justify-between gap-4 text-left focus:outline-none group"
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    >
                      <span className="font-bold text-sm tracking-wide text-[#0F2942] group-hover:text-[#9A7226] transition-colors">
                        {faq.question}
                      </span>
                      <div className={`w-8 h-8 flex items-center justify-center shrink-0 rounded-sm transition-colors ${openIndex === idx ? 'bg-[#0F2942] text-white border border-[#0F2942]' : 'bg-[#F1F5F9] text-[#64748B] group-hover:bg-[#E2E8F0] group-hover:text-[#0F2942]'}`}>
                        {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {openIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 text-sm text-[#475569] leading-relaxed pr-8">
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

        {/* Contato & Localização */}
        <section id="contato" className="flex flex-col lg:flex-row border-b border-[#E2E8F0] bg-white">
          <div className="w-full lg:w-[45%] p-8 lg:p-16 flex flex-col bg-white text-[#0F2942] border-r border-[#E2E8F0]">
            <span className="inline-block text-[#9A7226] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
              Localização & Contato
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight mb-8 text-[#0F2942]">
              Visite nosso escritório no Centro de Campinas
            </h2>
            <div className="flex flex-col gap-7 mt-auto">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#F1F5F9] border border-[#CBD5E1] flex items-center justify-center rounded-sm shrink-0 text-[#9A7226]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[11px] uppercase tracking-wider text-[#9A7226] mb-1">Endereço</h4>
                  <p className="text-[13px] font-medium leading-relaxed text-[#334155]">
                    Rua Regente Feijó, 712 - 1º Andar - Sala 14 A<br />
                    Centro, Campinas - SP<br />
                    CEP 13013-051
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#F1F5F9] border border-[#CBD5E1] flex items-center justify-center rounded-sm shrink-0 text-[#9A7226]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-bold text-[11px] uppercase tracking-wider text-[#9A7226] mb-1">Telefone & WhatsApp</h4>
                  <a href="https://wa.me/5519982298018" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-[#0F2942] hover:text-[#9A7226] transition-colors block mb-1 font-mono">
                    (19) 98229-8018
                  </a>
                  <p className="text-xs text-[#64748B] mb-3">Atendimento com hora marcada ou via WhatsApp.</p>
                  <Button className="bg-[#25D366] text-white hover:bg-[#20bd5a] rounded-none uppercase tracking-wider font-bold text-[11px] h-9 px-4 shadow-xs" asChild>
                    <a href="https://wa.me/5519982298018?text=Olá,%20gostaria%20de%20atendimento%20jurídico%20com%20o%20escritório%20Lima%20%26%20Godoy." target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                      Conversar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#F1F5F9] border border-[#CBD5E1] flex items-center justify-center rounded-sm shrink-0 text-[#9A7226]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[11px] uppercase tracking-wider text-[#9A7226] mb-1">Horário de Atendimento</h4>
                  <p className="text-[13px] font-medium leading-relaxed text-[#334155]">
                    Segunda a Sexta-feira: 08h30 às 18h00<br />
                    Atendimento Presencial e Online (com agendamento prévio)
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[55%] h-[420px] lg:h-auto relative bg-[#F1F5F9]">
            <iframe 
              src="https://maps.google.com/maps?q=Rua+Regente+Feij%C3%B3,+712+-+Centro,+Campinas+-+SP,+13013-051&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-0 contrast-105 opacity-95 hover:opacity-100 transition-all duration-500" 
              loading="lazy"
              title="Localização Lima & Godoy Advogados Associados - Centro, Campinas"
            ></iframe>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0F2942] text-white flex flex-col md:flex-row items-center justify-between p-8 lg:p-14 gap-8 border-b border-[#0B1727]">
          <div>
            <span className="text-[10px] text-[#C5A059] uppercase font-bold tracking-[0.2em] block mb-2">Atendimento Especializado</span>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2">
              Deseja orientação sobre o seu caso?
            </h2>
            <p className="text-[#CBD5E1] text-sm max-w-xl">
              Fale agora com a equipe da Lima & Godoy Advogados Associados e tenha a segurança jurídica que você e sua família merecem.
            </p>
          </div>
          <Button size="lg" className="bg-[#C5A059] text-[#0F2942] rounded-none hover:bg-white uppercase tracking-wider font-bold text-xs w-full md:w-auto px-10 py-6 h-auto shrink-0 transition-all shadow-md" asChild>
            <a 
              href="https://wa.me/5519982298018?text=Olá,%20gostaria%20de%20atendimento%20jurídico%20com%20o%20escritório%20Lima%20%26%20Godoy."
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </Button>
        </section>
      
      </main>
    </>
  );
}
