import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { servicesData } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function Services() {
  return (
    <section id="servicos" className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="w-full flex flex-col">
        <motion.div 
          className="p-8 lg:p-14 border-b border-[#E2E8F0] bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-[#9A7226] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            Especialidades Jurídicas
          </span>
          <h2 className="text-3xl font-extrabold text-[#0F2942] md:text-4xl max-w-2xl">
            Soluções jurídicas em Família, Sucessões e Previdenciário
          </h2>
          <p className="text-[#64748B] text-sm mt-3 max-w-xl leading-relaxed">
            Assessoria consultiva e contenciosa nas esferas administrativa, extrajudicial e judicial, com atuação também em causas trabalhistas.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#E2E8F0] gap-px"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesData.map((s) => (
            <motion.div 
              key={s.id} 
              variants={itemVariants}
              className="bg-white p-8 lg:p-10 flex flex-col justify-between group hover:bg-[#FAF9F6] transition-all duration-300 relative border border-transparent hover:border-[#CBD5E1]"
            >
              <div className="mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-sm mb-6 bg-[#F1F5F9] text-[#0F2942] border border-[#E2E8F0] group-hover:border-[#9A7226] group-hover:bg-[#0F2942] group-hover:text-white transition-all">
                  <s.icon className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="font-bold text-base uppercase tracking-wide mb-3 text-[#0F2942] group-hover:text-[#9A7226] transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <Link 
                  to={`/servicos/${s.id}`} 
                  className="text-xs font-bold uppercase tracking-wider text-[#9A7226] hover:text-[#0F2942] flex items-center gap-2 group-hover:translate-x-1 transition-all"
                >
                  <span>Conhecer detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] text-[#64748B] font-mono uppercase">Campinas - SP</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
