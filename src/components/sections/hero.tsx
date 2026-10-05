import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { MessageCircle, PhoneCall, Scale, ShieldCheck, Award } from 'lucide-react';
import logoImg from '@/assets/images/lima_godoy_logo_1791202356044.jpg';
import teamImg from '@/assets/images/lima_godoy_team_1791202369832.jpg';

export function Hero() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[82dvh] lg:h-[calc(100vh-76px)] border-b border-[#E2E8F0] overflow-hidden bg-[#F8FAFC]">
      <motion.div 
        className="w-full lg:w-[55%] p-8 lg:p-14 flex flex-col justify-center bg-white lg:border-r border-[#E2E8F0]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="bg-[#F1F5F9] text-[#0F2942] border border-[#CBD5E1] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] rounded-sm flex items-center gap-2 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#9A7226]"></span>
            Campinas - SP • Mais de 10 Anos de Atuação
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-[50px] leading-[1.12] font-extrabold tracking-tight mb-6 text-[#0F2942]">
          Defesa estratégica e humanizada no <span className="text-[#9A7226] italic font-serif">Direito de Família</span> e <span className="text-[#9A7226] italic font-serif">Previdenciário</span>.
        </h1>

        <p className="text-[#475569] text-base lg:text-lg leading-relaxed max-w-[530px] mb-8">
          O escritório <strong className="text-[#0F2942] font-semibold">Lima & Godoy Advogados Associados</strong> oferece assessoria e consultoria em esfera administrativa, extrajudicial e judicial. Especialistas em Divórcio, Partilha de Bens, Inventário, Aposentadorias e Benefícios do INSS.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <Button size="lg" className="bg-[#0F2942] text-white hover:bg-[#1B3B5C] px-8 py-6 font-bold text-xs uppercase tracking-wider rounded-none h-auto transition-all shadow-md group" asChild>
            <a 
              href="https://wa.me/5519982298018?text=Olá,%20gostaria%20de%20atendimento%20jurídico%20com%20o%20escritório%20Lima%20%26%20Godoy."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5"
            >
              <MessageCircle className="w-4 h-4 text-[#C5A059] group-hover:scale-110 transition-transform" />
              <span>Falar com Advogado</span>
            </a>
          </Button>
          
          <div className="flex flex-col">
            <span className="text-[10px] text-[#64748B] uppercase font-bold tracking-widest mb-1 flex items-center gap-1.5">
              <PhoneCall className="w-3 h-3 text-[#9A7226]" />
              Atendimento Telefônico & WhatsApp
            </span>
            <a 
              href="tel:+5519982298018" 
              className="text-base font-bold text-[#0F2942] hover:text-[#9A7226] transition-colors font-mono"
            >
              (19) 98229-8018
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-[#E2E8F0] max-w-lg">
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-[#64748B] font-bold mb-1">Experiência</span>
            <span className="text-xs font-semibold text-[#0F2942] flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-[#9A7226]" /> +10 Anos
            </span>
          </div>
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-[#64748B] font-bold mb-1">Localização</span>
            <span className="text-xs font-semibold text-[#0F2942]">Centro, Campinas</span>
          </div>
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-[#64748B] font-bold mb-1">Atuação</span>
            <span className="text-xs font-semibold text-[#9A7226]">Judicial & Extrajudicial</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="w-full lg:w-[45%] bg-[#F1F5F9] relative overflow-hidden flex min-h-[400px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <img 
          src={teamImg} 
          alt="Advogados e atendimento especializado Lima & Godoy"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/90 via-[#0F2942]/40 to-transparent"></div>

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-full h-full p-8 lg:p-12 flex flex-col justify-between text-white">
            <div className="flex justify-end">
              <div className="w-20 h-20 rounded-full border-2 border-white/80 p-1 bg-white shadow-xl">
                <img 
                  src={logoImg} 
                  alt="Emblema Lima & Godoy Advogados" 
                  className="w-full h-full rounded-full object-cover" 
                />
              </div>
            </div>

            <div>
              <div className="mb-6 border-l-2 border-[#C5A059] pl-6 bg-white/10 backdrop-blur-md py-4 pr-6 rounded-xs">
                <span className="block text-xl lg:text-2xl font-light italic mb-1.5 text-white font-serif">
                  "Há mais de 10 anos trabalhando na defesa dos seus direitos."
                </span>
                <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#C5A059]">
                  Lima & Godoy Advogados Associados
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/95 backdrop-blur-md p-5 border border-[#E2E8F0] shadow-sm rounded-xs text-[#0F2942]">
                  <div className="flex items-center gap-2 mb-1.5 text-[#9A7226]">
                    <Scale className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-wider font-bold">Família & Sucessões</span>
                  </div>
                  <span className="block text-lg font-extrabold text-[#0F2942]">Divórcio e Partilha</span>
                  <span className="text-[11px] text-[#64748B]">Inventários e Pensão</span>
                </div>

                <div className="bg-white/95 backdrop-blur-md p-5 border border-[#E2E8F0] shadow-sm rounded-xs text-[#0F2942]">
                  <div className="flex items-center gap-2 mb-1.5 text-[#9A7226]">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-wider font-bold">Direito Previdenciário</span>
                  </div>
                  <span className="block text-lg font-extrabold text-[#0F2942]">INSS Especializado</span>
                  <span className="text-[11px] text-[#64748B]">Aposentadorias e Vida Toda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
