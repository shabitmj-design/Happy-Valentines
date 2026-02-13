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

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

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

// Easter egg - click title 10 times
let titleClicks = 0;
const title = document.querySelector('.title');

title.addEventListener('click', () => {
    titleClicks++;
    
    if (titleClicks === 10) {
        showEasterEgg();
        titleClicks = 0;
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

// Smooth scroll behavior for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Love heart cursor (optional)
document.addEventListener('mousemove', (e) => {
    const hearts = document.querySelectorAll('.heart-cursor');
    hearts.forEach(heart => {
        if (Math.random() > 0.95) {
            heart.remove();
        }
    });
});
// Reveal Main Page Function
function revealPage() {
    const landingPage = document.getElementById('landing-page');
    const mainPage = document.getElementById('main-page');
    
    // Add animation to landing page
    landingPage.style.animation = 'fadeOut 0.8s ease forwards';
    
    // Show main page after animation
    setTimeout(() => {
        landingPage.classList.add('hidden');
        mainPage.classList.remove('hidden');
        mainPage.classList.add('show');
        
        // Trigger confetti celebration
        celebrationConfetti();
    }, 800);
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

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.95);
        }
    }
`;
document.head.appendChild(style);

// Rest of your existing JavaScript code...
// (Keep all the observer, confetti, easter egg code from before)

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

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

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

// Smooth scroll behavior for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
