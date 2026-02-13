document.addEventListener('DOMContentLoaded', () => {
    // Animate Progress Bar
    const progressBar = document.querySelector('.progress-bar .fill');
    if (progressBar) {
        progressBar.style.width = '0%';
        setTimeout(() => {
            progressBar.style.transition = 'width 1.5s ease-out';
            progressBar.style.width = '25%';
        }, 500);
    }

    // Interactive Search
    const searchInput = document.querySelector('.search-bar input');
    const gameCards = document.querySelectorAll('.game-card, .list-item, .featured-card');

    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();

            gameCards.forEach(card => {
                const title = card.querySelector('h2, h4');
                if (title) {
                    const text = title.textContent.toLowerCase();
                    if (text.includes(term)) {
                        card.style.display = '';
                        card.style.opacity = '1';
                    } else {
                        card.style.opacity = '0.3'; // Dim instead of hide to keep layout
                        // Alternatively: card.style.display = 'none';
                    }
                }
            });
        });
    }

    // Chart Animation (Enhancement)
    const circle = document.querySelector('.circle');
    if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;

        const offset = circumference - (75 / 100) * circumference; // 75%

        setTimeout(() => {
            circle.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
            circle.style.strokeDashoffset = offset;
        }, 600);
    }

    // Hover scales
    const hoverables = document.querySelectorAll('.game-card, .list-item, .add-btn, .action-btn');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            // Add any JS specific hover logic if CSS isn't enough
        });
    });
});
