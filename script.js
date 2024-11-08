function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    
    // Add glitch effect on theme change
    document.body.style.animation = 'glitch 0.3s infinite';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 300);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 60;  // The gap you want to leave at the top

        if (target) {
            const topPosition = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: topPosition,
                behavior: "smooth"
            });
        }
    });
});