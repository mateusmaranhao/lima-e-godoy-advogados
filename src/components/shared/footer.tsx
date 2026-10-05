import { Link } from 'react-router-dom';
import { prefetchRoute } from '@/lib/prefetch';
import logoImg from '@/assets/images/lima_godoy_logo_1791202356044.jpg';
import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E2E8F0] text-[#0F172A]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#E2E8F0] gap-px">
        <div className="bg-white p-8 lg:p-12 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm overflow-hidden border border-[#E2E8F0] bg-[#F8FAFC] shrink-0">
                <img 
                  src={logoImg} 
                  alt="Lima & Godoy Advogados Associados" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-lg text-[#0F2942] leading-none">Lima & Godoy</span>
                <span className="text-[10px] tracking-[0.22em] uppercase font-bold text-[#9A7226] mt-0.5">Advogados Associados</span>
              </div>
            </div>
            <p className="text-[13px] text-[#475569] leading-relaxed max-w-[34ch]">
              Há mais de 10 anos atuando na defesa dos seus direitos. Assessoria e consultoria em esfera administrativa, advocacia extrajudicial e judicial com foco em Direito de Família, Sucessões, Previdenciário (INSS) e Trabalhista.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-[#64748B]">
              <Clock className="w-3.5 h-3.5 text-[#9A7226]" />
              <span>Segunda a Sexta das 08h30 às 18h</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 lg:p-12">
          <h4 className="font-bold text-[11px] uppercase tracking-widest mb-6 text-[#9A7226]">Áreas de Atuação</h4>
          <ul className="flex flex-col gap-3.5 text-sm font-medium text-[#475569]">
            <li><Link to="/servicos/divorcio-e-separacao" className="hover:text-[#0F2942] transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Divórcio & Separação</Link></li>
            <li><Link to="/servicos/uniao-estavel" className="hover:text-[#0F2942] transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>União Estável & Dissolução</Link></li>
            <li><Link to="/servicos/partilha-de-bens" className="hover:text-[#0F2942] transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Partilha de Bens</Link></li>
            <li><Link to="/servicos/inventario" className="hover:text-[#0F2942] transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Inventário Judicial & Cartório</Link></li>
            <li><Link to="/servicos/aposentadoria" className="hover:text-[#0F2942] transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Aposentadorias do INSS</Link></li>
            <li><Link to="/servicos/beneficios-inss" className="hover:text-[#0F2942] transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Benefícios INSS & Vida Toda</Link></li>
          </ul>
        </div>

        <div className="bg-white p-8 lg:p-12">
          <h4 className="font-bold text-[11px] uppercase tracking-widest mb-6 text-[#9A7226]">Institucional</h4>
          <ul className="flex flex-col gap-3.5 text-sm font-medium text-[#475569]">
            <li><Link to="/sobre" className="hover:text-[#0F2942] transition-colors" onMouseEnter={() => prefetchRoute('/sobre')}>O Escritório (Mais de 10 Anos)</Link></li>
            <li><Link to="/servicos" className="hover:text-[#0F2942] transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Todas as Especialidades</Link></li>
            <li><Link to="/#faq" className="hover:text-[#0F2942] transition-colors">Perguntas Frequentes</Link></li>
            <li><Link to="/#contato" className="hover:text-[#0F2942] transition-colors">Localização em Campinas</Link></li>
          </ul>
        </div>

        <div className="bg-white p-8 lg:p-12">
          <h4 className="font-bold text-[11px] uppercase tracking-widest mb-6 text-[#9A7226]">Endereço & Atendimento</h4>
          <ul className="flex flex-col gap-3.5 text-[13px] text-[#475569]">
            <li className="font-semibold text-[#0F2942] flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#9A7226]" />
              Centro de Campinas - SP
            </li>
            <li>Rua Regente Feijó, 712</li>
            <li>1º Andar - Sala 14 A</li>
            <li>CEP 13013-051</li>
            <li className="pt-2">
              <a 
                href="https://wa.me/5519982298018" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-sm text-[#0F2942] hover:text-[#9A7226] transition-colors bg-[#F1F5F9] px-3.5 py-2 rounded-sm border border-[#E2E8F0]"
              >
                <Phone className="w-3.5 h-3.5 text-[#9A7226]" />
                (19) 98229-8018
              </a>
            </li>
            <li className="pt-1">
              <a 
                href="https://wa.me/5519982298018?text=Olá,%20gostaria%20de%20atendimento%20jurídico%20com%20o%20escritório%20Lima%20%26%20Godoy."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16a34a] hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Falar pelo WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-[#E2E8F0] bg-[#F8FAFC] p-6 px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#64748B] uppercase tracking-wider font-semibold">
        <p>© {new Date().getFullYear()} Lima & Godoy Advogados Associados. OAB/SP.</p>
        <p>Defesa dos seus direitos com técnica, ética e compromisso há mais de 10 anos.</p>
      </div>
    </footer>
  );
}
