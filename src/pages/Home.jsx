import {
  Menu,
  Heart,
  Clock,
  Calendar,
  Users,
  Globe,
  Shield,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import heroImage from "figma:asset/3851d024444bbfe17b787ff24b1797f0a39398f2.png";
import aboutImage from "figma:asset/1fc80c6f22582a568ea8b6712db04a9be3a452be.png";
import contactImage from "figma:asset/0298f96d49f15f294e0fd74cdc3bbd66af0a6732.png";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-rose-400" />
              <span className="font-medium text-gray-900">
                Psicoterapia Online
              </span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("atendimento")}
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  Atendimento
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("imigrantes")}
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  Para Imigrantes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("depoimentos")}
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  Contato
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("atendimento")}
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  Atendimento
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("imigrantes")}
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  Para Imigrantes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("depoimentos")}
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-gray-600 hover:text-rose-500 transition"
                >
                  Contato
                </button>
              </li>
            </ul>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight max-w-lg mx-auto md:mx-0">
                Psicoterapia online para quem vive entre
                culturas
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
                Atendimento psicológico online para pessoas em
                transições culturais que impactam o
                pertencimento, a identidade e a vida emocional.
              </p>
              <div className="flex flex-col items-center md:items-start">
                <button
                  onClick={() => scrollToSection("contato")}
                  className="bg-rose-400 text-white px-8 py-3.5 rounded-lg hover:bg-rose-500 transition text-base md:text-lg inline-flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Agendar sessão online
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Sessões online • Sigilo profissional •
                  Atendimento individual
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={heroImage}
                alt="Ambiente acolhedor para terapia online"
                className="rounded-xl shadow-md w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Atendimento Section */}
      <section
        id="atendimento"
        className="py-20 px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Como funciona o atendimento
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Sessões onlines realizadas por videochamada, em
              ambiente privado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <div className="bg-white p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                <Clock className="w-7 h-7 md:w-8 md:h-8 text-amber-600" />
              </div>
              <h3 className="text-lg md:text-xl mb-2 text-gray-900">
                50 minutos de duração
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Tempo adequado para escuta e aprofundamento
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                <Calendar className="w-7 h-7 md:w-8 md:h-8 text-amber-600" />
              </div>
              <h3 className="text-lg md:text-xl mb-2 text-gray-900">
                Sessões semanais
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Acompanhamento contínuo
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                <Shield className="w-7 h-7 md:w-8 md:h-8 text-amber-600" />
              </div>
              <h3 className="text-lg md:text-xl mb-2 text-gray-900">
                Sigilo profissional
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Espaço seguro e confidencial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Para Imigrantes Section */}
      <section
        id="imigrantes"
        className="py-20 px-6"
        style={{ backgroundColor: "#c47563" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Globe className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 opacity-90 text-white" />
            <h2 className="text-3xl md:text-4xl mb-6 text-white">
              Psicologia online para imigrantes
            </h2>
            <p className="text-base md:text-lg opacity-95 leading-relaxed text-white max-w-2xl mx-auto mb-4">
              Viver em outro país envolve adaptações emocionais
              profundas. A psicoterapia intercultural considera
              o impacto da migração e das mudanças de
              identidade.
            </p>
            <p className="text-sm text-white/80">
              Atendimento online para brasileiros no Brasil e no
              exterior.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-12">
            <div className="bg-white/25 backdrop-blur-sm p-7 md:p-8 rounded-xl border border-white/10">
              <h3 className="text-lg md:text-xl mb-2 text-white font-medium">
                Saudade e solidão
              </h3>
              <p className="text-sm md:text-base text-white/90">
                A distância da família, dos amigos e das
                referências conhecidas pode pesar. Aqui, esses
                sentimentos são compreendidos e acolhidos.
              </p>
            </div>

            <div className="bg-white/25 backdrop-blur-sm p-7 md:p-8 rounded-xl border border-white/10">
              <h3 className="text-lg md:text-xl mb-2 text-white font-medium">
                Choque cultural
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Estranhamentos, frustrações e conflitos internos
                fazem parte do processo de adaptação. Entender o
                que está acontecendo ajuda a reduzir a culpa e a
                confusão.
              </p>
            </div>

            <div className="bg-white/25 backdrop-blur-sm p-7 md:p-8 rounded-xl border border-white/10">
              <h3 className="text-lg md:text-xl mb-2 text-white font-medium">
                Dificuldades de adaptação
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Rotina, trabalho, idioma, burocracias… Pequenos
                desafios diários podem se tornar grandes
                sobrecargas emocionais quando vividos em
                solidão.
              </p>
            </div>

            <div className="bg-white/25 backdrop-blur-sm p-7 md:p-8 rounded-xl border border-white/10">
              <h3 className="text-lg md:text-xl mb-2 text-white font-medium">
                Reconstrução de identidade
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Mudar de país também transforma quem você é. A
                terapia pode ajudar a integrar suas origens com
                essa nova fase, fortalecendo sua identidade sem
                apagar sua história.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img
                src={aboutImage}
                alt="Psicóloga profissional"
                className="rounded-xl shadow-md w-full max-w-sm object-cover"
              />
            </div>
            <div className="text-center md:text-left order-1 md:order-2">
              <Users className="w-10 h-10 md:w-12 md:h-12 text-rose-400 mx-auto md:mx-0 mb-6" />
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                Sobre mim
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Sou psicóloga e trabalho com pessoas que vivem
                processos de mudança, adaptação e transição
                cultural.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Migrar ou viver entre culturas pode trazer
                desafios emocionais intensos, e meu trabalho é
                oferecer um espaço seguro para que você possa se
                compreender e se fortalecer nesse processo.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Minha abordagem considera que pensamentos,
                emoções e comportamentos estão conectados, e que
                o contexto cultural em que vivemos influencia
                profundamente essa dinâmica.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                O processo terapêutico acontece de forma
                estruturada, sempre respeitando sua história,
                singularidade e o momento que você está vivendo,
                em um espaço acolhedor e de confiança.
              </p>

              <p className="text-base italic text-gray-500 mb-10">
                A terapia é um espaço para entender o que você
                sente, mesmo quando é difícil colocar em
                palavras.
              </p>

              <div className="mt-10 pt-10 border-t border-gray-200">
                <h3 className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-4">
                  Atuação profissional
                </h3>
                <ul className="text-left text-gray-700 space-y-2 text-sm md:text-base max-w-md mx-auto md:mx-0">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">
                      •
                    </span>
                    <span>Psicóloga CRP 05/68568</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">
                      •
                    </span>
                    <span>
                      Especialização em Psicologia Intercultural
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">
                      •
                    </span>
                    <span>
                      Formação em Psicologia Social, Saúde
                      Mental e Neuroaprendizagem
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">
                      •
                    </span>
                    <span>
                      Sócia fundadora da clínica Empoderadamente
                    </span>
                  </li>
                </ul>

                {/* Botão da clínica */}
                <div className="mt-6">
                  <a
                    href="https://nucleoempoderadamente.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-rose-400 border-2 border-rose-400 px-8 py-3.5 rounded-lg hover:bg-rose-50 transition text-base md:text-lg inline-flex items-center gap-2"
                  >
                    Conheça a clínica Empoderadamente
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section
        id="depoimentos"
        className="py-20 px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
              Depoimentos
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Experiências compartilhadas por pessoas que
              buscaram apoio psicológico durante processos de
              mudança e transição cultural.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                "A terapia online me ajudou a compreender melhor
                meus sentimentos de deslocamento cultural. Foi
                fundamental para minha adaptação."
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-medium text-gray-900">
                  M.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Lisboa, Portugal
                </p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                "Encontrei um espaço acolhedor onde pude falar
                sobre a saudade e as dificuldades de estar
                longe. Me sinto mais preparada para seguir em
                frente."
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-medium text-gray-900">
                  L.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Toronto, Canadá
                </p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                "O atendimento online facilitou muito minha
                rotina. Poder fazer terapia no meu idioma, mesmo
                estando fora do Brasil, fez toda a diferença."
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-medium text-gray-900">
                  A.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Dublin, Irlanda
                </p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                "A escuta foi sempre cuidadosa e respeitosa. Me
                senti compreendida nas minhas dificuldades de
                adaptação e pude elaborar melhor essas
                questões."
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-medium text-gray-900">
                  R.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  São Paulo, Brasil
                </p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                "A terapia me ajudou a ressignificar minha
                identidade durante a transição cultural. Hoje me
                sinto mais conectada comigo mesma."
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-medium text-gray-900">
                  C.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Barcelona, Espanha
                </p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                "Um espaço seguro para falar sobre minhas
                angústias sem julgamentos. O processo
                terapêutico foi essencial para meu bem-estar
                emocional."
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-medium text-gray-900">
                  P.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Paris, França
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl mb-5 text-gray-900">
                Agende sua sessão
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
                Para informações sobre valores, horários e
                funcionamento, entre em contato pelo WhatsApp.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Você não precisa estar em crise para iniciar a
                terapia.
              </p>

              <a
                href="https://wa.link/cc9svt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-400 text-white px-8 md:px-10 py-4 md:py-5 rounded-lg hover:bg-rose-500 transition text-base md:text-lg inline-flex items-center gap-3 shadow-md"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                Falar no WhatsApp
              </a>

              <p className="text-xs text-gray-400 mt-6">
                CRP ativo • Atendimento conforme o Código de
                Ética Profissional
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src={contactImage}
                alt="Entre em contato"
                className="rounded-xl shadow-md w-full max-w-[530px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
