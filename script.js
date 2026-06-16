const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* Floating Hearts */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💖", "💕", "💗", "💘"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 20 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 300);

/* Runaway No Button */

noBtn.addEventListener("mouseover", () => {

    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

/* Yes Click */

yesBtn.addEventListener("click", () => {

    confetti({
        particleCount: 400,
        spread: 180,
        origin: { y: 0.6 }
    });

    setTimeout(() => {

        document.body.innerHTML = `
        <div class="success-screen">

            <h1>YAYYY ❤️</h1>

            <h2>
                Thank You Yogss 💕
            </h2>

            <h3>
                Forever Yours,
                Prasanna ❤️
            </h3>

        </div>
        `;

    }, 1000);
});