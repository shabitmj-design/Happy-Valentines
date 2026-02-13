// Reveal Main Page Function
function revealPage() {
    console.log("Button clicked!"); // Debug log
    
    const landingPage = document.getElementById('landing-page');
    const mainPage = document.getElementById('main-page');
    
    if (!landingPage || !mainPage) {
        console.error("Landing page or main page not found!");
        return;
    }
    
    // Hide landing page
    landingPage.style.opacity = '0';
    landingPage.style.pointerEvents = 'none';
    
    // Show main page
    mainPage.classList.remove('hidden');
    mainPage.style.opacity = '1';
    
    // Trigger confetti celebration
    celebrationConfetti();
}

// Celebration Confetti
function celebrationConfetti() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti(
                window.innerWidth / 2 + (Math.random() - 0.5) * 400,
                window.innerHeight / 2 + (Math.random() - 0.5) * 300
            );
        }, i * 20);
    }
}

// Confetti effect on mouse move
let confettiCount = 0;
document.addEventListener('mousemove', (e) => {
    if (confettiCount % 5 === 0) {
        createConfetti(e.pageX, e.pageY);
    }
    confettiCount++;
});

function createConfetti(x, y) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';
    confetti.style.backgroundColor = ['#f5576c', '#f093fb', '#667eea'][Math.floor(Math.random() * 3)];
    confetti.style.animation = `confetti-fall ${Math.random() * 2 + 2}s ease-out forwards`;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 4000);
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInSection 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections after page loads
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});

// Easter egg - click title 10 times
let titleClicks = 0;
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    if (title) {
        title.addEventListener('click', () => {
            titleClicks++;
            if (titleClicks === 10) {
                showEasterEgg();
                titleClicks = 0;
            }
        });
    }
});

function showEasterEgg() {
    const easterEgg = document.createElement('div');
    easterEgg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        z-index: 9999;
        text-align: center;
        animation: fadeInUp 0.5s ease;
        max-width: 400px;
    `;
    
    easterEgg.innerHTML = `
        <h2 style="color: #764ba2; margin-bottom: 20px; font-size: 2rem;">💕 I Love You! 💕</h2>
        <p style="color: #666; font-size: 1.1rem; line-height: 1.6;">
            You are the most wonderful person in my life. Thank you for being you.
        </p>
        <button onclick="this.parentElement.remove()" style="
            margin-top: 20px;
            padding: 10px 30px;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            border: none;
            border-radius: 25px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        ">Close 💋</button>
    `;
    
    document.body.appendChild(easterEgg);
    
    // Confetti explosion
    for (let i = 0; i < 30; i++) {
        createConfetti(window.innerWidth / 2 + (Math.random() - 0.5) * 200, 
                      window.innerHeight / 2 + (Math.random() - 0.5) * 200);
    }
}
