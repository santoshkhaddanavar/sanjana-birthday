function openSurprise() {
    const song = document.getElementById("birthday-song");

    song.play();

    alert("Babieeee! ❤️ Your beautiful surprise is waiting for you! 🥹");
}

// BIRTHDAY COUNTDOWN

function updateCountdown() {

    const birthday = new Date(2026, 10, 26, 0, 0, 0);
    const now = new Date();

    const difference = birthday - now;

    if (difference <= 0) {

        document.querySelector(".countdown").innerHTML =
            "<h1>Happy Birthday Sanjana! 🎂❤️</h1>" +
            "<p>Today is your special day, Babieeee! 🥹</p>";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);
// SPECIAL BIRTHDAY MESSAGE

function showBirthdayMessage() {

    const message =
        "Babieeee ❤️ You are one of the most beautiful parts of my life. " +
        "I still remember 12 March 2026, at 2:56 AM, " +
        "when I proposed to you and you said YES! 🥹 " +
        "That moment will always be special to me. " +
        "Happy Birthday, my Sanjana! I love seeing you smile. " +
        "May all your dreams come true. Forever yours! 💗";

    const output = document.getElementById("typing-message");

    let i = 0;

    output.textContent = "";

    function typeLetter() {

        if (i < message.length) {

            output.textContent += message.charAt(i);

            i++;

            setTimeout(typeLetter, 55);
        }
    }

    typeLetter();
}
function finalSurprise() {
    const canvas = document.getElementById("fireworks-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    const colors = [
        "#ff1744", "#ffeb3b", "#00e5ff",
        "#e040fb", "#76ff03", "#ff9100",
        "#ffffff", "#ff69b4"
    ];

    // Celebration sound
    const audio = new (window.AudioContext || window.webkitAudioContext)();

    function playPop() {
        const oscillator = audio.createOscillator();
        const gain = audio.createGain();

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(500, audio.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(
            80, audio.currentTime + 0.2
        );

        gain.gain.setValueAtTime(0.3, audio.currentTime);
        gain.gain.exponentialRampToValueAtTime(
            0.001, audio.currentTime + 0.2
        );

        oscillator.connect(gain);
        gain.connect(audio.destination);

        oscillator.start();
        oscillator.stop(audio.currentTime + 0.2);
    }

    // Create fireworks explosion
    function explode(x, y) {
        const color = colors[Math.floor(Math.random() * colors.length)];

        for (let i = 0; i < 70; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 6 + 2;

            particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 100,
                color: color,
                size: Math.random() * 3 + 2
            });
        }

        playPop();
    }

    // Show birthday message
    document.getElementById("final-surprise-text").innerHTML =
        "🎆🎉💖 HAPPY BIRTHDAY, MY BABIEEEEE! 💖🎉🎆" +
        "<br><br>You are my favourite person. I LOVE YOU! ❤️🥹";

    // Fireworks animation
    let startTime = Date.now();

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.04;
            p.life--;

            ctx.globalAlpha = Math.max(0, p.life / 100);
            ctx.fillStyle = p.color;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            if (p.life <= 0) {
                particles.splice(index, 1);
            }
        });

        ctx.globalAlpha = 1;

        if (Date.now() - startTime < 8000) {
            if (Math.random() < 0.08) {
                explode(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height * 0.65
                );
            }

            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles = [];
        }
    }

    animate();
}
function openLetter() {
    const letter = document.getElementById("letter-content");

    if (letter.style.display === "block") {
        letter.style.display = "none";
    } else {
        letter.style.display = "block";
    }
}
let currentSlide = 1;

const totalSlides = 19;

const slideCaptions = [
    "My favourite girl ❤️",
    "Your beautiful smile 🥹",
    "My happiness 💗",
    "A beautiful memory 💕",
    "My Babieeee 🎀",
    "Forever my favourite ❤️",
    "Our little moments 🥰",
    "That lovely smile 💖",
    "My whole world 🌍",
    "Special memories together 🥹",
    "My Mangyaaaaa ❤️",
    "Endless laughter 😂",
    "You make me smile 💗",
    "My favourite person 🫶",
    "Beautiful moments 💕",
    "Always and forever ♾️",
    "My happiness 🥰",
    "Lucky to have you ❤️",
    "One girl, countless memories 💖"
];

function showSlide() {
    const image = document.getElementById("slideshow-image");
    const caption = document.getElementById("slide-caption");

    image.style.opacity = 0;

    setTimeout(() => {
        image.src = "photos/" + currentSlide + ".jpeg";
        caption.textContent = slideCaptions[currentSlide - 1];
        image.style.opacity = 1;
    }, 300);
}

function nextSlide() {
    currentSlide++;

    if (currentSlide > totalSlides) {
        currentSlide = 1;
    }

    showSlide();
}

function previousSlide() {
    currentSlide--;

    if (currentSlide < 1) {
        currentSlide = totalSlides;
    }

    showSlide();
}
setInterval(() => {
    nextSlide();
}, 3000);
function revealMessage() {
    const message = document.getElementById("special-hidden-message");

    if (message.style.display === "block") {
        message.style.display = "none";
    } else {
        message.style.display = "block";
    }
}

/* Cake opening animation */





function blowCandles() {
    document.getElementById("candles").innerHTML = "💨 💨 💨";

    document.getElementById("cake-wish").innerHTML =
        "🎉 HAPPY BIRTHDAY, MY SANJANA! 🎉" +
        "<br><br>May all your dreams come true, Babieeee! ❤️🥹";
}
function closeWelcomePopup() {
    const popup = document.getElementById("welcome-popup");

    popup.style.opacity = "0";
    popup.style.transition = "opacity 0.6s ease";

    setTimeout(() => {
        popup.style.display = "none";
    }, 600);
}
const nameText = "Hey, Sanjana! 💗";
const nameElement = document.getElementById("sanjana-name");

if (nameElement) {
    nameElement.textContent = "";
    
    let letterIndex = 0;

    function typeSanjanaName() {
        if (letterIndex < nameText.length) {
            nameElement.textContent += nameText.charAt(letterIndex);
            letterIndex++;
            setTimeout(typeSanjanaName, 150);
        }
    }

    typeSanjanaName();
}