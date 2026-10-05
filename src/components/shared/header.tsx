import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { prefetchRoute } from '@/lib/prefetch';
import logoImg from '@/assets/images/lima_godoy_logo_1791202356044.jpg';
import { MessageCircle } from 'lucide-react';

export function Header() {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    let isActive = false;
    if (path.startsWith('/#')) {
      isActive = location.pathname === '/' && location.hash === path.substring(1);
    } else {
      isActive = path === '/' ? location.pathname === '/' && !location.hash : location.pathname.startsWith(path);
    }
    return isActive
      ? "text-[#0F2942] border-b-2 border-[#9A7226] pb-1 font-bold"
      : "text-[#64748B] hover:text-[#0F2942] transition-colors pb-1 border-b-2 border-transparent";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-white/95 backdrop-blur-md h-[76px] flex items-center shadow-xs">
      <div className="w-full flex items-center justify-between px-6 lg:px-12 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-sm overflow-hidden border border-[#E2E8F0] bg-white shrink-0 flex items-center justify-center shadow-xs">
            <img 
              src={logoImg} 
              alt="Lima & Godoy Advogados Associados" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-lg text-[#0F2942] leading-none">
              Lima & Godoy
            </span>
            <span className="text-[10px] tracking-[0.22em] uppercase font-bold text-[#9A7226] mt-0.5">
              Advogados Associados
            </span>
          </div>
        </Link>
        
        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-7 lg:flex text-[12px] font-semibold uppercase tracking-wider">
            <Link to="/" className={getLinkClass('/')}>Início</Link>
            <Link to="/sobre" className={getLinkClass('/sobre')} onMouseEnter={() => prefetchRoute('/sobre')}>O Escritório</Link>
            <Link to="/servicos" className={getLinkClass('/servicos')} onMouseEnter={() => prefetchRoute('/servicos')}>Áreas de Atuação</Link>
            <Link to="/#faq" className={getLinkClass('/#faq')}>Dúvidas</Link>
            <Link to="/#contato" className={getLinkClass('/#contato')}>Contato & Localização</Link>
          </nav>

          <Button asChild className="bg-[#0F2942] text-white hover:bg-[#1B3B5C] px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-none hidden md:inline-flex h-auto transition-all shadow-sm">
            <a 
              href="https://wa.me/5519982298018?text=Olá,%20gostaria%20de%20atendimento%20jurídico%20com%20o%20escritório%20Lima%20%26%20Godoy."
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>(19) 98229-8018</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
