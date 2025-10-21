  // Carousel functionality
        const carouselWrapper = document.querySelector('.carousel-wrapper');
        const projectsCount = document.querySelectorAll('.project-featured').length;
        const dotsContainer = document.getElementById('carouselDots');
        let currentIndex = 0;

        // Create dots
        for (let i = 0; i < projectsCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }

        function updateCarousel() {
            carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        document.getElementById('prevBtn').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + projectsCount) % projectsCount;
            updateCarousel();
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % projectsCount;
            updateCarousel();
        });

        // Auto-advance carousel
        setInterval(() => {
            currentIndex = (currentIndex + 1) % projectsCount;
            updateCarousel();
        }, 5000);

        // Project filtering
        const filterTags = document.querySelectorAll('.filter-tag');
        const projectCards = document.querySelectorAll('.project-card');

        filterTags.forEach(tag => {
            tag.addEventListener('click', () => {
                filterTags.forEach(t => t.classList.remove('active'));
                tag.classList.add('active');
                const filter = tag.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const tags = card.getAttribute('data-tags').split(' ');
                    if (filter === 'all' || tags.includes(filter)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        }); 