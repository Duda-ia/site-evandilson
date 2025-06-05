// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to current navigation item
const currentLocation = location.href;
const menuItems = document.querySelectorAll('.nav-links a');
menuItems.forEach(item => {
    if(item.href === currentLocation) {
        item.classList.add('active');
    }
});

// Função para destacar o link da navbar baseado na seção visível
function highlightNavbarLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar__link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const targetId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(targetId)) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Adiciona o evento de scroll
window.addEventListener('scroll', highlightNavbarLink);

// Adiciona o evento de clique nos links da navbar
document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Remove a classe active de todos os links
        document.querySelectorAll('.navbar__link').forEach(l => l.classList.remove('active'));
        // Adiciona a classe active ao link clicado
        this.classList.add('active');
    });
}); 