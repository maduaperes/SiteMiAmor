document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Fechar menu ao clicar em um link (Mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.querySelector('.menu-toggle i').classList.add('fa-bars');
        });
    });

    // 2. Efeito de Scroll na Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Fecha todos os outros
            faqItems.forEach(otherItem => otherItem.classList.remove('active'));

            // Abre o atual se não estava ativo
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 4. Animação simples ao rolar (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
            }
        });
    }, observerOptions);

    // Seleciona elementos para animar (opcional, requer classes de animação no CSS)
    document.querySelectorAll('.service-card, .about-text, .about-image').forEach(el => {
        observer.observe(el);
    });
});