document.addEventListener('DOMContentLoaded', () => {

    /* ===============================
       1. MENU MOBILE
    =============================== */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Fechar menu ao clicar em um link (mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    /* ===============================
       2. SCROLL NA NAVBAR
    =============================== */
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.padding = '10px 0';
                navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            } else {
                navbar.style.padding = '20px 0';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    /* ===============================
       3. FAQ ACCORDION
    =============================== */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(otherItem => otherItem.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    /* ===============================
       4. ANIMAÇÕES AO ROLAR
    =============================== */
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(
        '.service-card, .about-text, .about-image, .testimonial-card, .info-card, .contact-form-container'
    ).forEach(el => observer.observe(el));

    /* ===============================
       5. FORMULÁRIO → WHATSAPP
    =============================== */
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const nome = document.getElementById('nome')?.value || '';
            const crianca = document.getElementById('crianca')?.value || '';
            const whatsappCliente = document.getElementById('whatsapp')?.value || '';
            const assunto = document.getElementById('assunto')?.value || '';
            const mensagem = document.getElementById('mensagem')?.value || '';

            const telefoneDestino = '5515974020398';

            const texto = `
Olá, Dra. Maria Júlia! 👋

Meu nome é *${nome}*.
Nome da criança: *${crianca || 'Não informado'}*
WhatsApp: *${whatsappCliente}*
Assunto: *${assunto}*

Mensagem:
${mensagem}
            `;

            const url = `https://wa.me/${telefoneDestino}?text=${encodeURIComponent(texto)}`;

            window.open(url, '_blank');
        });
    }

});
