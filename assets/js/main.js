document.addEventListener('DOMContentLoaded', () => {
    // 1. 스크롤 등장 애니메이션 (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach((el) => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // 2. 네비게이션 스크롤 효과
    const nav = document.querySelector('.floating-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-dark-bg/80', 'shadow-2xl');
            nav.style.padding = '0.5rem 1.5rem';
        } else {
            nav.classList.remove('bg-dark-bg/80', 'shadow-2xl');
            nav.style.padding = '0.75rem 1.5rem';
        }
    });

    // 3. 배경 앰비언트 마우스 페럴랙스(Parallax) 효과
    const glows = document.querySelectorAll('.ambient-glow');
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 60;
        const y = (e.clientY / window.innerHeight - 0.5) * 60;
        glows.forEach((glow, index) => {
            const multiplier = index === 0 ? 1 : -1;
            glow.style.transform = `translate(${x * multiplier}px, ${y * multiplier}px)`;
        });
    });

    // 4. 숫자 카운팅 애니메이션
    const counters = document.querySelectorAll('.counter');
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'), 10);
                let currentCount = 0;
                const duration = 2000; // 2초 애니메이션
                const increment = countTo / (duration / 16);
                
                // 초기값 0 세팅
                target.innerText = "0";

                const updateCount = () => {
                    currentCount += increment;
                    if (currentCount < countTo) {
                        target.innerText = Math.ceil(currentCount);
                        requestAnimationFrame(updateCount);
                    } else {
                        target.innerText = countTo;
                    }
                };
                updateCount();
                countObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => countObserver.observe(counter));

    // 5. Scroll to Top 로직
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                scrollToTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
            } else {
                scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
                scrollToTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 6. 도입 문의 폼 이메일 전송 로직
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const company = document.getElementById('inquiry-company')?.value || '';
            const name = document.getElementById('inquiry-name')?.value || '';
            const phone = document.getElementById('inquiry-phone')?.value || '';
            const email = document.getElementById('inquiry-email')?.value || '';
            const content = document.getElementById('inquiry-content')?.value || '';
            
            const subject = encodeURIComponent(`[도입 문의] ${company} - ${name}님의 문의입니다.`);
            const body = encodeURIComponent(`회사명: ${company}\n담당자 성함: ${name}\n연락처: ${phone}\n이메일: ${email}\n\n문의 내용:\n${content}`);
            
            window.location.href = `mailto:sales@zeons.co.kr?subject=${subject}&body=${body}`;
        });
    }
});
