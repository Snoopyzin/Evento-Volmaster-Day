// ============================================
// SISTEMA DE INTERNACIONALIZAÇÃO (i18n)
// Português (BR), Inglês (US), Espanhol (ES)
// ============================================

const translations = {
    'pt-br': {
        // Meta tags
        'meta-title': 'Imersão Volmaster - Evento de Capacitação Automotiva',
        'meta-description': 'A Imersão Volmaster conecta empreendedores, investidores e profissionais de tecnologia em um dia de imersão em inovação, networking e experiências exclusivas.',
        
        // Preloader
        'preloader-text': 'Carregando Experiência...',
        
        // Navigation
        'nav-about': 'Sobre',
        'nav-audience': 'Público',
        'nav-speakers': 'Palestrantes',
        'nav-schedule': 'Programação',
        'nav-sponsors': 'Patrocínio',
        'nav-contact': 'Contato',
        'nav-cta': 'Quero Participar',
        
        // Hero Section
        'hero-title-immersion': 'Imersão',
        'hero-title-volmaster': 'Volmaster Tech',
        'hero-label-date': 'Data',
        'hero-label-location': 'Local',
        'hero-date': '12 de Setembro, 2026',
        'hero-location': 'Goiânia, GO',
        'hero-description': 'O primeiro e maior evento para profissionais em manutenção de caminhões da linha Volvo',
        
        // Countdown
        'countdown-days': 'Dias',
        'countdown-hours': 'Horas',
        'countdown-minutes': 'Minutos',
        'countdown-seconds': 'Segundos',
        
        // Event Intro
        'intro-title-1': 'O Sucesso do seu futuro está aqui!',
        'intro-title-2': '12 Horas de Imersão Total',
        'intro-text': 'O primeiro evento totalmente pensado e voltado para atender as demandas de empresários, donos de oficinas mecânicas e profissionais da manutenção da linha pesada Volvo.',
        'benefit-item-1': 'Trabalhe menos e ganhe mais.',
        'benefit-item-2': 'Lidere sua equipe de maneira eficaz.',
        'benefit-item-3': 'Seja o mentor do seu negócio.',
        'benefit-item-4': 'Tenha qualidade de vida!',
        'intro-subtitle': 'Idealizamos esse evento para sua empresa:',
        'goal-1': 'Sair do amadorismo',
        'goal-2': 'Exercer excelência',
        'goal-3': 'Ser vista',
        'goal-4': 'Se tornar autoridade',
        'goal-5': 'Fazer parte de algo maior',
        'goal-6': 'Se manter nesse lugar e avançar sempre! Nunca reduzir!',
        
        // Target Audience
        'audience-title': 'Pra Quem É o Evento',
        'audience-subtitle': 'Este evento foi desenhado especificamente para dois perfis de profissionais do setor automotivo',
        'audience-col1-title': 'Dono de oficina',
        'audience-col1-item1': 'Você que criou sua empresa do zero',
        'audience-col1-item2': 'Cresceu muito e tem dificuldades na administração',
        'audience-col1-item3': 'Sente que precisa avançar, ir para um novo nível',
        'audience-col1-item4': 'Sabe que o que te trouxe até aqui não é suficiente para te levar além',
        'audience-col1-item5': 'Está vendo o mercado mudar e você está estagnado',
        'audience-col1-item6': 'Sabe que tem potencial e deseja ver sua empresa sendo referência',
        'audience-col2-title': 'Gerente, chefe de oficina e mecânicos',
        'audience-col2-item1': 'Você que é um ótimo profissional, mas trabalha muito e ganha pouco',
        'audience-col2-item2': 'Você que busca ser o melhor na sua área de atuação',
        'audience-col2-item3': 'Você que é o principal interessado no seu crescimento profissional',
        'audience-col2-item4': 'Você que não quer ficar parado no tempo e deseja acompanhar as evoluções',
        'audience-col2-item5': 'Você que quer trabalhar menos e ganhar mais',
        'audience-col2-item6': 'Você que sabe que o mundo é dos espertos, mas o mercado é dos que avançam',
        
        // Stats
        'stat-participants': 'Participantes Esperados',
        'stat-speakers': 'Palestrantes',
        'stat-hours': 'Horas de Conteúdo',
        'stat-networking': '% Networking',
        
        // Speakers
        'speakers-badge': 'Conheça os Palestrantes',
        'speakers-title-main': 'PALESTRANTES EM DESTAQUE',
        'speakers-description': 'Profissionais referência em suas áreas que vão compartilhar conhecimento e experiências',
        
        // Tickets
        'tickets-badge': 'Ingressos',
        'tickets-title': 'Garanta Sua Vaga',
        'tickets-lote1': '1º LOTE',
        'tickets-lote2': '2º LOTE',
        'tickets-lote3': '3º LOTE',
        'tickets-vista': 'à vista ou pix',
        'tickets-ou': 'ou 2x R$',
        'tickets-cta': 'Comprar Ingresso',
        
        // CTA Section
        'cta-title': 'Não Perca Esta Oportunidade',
        'cta-description': 'Garanta sua vaga na maior imersão de tecnologia e inovação do Brasil',
        'cta-button': 'Garantir Minha Vaga Agora',
        'cta-sponsor': 'Quero Ser Patrocinador',
        'cta-guarantee': 'Garantia de 30 dias ou seu dinheiro de volta',
        
        // Sponsors
        'sponsors-badge': 'Nossos Parceiros',
        'sponsors-title': 'PATROCINADORES',
        'sponsors-description': 'Empresas que acreditam e investem em inovação',
        
        // Schedule
        'schedule-badge': 'Seu Guia do Evento',
        'schedule-title': 'PROGRAMAÇÃO',
        'schedule-description': 'Confira a programação completa do evento',
        'schedule-date': '12 Setembro 2026',
        'schedule-item-1-title': 'Abertura e Credenciamento',
        'schedule-item-1-desc': 'Recepção dos participantes e entrega de materiais',
        'schedule-item-2-title': 'Palestra Alan Volmaster',
        'schedule-item-2-desc': 'Conteúdo exclusivo com Alan Volmaster',
        'schedule-item-3-title': 'Convidados',
        'schedule-item-3-desc': 'Apresentações especiais dos convidados',
        'schedule-item-4-title': 'Workshop práticas',
        'schedule-item-4-desc': 'Práticas e técnicas para aplicação imediata',
        'schedule-item-5-title': 'Networking e almoço',
        'schedule-item-5-desc': 'Momento de conexão com outros profissionais',
        'schedule-item-6-title': 'Palestra Convidados',
        'schedule-item-6-desc': 'Conteúdos especiais com palestrantes convidados',
        'schedule-item-7-title': 'Alan responde ao vivo',
        'schedule-item-7-desc': 'Sessão interativa de perguntas e respostas',
        
        // Testimonials
        'testimonials-badge': 'Depoimentos',
        'testimonials-title': 'O Que Dizem Sobre Nós',
        'testimonials-description': 'Veja o que participantes das edições anteriores compartilham',
        
        // FAQ
        'faq-badge': 'Perguntas Frequentes',
        'faq-title': 'Tire Suas Dúvidas',
        'faq-description': 'Reunimos as principais questões sobre o evento',
        'faq-q1': 'Quem pode participar da Imersão Volmaster?',
        'faq-q2': 'Qual o formato do evento?',
        'faq-q3': 'O que está incluído na inscrição?',
        
        // Footer
        'footer-description': 'Criando experiências memoráveis através de eventos de tecnologia e inovação.',
        'footer-quick-links': 'Links Rápidos',
        'footer-link-home': 'Início',
        'footer-link-audience': 'Público',
        'footer-link-speakers': 'Palestrantes',
        'footer-link-schedule': 'Programação',
        'footer-link-sponsors': 'Patrocinadores',
        'footer-info': 'Informações',
        'footer-location': '📍 Goiânia, GO',
        'footer-date': '📅 12 de Setembro 2026',
        'footer-email': '📧 contato@volmasterday.com',
        'footer-contact': '📱 Entre em contato',
        'footer-copyright': '© 2026 Imersão Volmaster. Todos os direitos reservados.'
    },
    
    'en-us': {
        // Meta tags
        'meta-title': 'Volmaster Immersion - Automotive Training Event',
        'meta-description': 'Volmaster Immersion connects entrepreneurs, investors and technology professionals in a day of immersion in innovation, networking and exclusive experiences.',
        
        // Preloader
        'preloader-text': 'Loading Experience...',
        
        // Navigation
        'nav-about': 'About',
        'nav-audience': 'Audience',
        'nav-speakers': 'Speakers',
        'nav-schedule': 'Schedule',
        'nav-sponsors': 'Sponsors',
        'nav-contact': 'Contact',
        'nav-cta': 'Join Us',
        
        // Hero Section
        'hero-title-immersion': 'Immersion',
        'hero-title-volmaster': 'Volmaster Tech',
        'hero-label-date': 'Date',
        'hero-label-location': 'Location',
        'hero-date': 'September 12, 2026',
        'hero-location': 'Goiânia, GO',
        'hero-description': 'The first and largest event for Volvo truck line maintenance professionals',
        
        // Countdown
        'countdown-days': 'Days',
        'countdown-hours': 'Hours',
        'countdown-minutes': 'Minutes',
        'countdown-seconds': 'Seconds',
        
        // Event Intro
        'intro-title-1': 'Your future success is here!',
        'intro-title-2': '12 Hours of Full Immersion',
        'intro-text': 'The first event entirely designed to meet the demands of business owners, workshop owners, and Volvo heavy-duty line maintenance professionals.',
        'benefit-item-1': 'Work less and earn more.',
        'benefit-item-2': 'Lead your team effectively.',
        'benefit-item-3': 'Be the mentor of your business.',
        'benefit-item-4': 'Have quality of life!',
        'intro-subtitle': 'We designed this event for your company:',
        'goal-1': 'Leave amateurism behind',
        'goal-2': 'Exercise excellence',
        'goal-3': 'Be seen',
        'goal-4': 'Become an authority',
        'goal-5': 'Be part of something bigger',
        'goal-6': 'Stay in this place and always advance! Never reduce!',
        
        // Target Audience
        'audience-title': 'Who Is The Event For',
        'audience-subtitle': 'This event was specifically designed for two profiles of automotive industry professionals',
        'audience-col1-title': 'Workshop Owner',
        'audience-col1-item1': 'You who built your company from scratch',
        'audience-col1-item2': 'Grew a lot and have management difficulties',
        'audience-col1-item3': 'Feel you need to advance, go to a new level',
        'audience-col1-item4': 'Know that what brought you here is not enough to take you further',
        'audience-col1-item5': 'Are seeing the market change and you are stagnant',
        'audience-col1-item6': 'Know you have potential and want to see your company being a reference',
        'audience-col2-title': 'Manager, workshop supervisor and mechanics',
        'audience-col2-item1': 'You who are a great professional, but work a lot and earn little',
        'audience-col2-item2': 'You who seek to be the best in your field',
        'audience-col2-item3': 'You who are the main interested in your professional growth',
        'audience-col2-item4': 'You who don\'t want to be stuck in time and want to keep up with developments',
        'audience-col2-item5': 'You who want to work less and earn more',
        'audience-col2-item6': 'You who know the world belongs to the smart, but the market belongs to those who advance',
        
        // Stats
        'stat-participants': 'Expected Participants',
        'stat-speakers': 'Speakers',
        'stat-hours': 'Hours of Content',
        'stat-networking': '% Networking',
        
        // Speakers
        'speakers-badge': 'Meet the Speakers',
        'speakers-title-main': 'FEATURED SPEAKERS',
        'speakers-description': 'Reference professionals in their fields who will share knowledge and experiences',
        
        // Tickets
        'tickets-badge': 'Tickets',
        'tickets-title': 'Secure Your Spot',
        'tickets-lote1': '1st BATCH',
        'tickets-lote2': '2nd BATCH',
        'tickets-lote3': '3rd BATCH',
        'tickets-vista': 'cash or pix',
        'tickets-ou': 'or 2x $',
        'tickets-cta': 'Buy Ticket',
        
        // CTA Section
        'cta-title': "Don't Miss This Opportunity",
        'cta-description': 'Secure your spot at the biggest technology and innovation immersion in Brazil',
        'cta-button': 'Secure My Spot Now',
        'cta-sponsor': 'I Want to Be a Sponsor',
        'cta-guarantee': '30-day guarantee or your money back',
        
        // Testimonials
        'testimonials-badge': 'Testimonials',
        'testimonials-title': 'What They Say About Us',
        'testimonials-description': 'See what participants from previous editions share',
        
        // Sponsors
        'sponsors-badge': 'Our Partners',
        'sponsors-title': 'SPONSORS',
        'sponsors-description': 'Companies that believe and invest in innovation',
        
        // Schedule
        'schedule-badge': 'Your Event Guide',
        'schedule-title': 'SCHEDULE',
        'schedule-description': 'Check out the complete event schedule',
        'schedule-date': 'September 12, 2026',
        'schedule-item-1-title': 'Opening and Registration',
        'schedule-item-1-desc': 'Reception of participants and delivery of materials',
        'schedule-item-2-title': 'Alan Volmaster Lecture',
        'schedule-item-2-desc': 'Exclusive content with Alan Volmaster',
        'schedule-item-3-title': 'Special Guests',
        'schedule-item-3-desc': 'Special presentations from guests',
        'schedule-item-4-title': 'Practical Workshop',
        'schedule-item-4-desc': 'Practices and techniques for immediate application',
        'schedule-item-5-title': 'Networking and Lunch',
        'schedule-item-5-desc': 'Connection moment with other professionals',
        'schedule-item-6-title': 'Guest Speakers',
        'schedule-item-6-desc': 'Special content with guest speakers',
        'schedule-item-7-title': 'Alan Answers Live',
        'schedule-item-7-desc': 'Interactive Q&A session',
        
        // FAQ
        'faq-badge': 'FAQ',
        'faq-title': 'Frequently Asked Questions',
        'faq-description': 'We gathered the main questions about the event',
        'faq-q1': 'Who can participate in Volmaster Immersion?',
        'faq-q2': 'What is the event format?',
        'faq-q3': 'What is included in the registration?',
        
        // Footer
        'footer-description': 'Creating memorable experiences through technology and innovation events.',
        'footer-quick-links': 'Quick Links',
        'footer-link-home': 'Home',
        'footer-link-audience': 'Audience',
        'footer-link-speakers': 'Speakers',
        'footer-link-schedule': 'Schedule',
        'footer-link-sponsors': 'Sponsors',
        'footer-info': 'Information',
        'footer-location': '📍 Goiânia, GO',
        'footer-date': '📅 September 12, 2026',
        'footer-email': '📧 contact@volmasterday.com',
        'footer-contact': '📱 Get in touch',
        'footer-copyright': '© 2026 Volmaster Immersion. All rights reserved.'
    },
    
    'es-es': {
        // Meta tags
        'meta-title': 'Inmersión Volmaster - Evento de Capacitación Automotriz',
        'meta-description': 'La Inmersión Volmaster conecta empresarios, inversores y profesionales de tecnología en un día de inmersión en innovación, networking y experiencias exclusivas.',
        
        // Preloader
        'preloader-text': 'Cargando Experiencia...',
        
        // Navigation
        'nav-about': 'Acerca',
        'nav-audience': 'Público',
        'nav-speakers': 'Ponentes',
        'nav-schedule': 'Programación',
        'nav-sponsors': 'Patrocinadores',
        'nav-contact': 'Contacto',
        'nav-cta': 'Quiero Participar',
        
        // Hero Section
        'hero-title-immersion': 'Inmersión',
        'hero-title-volmaster': 'Volmaster Tech',
        'hero-label-date': 'Fecha',
        'hero-label-location': 'Ubicación',
        'hero-date': '12 de Septiembre, 2026',
        'hero-location': 'Goiânia, GO',
        'hero-description': 'El primer y mayor evento para profesionales en mantenimiento de camiones de la línea Volvo',
        
        // Countdown
        'countdown-days': 'Días',
        'countdown-hours': 'Horas',
        'countdown-minutes': 'Minutos',
        'countdown-seconds': 'Segundos',
        
        // Event Intro
        'intro-title-1': '¡El éxito de tu futuro está aquí!',
        'intro-title-2': '12 Horas de Inmersión Total',
        'intro-text': 'El primer evento completamente diseñado para atender las demandas de empresarios, propietarios de talleres mecánicos y profesionales del mantenimiento de la línea pesada Volvo.',
        'benefit-item-1': 'Trabaja menos y gana más.',
        'benefit-item-2': 'Lidera tu equipo de manera efectiva.',
        'benefit-item-3': 'Sé el mentor de tu negocio.',
        'benefit-item-4': '¡Ten calidad de vida!',
        'intro-subtitle': 'Idealizamos este evento para tu empresa:',
        'goal-1': 'Salir del amateurismo',
        'goal-2': 'Ejercer excelencia',
        'goal-3': 'Ser visto',
        'goal-4': 'Convertirse en autoridad',
        'goal-5': 'Ser parte de algo más grande',
        'goal-6': '¡Mantenerse en este lugar y avanzar siempre! ¡Nunca reducir!',
        
        // Target Audience
        'audience-title': 'Para Quién Es El Evento',
        'audience-subtitle': 'Este evento fue diseñado específicamente para dos perfiles de profesionales del sector automotriz',
        'audience-col1-title': 'Dueño de taller',
        'audience-col1-item1': 'Tú que creaste tu empresa desde cero',
        'audience-col1-item2': 'Creciste mucho y tienes dificultades en la administración',
        'audience-col1-item3': 'Sientes que necesitas avanzar, ir a un nuevo nivel',
        'audience-col1-item4': 'Sabes que lo que te trajo hasta aquí no es suficiente para llevarte más allá',
        'audience-col1-item5': 'Estás viendo el mercado cambiar y tú estás estancado',
        'audience-col1-item6': 'Sabes que tienes potencial y deseas ver tu empresa siendo referencia',
        'audience-col2-title': 'Gerente, jefe de taller y mecánicos',
        'audience-col2-item1': 'Tú que eres un excelente profesional, pero trabajas mucho y ganas poco',
        'audience-col2-item2': 'Tú que buscas ser el mejor en tu área de actuación',
        'audience-col2-item3': 'Tú que eres el principal interesado en tu crecimiento profesional',
        'audience-col2-item4': 'Tú que no quieres quedarte parado en el tiempo y deseas acompañar las evoluciones',
        'audience-col2-item5': 'Tú que quieres trabajar menos y ganar más',
        'audience-col2-item6': 'Tú que sabes que el mundo es de los listos, pero el mercado es de los que avanzan',
        
        // Stats
        'stat-participants': 'Participantes Esperados',
        'stat-speakers': 'Ponentes',
        'stat-hours': 'Horas de Contenido',
        'stat-networking': '% Networking',
        
        // Speakers
        'speakers-badge': 'Conoce a los Ponentes',
        'speakers-title-main': 'PONENTES DESTACADOS',
        'speakers-description': 'Profesionales de referencia en sus áreas que compartirán conocimiento y experiencias',
        
        // Tickets
        'tickets-badge': 'Entradas',
        'tickets-title': 'Asegura Tu Plaza',
        'tickets-lote1': '1er LOTE',
        'tickets-lote2': '2do LOTE',
        'tickets-lote3': '3er LOTE',
        'tickets-vista': 'al contado o pix',
        'tickets-ou': 'o 2x $',
        'tickets-cta': 'Comprar Entrada',
        
        // CTA Section
        'cta-title': 'No Pierdas Esta Oportunidad',
        'cta-description': 'Asegura tu plaza en la mayor inmersión de tecnología e innovación de Brasil',
        'cta-button': 'Asegurar Mi Plaza Ahora',
        'cta-sponsor': 'Quiero Ser Patrocinador',
        'cta-guarantee': 'Garantía de 30 días o te devolvemos tu dinero',
        
        // Sponsors
        'sponsors-badge': 'Nuestros Socios',
        'sponsors-title': 'PATROCINADORES',
        'sponsors-description': 'Empresas que creen e invierten en innovación',
        
        // Testimonials
        'testimonials-badge': 'Testimonios',
        'testimonials-title': 'Lo Que Dicen Sobre Nosotros',
        'testimonials-description': 'Ve lo que los participantes de ediciones anteriores comparten',
        
        // Sponsors
        'sponsors-badge': 'Nuestros Socios',
        'sponsors-title': 'PATROCINADORES',
        'sponsors-description': 'Empresas que creen e invierten en innovación',
        
        // Schedule
        'schedule-badge': 'Tu Guía del Evento',
        'schedule-title': 'PROGRAMA',
        'schedule-description': 'Consulta el programa completo del evento',
        'schedule-date': '12 de Septiembre 2026',
        'schedule-item-1-title': 'Apertura y Acreditación',
        'schedule-item-1-desc': 'Recepción de participantes y entrega de materiales',
        'schedule-item-2-title': 'Conferencia Alan Volmaster',
        'schedule-item-2-desc': 'Contenido exclusivo con Alan Volmaster',
        'schedule-item-3-title': 'Invitados',
        'schedule-item-3-desc': 'Presentaciones especiales de los invitados',
        'schedule-item-4-title': 'Taller Práctico',
        'schedule-item-4-desc': 'Prácticas y técnicas para aplicación inmediata',
        'schedule-item-5-title': 'Networking y Almuerzo',
        'schedule-item-5-desc': 'Momento de conexión con otros profesionales',
        'schedule-item-6-title': 'Conferencia Invitados',
        'schedule-item-6-desc': 'Contenidos especiales con ponentes invitados',
        'schedule-item-7-title': 'Alan Responde en Vivo',
        'schedule-item-7-desc': 'Sesión interactiva de preguntas y respuestas',
        
        // FAQ
        'faq-badge': 'Preguntas Frecuentes',
        'faq-title': 'Resuelve Tus Dudas',
        'faq-description': 'Reunimos las principales preguntas sobre el evento',
        'faq-q1': '¿Quién puede participar en la Inmersión Volmaster?',
        'faq-q2': '¿Cuál es el formato del evento?',
        'faq-q3': '¿Qué está incluido en la inscripción?',
        
        // Footer
        'footer-description': 'Creando experiencias memorables a través de eventos de tecnología e innovación.',
        'footer-quick-links': 'Enlaces Rápidos',
        'footer-link-home': 'Inicio',
        'footer-link-audience': 'Público',
        'footer-link-speakers': 'Ponentes',
        'footer-link-schedule': 'Programación',
        'footer-link-sponsors': 'Patrocinadores',
        'footer-info': 'Información',
        'footer-location': '📍 Goiânia, GO',
        'footer-date': '📅 12 de Septiembre 2026',        'footer-email': '📧 contacto@volmasterday.com',        'footer-contact': '📱 Ponte en contacto',
        'footer-copyright': '© 2026 Inmersión Volmaster. Todos los derechos reservados.'
    }
};

// Função para mudar o idioma
function changeLanguage(lang) {
    console.log('🔄 Mudando idioma para:', lang);
    
    // Salva a preferência no localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Atualiza todos os elementos com data-i18n
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    console.log('📄 Elementos para traduzir:', elementsToTranslate.length);
    
    let translatedCount = 0;
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
            translatedCount++;
        }
    });
    
    console.log(`✏️ ${translatedCount} elementos traduzidos`);
    
    // Atualiza atributos especiais
    const htmlLang = lang === 'pt-br' ? 'pt-BR' : lang === 'en-us' ? 'en-US' : 'es-ES';
    document.documentElement.lang = htmlLang;
    
    // Atualiza title e description
    if (translations[lang]['meta-title']) {
        document.title = translations[lang]['meta-title'];
    }
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations[lang]['meta-description']) {
        metaDesc.content = translations[lang]['meta-description'];
    }
    
    // Atualiza botões ativos
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
            console.log('⭐ Botão ativo:', lang);
        }
    });
    
    console.log('✅ Idioma alterado com sucesso!');
}

// Torna a função global para uso inline
window.changeLanguage = changeLanguage;

// Função de inicialização
function initializeLanguageSystem() {
    console.log('🌐 Sistema i18n inicializando...');
    
    // Verifica idioma salvo ou usa o padrão do navegador
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.toLowerCase();
    
    let defaultLang = 'pt-br';
    if (savedLang) {
        defaultLang = savedLang;
        console.log('📌 Idioma salvo encontrado:', savedLang);
    } else if (browserLang.startsWith('en')) {
        defaultLang = 'en-us';
    } else if (browserLang.startsWith('es')) {
        defaultLang = 'es-es';
    }
    
    console.log('🔤 Idioma padrão:', defaultLang);
    
    // Aplica o idioma padrão
    changeLanguage(defaultLang);
    
    // Adiciona event listeners nos botões
    const languageButtons = document.querySelectorAll('.language-btn');
    console.log('🔘 Botões de idioma encontrados:', languageButtons.length);
    
    if (languageButtons.length === 0) {
        console.warn('⚠️ Nenhum botão encontrado! Tentando novamente em 500ms...');
        setTimeout(initializeLanguageSystem, 500);
        return;
    }
    
    languageButtons.forEach((btn, index) => {
        const lang = btn.getAttribute('data-lang');
        console.log(`   Botão ${index + 1}: ${lang}`);
        
        // Adiciona event listener único
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🖱️ Clique detectado no botão:', lang);
            changeLanguage(lang);
        });
    });
    
    console.log('✅ Sistema i18n inicializado com sucesso!');
}

// Inicialização quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLanguageSystem);
} else {
    initializeLanguageSystem();
}
