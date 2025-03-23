// Play background music on first interaction
document.addEventListener("click", () => {
    let audio = document.getElementById("bg-music");
    if (audio.paused) {
        audio.play();
    }
});

// Forgive Button - Shows message, hearts, and confetti
document.getElementById("forgive-btn").addEventListener("click", () => {
    document.getElementById("message").classList.remove("hidden");
    createHearts();
    confettiEffect();
    playSound("heart-pop.mp3");
});

// Love Letter - Smooth fade-in effect
document.getElementById("love-letter-btn").addEventListener("click", () => {
    let loveLetter = document.getElementById("love-letter");
    loveLetter.classList.toggle("show");
    playSound("paper-open.mp3"); // Cute paper sound effect
});

// Random Love Note Generator
const messages = [
    "You're the best thing that ever happened to me! 💖",
    "I love you more than words can say! 🥰",
    "You make my heart skip a beat every day! 💘",
    "You're my sunshine on a rainy day! ☀️",
    "Forever grateful to have you in my life! 🌸"
];

document.getElementById("message-btn").addEventListener("click", () => {
    let randomMsg = messages[Math.floor(Math.random() * messages.length)];
    let messageDiv = document.getElementById("random-message");
    messageDiv.innerHTML = randomMsg;
    messageDiv.classList.remove("hidden");
    playSound("ding.mp3"); // Soft notification sound
});

// Love Meter - Increases love with cute names & heart sound
const loveValues = [
    "100 ❤️ (Baby Love)",
    "1,000 ❤️ (Kuchu Puchu Level)",
    "10,000 ❤️ (Ultimate Wifey Mode)",
    "INFINITY ❤️ (Subhii, I Love You ENDLESSLY!)"
];
let loveIndex = 0;

document.getElementById("love-meter-btn").addEventListener("click", () => {
    let result = document.getElementById("love-meter-result");

    if (loveIndex < loveValues.length) {
        result.innerHTML = loveValues[loveIndex];
        loveIndex++;
    } else {
        result.innerHTML = "Infinity ❤️ (My Love for You Has No Limit!)";
    }

    result.classList.remove("hidden");
    playSound("love-meter.mp3"); // Cute pop sound
});

// Floating Hearts Effect
function createHearts() {
    for (let i = 0; i < 20; i++) { // More hearts!
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        document.querySelector(".hearts-container").appendChild(heart);
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        setTimeout(() => heart.remove(), 5000);
    }
}

// Confetti Effect - Now with falling animation!
function confettiEffect() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.innerHTML = "🎉";
        confetti.style.position = "absolute";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10vh"; // Starts above screen
        confetti.style.animation = "fall 2s ease-out";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Sound Effects - Plays different sounds for interactions
function playSound(soundFile) {
    let sound = new Audio(soundFile);
    sound.volume = 0.5;
    sound.play();
}
