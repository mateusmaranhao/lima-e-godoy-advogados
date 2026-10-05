import { 
  HeartHandshake, 
  Users, 
  Building2, 
  ScrollText, 
  ShieldCheck, 
  Landmark, 
  type LucideIcon 
} from 'lucide-react';

export interface Service {
  id: string;
  shortTitle: string;
  title: string;
  heroSubtitle: string;
  icon: LucideIcon;
  desc: string;
  sections: {
    title: string;
    content: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Service[] = [
  { 
    id: 'divorcio-e-separacao', 
    shortTitle: 'Divórcio & Separação',
    title: 'Divórcio Consensual e Litigioso em Campinas',
    heroSubtitle: 'Assessoria jurídica ágil, segura e humanizada para divórcios em cartório ou judiciais.',
    icon: HeartHandshake, 
    desc: 'Atuação especializada em divórcios consensuais e litigiosos, garantindo a proteção patrimonial, regulação de guarda, pensão alimentícia e partilha de bens com total discrição e segurança.',
    sections: [
      { 
        title: 'Divórcio Consensual em Cartório (Extrajudicial)', 
        content: 'Procedimento rápido e desburocratizado realizado via escritura pública quando há comum acordo entre as partes, reduzindo desgastes emocionais e custos desnecessários.' 
      },
      { 
        title: 'Divórcio Litigioso e Defesa dos Seus Direitos', 
        content: 'Quando não há concordância quanto aos termos da separação, representamos você judicialmente com firmeza técnica para resguardar seus direitos patrimoniais e familiares.' 
      },
      { 
        title: 'Guarda de Filhos e Regime de Convivência', 
        content: 'Orientação técnica para a definição de guarda compartilhada ou unilateral e organização do plano de convivência, sempre priorizando o superior interesse dos filhos.' 
      },
      { 
        title: 'Fixação, Revisão e Execução de Pensão Alimentícia', 
        content: 'Cálculo fundamentado no binômio necessidade de quem recebe e possibilidade de quem paga, atuando também em ações de revisão ou cobrança de alimentos em atraso.' 
      },
      { 
        title: 'Proteção Patrimonial e Medidas Cautelares', 
        content: 'Bloqueio preventivo de dilapidação patrimonial, busca de bens ocultos e garantia da justa meação para evitar que um dos cônjuges seja financeiramente prejudicado.' 
      },
      { 
        title: 'Atuação Extrajudicial e Judicial em Campinas', 
        content: 'Experiência sólida perante os Cartórios de Notas e as Varas de Família e Sucessões da Comarca de Campinas e cidades de toda a Região Metropolitana.' 
      }
    ],
    faqs: [
      { 
        question: 'Quanto tempo demora para concluir um divórcio?', 
        answer: 'O divórcio consensual em cartório (extrajudicial) pode ser concluído em poucos dias ou semanas após a coleta de documentos. Já o divórcio litigioso na Justiça depende dos prazos e trâmites judiciais, mas sempre buscamos medidas liminares urgentes.' 
      },
      { 
        question: 'É possível fazer o divórcio mesmo se um dos cônjuges não concordar?', 
        answer: 'Sim. No Brasil, o divórcio é um direito potestativo incondicionado. Ninguém é obrigado a permanecer casado, bastando a vontade de uma das partes para que o juiz decrete a dissolução do vínculo matrimonial.' 
      }
    ]
  },
  { 
    id: 'uniao-estavel',
    shortTitle: 'União Estável',
    title: 'Reconhecimento e Dissolução de União Estável', 
    heroSubtitle: 'Segurança jurídica para a formalização, direitos patrimoniais e dissolução da convivência.',
    icon: Users, 
    desc: 'Elaboração de contratos de convivência, escrituras de união estável em cartório e ações judiciais para reconhecimento (inclusive pós-morte) e dissolução com partilha justa de bens.',
    sections: [
      { 
        title: 'Escritura Pública e Contrato de Convivência', 
        content: 'Formalização preventiva da união com escolha do regime de bens (comunhão parcial, separação total ou aquestos), trazendo clareza e proteção futura para o casal.' 
      },
      { 
        title: 'Reconhecimento Judicial de União Estável', 
        content: 'Comprovação probatória robusta de relação pública, contínua e duradoura com objetivo de constituição familiar, fundamental para garantir direitos patrimoniais e sucessórios.' 
      },
      { 
        title: 'Dissolução Amigável ou Litigiosa', 
        content: 'Encerramento formal da convivência com divisão dos bens adquiridos onerosamente pelo casal durante o período de convivência e definição de pensão ou guarda.' 
      },
      { 
        title: 'Reconhecimento Pós-Morte para Herança e INSS', 
        content: 'Comprovação da união após o falecimento do companheiro para habilitação em inventário e concessão de pensão por morte junto ao INSS.' 
      },
      { 
        title: 'Direito Real de Habitação do Companheiro', 
        content: 'Garantia legal de permanência no imóvel de residência da família após o falecimento do parceiro, independente da partilha com herdeiros.' 
      },
      { 
        title: 'Resolução Extrajudicial em Cartório', 
        content: 'Possibilidade de dissolver a união estável em cartório com rapidez, desde que haja consenso e ausência de filhos menores ou incapazes.' 
      }
    ],
    faqs: [
      { 
        question: 'Qual a diferença entre união estável e casamento?', 
        answer: 'Quanto aos efeitos patrimoniais e sucessórios, a união estável possui regras muito semelhantes ao casamento sob comunhão parcial de bens. Contudo, formalizar em escritura pública evita incertezas sobre o início da relação e os bens a serem partilhados.' 
      },
      { 
        question: 'O companheiro em união estável tem direito à herança?', 
        answer: 'Sim. Por decisão com repercussão geral do Supremo Tribunal Federal (STF), o companheiro sobrevivente em união estável tem os mesmos direitos sucessórios do cônjuge casado.' 
      }
    ]
  },
  { 
    id: 'partilha-de-bens',
    shortTitle: 'Partilha de Bens',
    title: 'Partilha de Bens no Divórcio e Dissolução', 
    heroSubtitle: 'Defesa e organização patrimonial com análise criteriosa de regimes de casamento e bens comuns.',
    icon: Building2, 
    desc: 'Análise minuciosa de regimes patrimoniais, bens móveis, imóveis, participações societárias e dívidas, resguardando cada centavo do patrimônio conquistado.',
    sections: [
      { 
        title: 'Interpretação e Aplicação do Regime de Bens', 
        content: 'Análise aprofundada conforme comunhão parcial, comunhão universal, separação total ou participação final nos aquestos para determinar o que integra a meação.' 
      },
      { 
        title: 'Divisão de Imóveis Financiados e Direitos Possessórios', 
        content: 'Cálculo exato das parcelas pagas durante o casamento ou união estável, possibilitando venda conjunta, compensação financeira ou transferência de titularidade.' 
      },
      { 
        title: 'Participações Societárias e Quotas de Empresas', 
        content: 'Apuração do valor patrimonial de quotas societárias e lucros auferidos durante o relacionamento para evitar prejuízos na partilha de sócios e empresários.' 
      },
      { 
        title: 'Localização e Combate à Ocultação de Bens', 
        content: 'Medidas cautelares de quebra de sigilo fiscal, bancário e rastreamento de veículos ou empresas intermediárias utilizadas para simular alienações.' 
      },
      { 
        title: 'Divisão Equitativa de Dívidas Comuns', 
        content: 'Apuração e responsabilização proporcional pelos débitos e financiamentos contraídos em proveito da família durante o período matrimonial.' 
      },
      { 
        title: 'Acordos Extrajudiciais e Homologação', 
        content: 'Negociação técnica que viabiliza a partilha justa de bens sem custos desnecessários com leilões ou anos de desgaste processual contencioso.' 
      }
    ],
    faqs: [
      { 
        question: 'Bens recebidos por herança ou doação entram na partilha?', 
        answer: 'No regime mais comum (comunhão parcial de bens), os bens recebidos por herança ou doação exclusiva não entram na partilha, pertencendo unicamente a quem os recebeu.' 
      },
      { 
        question: 'É possível fazer o divórcio primeiro e partilhar os bens depois?', 
        answer: 'Sim. A legislação brasileira permite a decretação do divórcio sem prévia partilha de bens (divórcio com partilha posterior), evitando que discussões patrimoniais impeçam o fim do casamento.' 
      }
    ]
  },
  { 
    id: 'inventario', 
    shortTitle: 'Inventário & Sucessões',
    title: 'Inventário Extrajudicial e Judicial em Campinas', 
    heroSubtitle: 'Transmissão ágil e juridicamente segura do patrimônio entre herdeiros com redução de tributos.',
    icon: ScrollText, 
    desc: 'Condução rápida de inventários em cartório (escritura pública) e inventários judiciais complexos, com apuração correta do imposto estadual (ITCMD) e pacificação entre herdeiros.',
    sections: [
      { 
        title: 'Inventário Extrajudicial em Cartório de Notas', 
        content: 'Procedimento realizado diretamente em tabelionato com máxima celeridade, cabível quando todos os herdeiros forem maiores, capazes e houver consenso na partilha.' 
      },
      { 
        title: 'Inventário Judicial Contencioso ou Consensual', 
        content: 'Atuação nas Varas de Família e Sucessões de Campinas para casos que envolvem menores, testamento ou desacordo entre herdeiros sobre a divisão dos bens.' 
      },
      { 
        title: 'Cálculo e Otimização do ITCMD (Imposto sobre Herança)', 
        content: 'Conferência técnica da base de cálculo do ITCMD perante a Fazenda do Estado de São Paulo para evitar cobranças indevidas ou multas por atraso.' 
      },
      { 
        title: 'Alvarás Judiciais e Liberação de Recursos', 
        content: 'Pedidos de alvará para levantamento imediato de valores em contas bancárias, poupança, PIS/PASEP, restituição de imposto de renda e saldos de FGTS do falecido.' 
      },
      { 
        title: 'Planejamento Sucessório e Testamentos', 
        content: 'Assessoria preventiva para organização patrimonial em vida, doações com reserva de usufruto e elaboração de testamentos juridicamente blindados.' 
      },
      { 
        title: 'Regularização Imobiliária de Bens do Espólio', 
        content: 'Abertura de matrícula, retificação de áreas e registro dos formais de partilha nos Cartórios de Registro de Imóveis de Campinas e região.' 
      }
    ],
    faqs: [
      { 
        question: 'Qual é o prazo para dar entrada no inventário?', 
        answer: 'Pela legislação processual civil, o processo de inventário e partilha deve ser instaurado dentro de 60 dias a contar da abertura da sucessão (data do óbito), para evitar a cobrança de multa pelo fisco estadual sobre o ITCMD.' 
      },
      { 
        question: 'Quando é possível fazer o inventário em cartório?', 
        answer: 'É possível quando todos os herdeiros forem maiores e juridicamente capazes, houver consenso sobre a partilha dos bens e assistência obrigatória de advogado.' 
      }
    ]
  },
  { 
    id: 'aposentadoria',
    shortTitle: 'Aposentadoria INSS',
    title: 'Aposentadorias e Planejamento Previdenciário em Campinas', 
    heroSubtitle: 'Conquiste o melhor benefício possível com análise aprofundada de todo o seu histórico contributivo.',
    icon: ShieldCheck, 
    desc: 'Especialistas em Aposentadoria por Idade, Tempo de Contribuição, Aposentadoria Especial (insalubridade), da Pessoa com Deficiência, Rural e Planejamento Previdenciário.',
    sections: [
      { 
        title: 'Planejamento Previdenciário Personalizado', 
        content: 'Estudo detalhado do seu extrato CNIS, carteiras de trabalho e carnês para simular cenários futuros e identificar o momento ideal e o maior valor de aposentadoria.' 
      },
      { 
        title: 'Regras de Transição da Reforma da Previdência', 
        content: 'Aplicação técnica da melhor regra de transição aplicável ao seu caso: pedágio de 50%, pedágio de 100%, pontos ou idade mínima progressiva.' 
      },
      { 
        title: 'Aposentadoria Especial (Insalubridade e Periculosidade)', 
        content: 'Análise minuciosa de PPP (Perfil Profissiográfico Previdenciário) e laudos LTCAT para comprovação de agentes nocivos químicos, físicos ou biológicos.' 
      },
      { 
        title: 'Aposentadoria por Idade Urbana e Rural', 
        content: 'Comprovação de carência e períodos trabalhados no campo em regime de economia familiar para somar tempo ou antecipar o direito à aposentadoria.' 
      },
      { 
        title: 'Aposentadoria da Pessoa com Deficiência', 
        content: 'Enquadramento nas regras diferenciadas da Lei Complementar 142/2013, com redução de idade e tempo de contribuição conforme o grau de deficiência.' 
      },
      { 
        title: 'Correção de Vínculos e Indicadores do CNIS', 
        content: 'Acertos de pendências administrativas perante o INSS: validação de períodos sem data de saída, recolhimentos abaixo do piso e duplicidade de NIT.' 
      }
    ],
    faqs: [
      { 
        question: 'Por que vale a pena fazer um Planejamento Previdenciário?', 
        answer: 'O planejamento previdenciário evita que você se aposente com um valor menor do que tem direito e identifica se esperar poucos meses pode aumentar expressivamente o valor mensal do seu benefício pelo resto da vida.' 
      },
      { 
        question: 'Quem já teve o pedido de aposentadoria negado pelo INSS pode recorrer?', 
        answer: 'Sim. É comum o INSS desconsiderar períodos rurais, PPPs ou carnês antigos. Nosso escritório analisa o processo e ingressa com recurso administrativo ou ação na Justiça Federal para reverter o indeferimento.' 
      }
    ]
  },
  { 
    id: 'beneficios-inss', 
    shortTitle: 'Benefícios INSS & Revisões',
    title: 'Benefícios do INSS e Cálculo da Vida Toda', 
    heroSubtitle: 'Assessoria administrativa e judicial para concessão de auxílios, pensão e revisão de cálculos.',
    icon: Landmark, 
    desc: 'Atuação especializada em Auxílio por Incapacidade Temporária (auxílio-doença), Aposentadoria por Invalidez, BPC/LOAS, Pensão por Morte e Revisões de Aposentadoria.',
    sections: [
      { 
        title: 'Auxílio por Incapacidade Temporária e Permanente', 
        content: 'Orientação documental e perícias médicas para trabalhadores afastados por doenças ou acidentes, combatendo altas programadas indevidas do INSS.' 
      },
      { 
        title: 'BPC/LOAS (Idoso e Pessoa com Deficiência)', 
        content: 'Concessão do benefício assistencial de um salário mínimo mensal para idosos com mais de 65 anos ou pessoas com deficiência em situação de vulnerabilidade familiar.' 
      },
      { 
        title: 'Pensão por Morte e Habilitação de Dependentes', 
        content: 'Concessão rápida para cônjuges, companheiros de união estável e filhos, com produção de provas documentais da dependência econômica e qualidade de segurado.' 
      },
      { 
        title: 'Revisão da Vida Toda e Cálculos Previdenciários', 
        content: 'Análise minuciosa de inclusão de contribuições anteriores a julho de 1994 e outras teses revisionais fundamentadas na legislação e jurisprudência.' 
      },
      { 
        title: 'Revisão de Atividades Concomitantes e Buraco Negro', 
        content: 'Revisão do valor de benefícios para quem exerceu mais de uma atividade simultânea ou teve o benefício concedido com índices defasados.' 
      },
      { 
        title: 'Mandado de Segurança contra Demora Excessiva', 
        content: 'Medida judicial cabível quando o INSS ultrapassa o prazo legal de 30 a 90 dias para analisar e responder ao requerimento do cidadão.' 
      }
    ],
    faqs: [
      { 
        question: 'Preciso ter contribuído para o INSS para receber o BPC/LOAS?', 
        answer: 'Não. O Benefício de Prestação Continuada (BPC/LOAS) é um benefício assistencial e não exige contribuições prévias, desde que atendidos os critérios de renda familiar e deficiência ou idade (65 anos).' 
      },
      { 
        question: 'O que fazer se o INSS cessar o auxílio por incapacidade antes da minha recuperação?', 
        answer: 'Você pode realizar o pedido de prorrogação no prazo legal ou acionar nosso escritório para ajuizamento de ação judicial de restabelecimento com pedido de perícia médica neutra perante a Justiça Federal.' 
      }
    ]
  }
];

export const faqData = [
  {
    question: 'Como funciona o atendimento no escritório Lima & Godoy Advogados?',
    answer: 'Com mais de 10 anos de experiência, oferecemos atendimento presencial em nosso escritório no Centro de Campinas (Rua Regente Feijó, 712 - 1º Andar - Sala 14 A) e também atendimento online para maior comodidade. Avaliamos a documentação do cliente com sigilo e transparência, apresentando a estratégia mais ágil e segura.'
  },
  {
    question: 'O escritório atua tanto na esfera administrativa quanto na judicial?',
    answer: 'Sim. Oferecemos assessoria e consultoria completa na esfera administrativa (requerimentos perante o INSS, cartórios de notas e órgãos públicos) e advocacia extrajudicial e judicial contenciosa perante o Poder Judiciário estadual e federal.'
  },
  {
    question: 'Em quais casos o divórcio e o inventário podem ser feitos em cartório?',
    answer: 'Tanto o divórcio quanto o inventário podem ser realizados de forma extrajudicial em cartório de notas desde que todas as partes sejam maiores, juridicamente capazes e estejam em comum acordo quanto à divisão dos bens e demais termos. A presença do advogado é obrigatória por lei.'
  },
  {
    question: 'Como saber se já posso me aposentar ou pedir benefício no INSS?',
    answer: 'Nossa equipe de especialistas em Direito Previdenciário realiza um diagnóstico minucioso do seu histórico de trabalho e contribuições (CNIS), calculando o tempo exato e simulando as melhores regras de transição da Reforma da Previdência para que você não perca dinheiro.'
  },
  {
    question: 'Qual é o endereço e o canal de contato do escritório em Campinas?',
    answer: 'Nosso escritório está localizado na Rua Regente Feijó, 712 - 1º Andar - Sala 14 A - Centro, Campinas - SP, CEP 13013-051. Você pode falar diretamente com nossa equipe pelo WhatsApp no número (19) 98229-8018 para tirar dúvidas e agendar sua consulta.'
  }
];

export const pillarsData = [
  {
    quote: "Há mais de 10 anos trabalhando com seriedade e dedicação na defesa irrestrita dos direitos dos nossos clientes e de suas famílias.",
    role: "Mais de 10 Anos de Atuação",
    company: "Lima & Godoy Advogados Associados"
  },
  {
    quote: "Atuação acolhedora e estratégica no Direito de Família e Sucessões: cuidamos do seu patrimônio e das suas relações com discrição, respeito e técnica.",
    role: "Direito das Famílias & Sucessões",
    company: "Campinas e Região Metropolitana"
  },
  {
    quote: "Assessoria previdenciária rigorosa e fundamentada para assegurar que você receba a melhor aposentadoria e o benefício devido do INSS sem perdas financeiras.",
    role: "Direito Previdenciário & INSS",
    company: "Esfera Administrativa e Judicial"
  },
  {
    quote: "Advocacia extrajudicial e judicial moderna: combinamos a agilidade dos cartórios com a firmeza combativa na defesa dos seus direitos perante a Justiça.",
    role: "Assessoria & Consultoria Jurídica",
    company: "Centro de Campinas - SP"
  }
];
