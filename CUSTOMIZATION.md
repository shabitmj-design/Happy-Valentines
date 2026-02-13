# 🎨 Valentine's Website - Complete Customization Guide

## 📝 Personalizing Your Website

### 1. **Edit the Main Title**
Open `index.html` and find:
```html
<h1 class="title">💕 You Are My Everything 💕</h1>
```
Change it to something personal like:
```html
<h1 class="title">💕 [Her Name], You're My Everything 💕</h1>
```

### 2. **Update Your Love Reasons**
Find the `.reasons-container` section and edit the reason items:
```html
<div class="reason-item">
    <span class="emoji">😍</span>
    <p>Your smile lights up my entire world and makes every day brighter</p>
</div>
```

Change the emoji and text to your own reasons!

### 3. **Customize the Photo Section**
Replace photo descriptions:
```html
<div class="photo">
    <div class="photo-placeholder">Our First Meeting 💑</div>
    <p>When my heart knew this was forever</p>
</div>
```

**To add actual photos**, change it to:
```html
<div class="photo">
    <img src="path/to/your/photo.jpg" alt="description">
    <p>Your description</p>
</div>
```

Then update `styles.css`:
```css
.photo img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
```

### 4. **Write Your Personal Love Letter**
Update the `.letter-content` section with your own heartfelt message:
```html
<div class="letter-content">
    <p>My dearest [Her Name],</p>
    <p>Your personal message here...</p>
</div>
```

### 5. **Edit Your Wishes**
Personalize the four wishes in `.wishes-container`:
```html
<div class="wish-card">
    <h3>💍 Your Custom Wish Title</h3>
    <p>Your personal wish here</p>
</div>
```

## 🎨 Color Customization

### Change the Main Colors
In `styles.css`, find the `:root` section:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --light-gradient: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}
```

**Popular Color Combinations:**

Red & Pink:
```css
--primary-gradient: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
--secondary-gradient: linear-gradient(135deg, #e91e63 0%, #f06292 100%);
```

Blue & Purple:
```css
--primary-gradient: linear-gradient(135deg, #3498db 0%, #9b59b6 100%);
--secondary-gradient: linear-gradient(135deg, #2980b9 0%, #8e44ad 100%);
```

Rainbow:
```css
--primary-gradient: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
```

## 📸 Adding Photos

### Method 1: Direct Image URLs
```html
<div class="photo">
    <img src="https://example.com/photo.jpg" alt="Our Memories">
    <p>Beautiful moments together</p>
</div>
```

### Method 2: Local Files
1. Create an `images` folder in your project
2. Place photos there
3. Reference them:
```html
<img src="images/photo1.jpg" alt="description">
```

### Method 3: Unsplash (Free Stock Photos)
If you don't have personal photos:
```html
<img src="https://source.unsplash.com/400x300/?love,couple" alt="Love">
```

## 🎵 Add Background Music

Add this to your `index.html` inside the `<body>`:
```html
<audio id="bgMusic" autoplay loop muted>
    <source src="your-song.mp3" type="audio/mpeg">
</audio>
```

Then add a button in the header to unmute:
```html
<button onclick="toggleMusic()" style="
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    z-index: 1000;
">🔊 Music</button>
```

Add to `script.js`:
```javascript
function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    if (audio.muted) {
        audio.muted = false;
    } else {
        audio.muted = true;
    }
}
```

## 📊 Add More Sections

### Timeline Section
```html
<section class="section">
    <h2 class="section-title">📅 Our Timeline 📅</h2>
    <div class="timeline">
        <div class="timeline-item">
            <h3>📍 When We Met</h3>
            <p>The day that changed my life forever</p>
        </div>
        <div class="timeline-item">
            <h3>💕 First Kiss</h3>
            <p>I knew you were the one</p>
        </div>
        <div class="timeline-item">
            <h3>🎉 Today</h3>
            <p>Still falling for you every day</p>
        </div>
    </div>
</section>
```

### Interactive Quiz
```html
<section class="section">
    <h2 class="section-title">💭 Do You Know Me? 💭</h2>
    <div class="quiz">
        <div class="quiz-question">
            <p>What's my favorite color?</p>
            <button onclick="checkAnswer('answer1')">A) Blue</button>
            <button onclick="checkAnswer('answer2')">B) Purple</button>
        </div>
    </div>
</section>
```

## 🚀 Deployment Options

### GitHub Pages (Recommended - FREE)
1. Push files to GitHub
2. Go to Settings → Pages
3. Select "main" branch
4. Your site: `https://yourusername.github.io/valentines-website`

### Netlify (FREE)
1. Visit netlify.com
2. Click "New site from Git"
3. Select your GitHub repo
4. Deploy!

### Vercel (FREE)
1. Visit vercel.com
2. Import your GitHub project
3. Click Deploy
4. Get a custom domain (optional)

### Traditional Hosting
1. Upload files via FTP
2. Share the URL with your girlfriend

## 💡 Advanced Customizations

### Change Font
Add to `<head>` in index.html:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

Then in CSS:
```css
body {
    font-family: 'Playfair Display', serif;
}
```

### Add Parallax Effect
```html
<section class="section parallax" style="background-image: url('image.jpg');">
    <!-- content -->
</section>
```

CSS:
```css
.parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
```

### Create a Countdown Timer
```html
<div id="countdown"></div>
```

JavaScript:
```javascript
function updateCountdown() {
    const valentineDate = new Date('2026-02-14').getTime();
    const now = new Date().getTime();
    const distance = valentineDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById('countdown').innerHTML = 
        `${days}d ${hours}h ${minutes}m until forever with you! 💕`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
```




