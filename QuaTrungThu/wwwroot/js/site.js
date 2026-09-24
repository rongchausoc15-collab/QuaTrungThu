// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const openBtn = document.getElementById("openBtn");
const loveMusic = document.getElementById("loveMusic");
const letterOverlay = document.getElementById("letterOverlay");
const envelope = document.getElementById("envelope");
const letterContent = document.getElementById("letterContent");
const closeLetter = document.getElementById("closeLetter");
    document.getElementById("closeLetter");


// Bấm "Mở lời chúc"
openBtn.addEventListener("click", function () {

    letterOverlay.classList.add("show");

});


// Bấm vào phong thư
envelope.addEventListener("click", function () {

    // Mở phong bì
    envelope.classList.add("open");
    // 🎵 Bắt đầu phát nhạc
    loveMusic.play();
    // Sau khi phong bì mở
    setTimeout(function () {

        // Hiện lá thư
        letterContent.classList.add("show");

        // Tạo hiệu ứng
        createLoveEffect();

    }, 700);
});


/* 
   TẠO HIỆU ỨNG TÌNH YÊU
 */

function createLoveEffect() {

    // Tạo khu vực hiệu ứng
    const effectContainer = document.createElement("div");
    effectContainer.className = "effect-container";
    document.body.appendChild(effectContainer);


    /* 
       TIM BAY
     */

    const hearts = ["❤️", "💕", "💗", "💖", "💘"];

    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("span");

        heart.className = "flying-heart";

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = (35 + Math.random() * 30) + "%";

        heart.style.setProperty(
            "--move-x",
            (Math.random() * 400 - 200) + "px"
        );

        heart.style.setProperty(
            "--rotate",
            (Math.random() * 360 - 180) + "deg"
        );

        heart.style.animationDelay =
            (Math.random() * 1.2) + "s";

        effectContainer.appendChild(heart);
    }


    /* 
       CÁNH HOA RƠI
     */

    const petals = ["🌸", "🌸", "🌺", "🌷"];

    for (let i = 0; i < 25; i++) {

        const petal = document.createElement("span");

        petal.className = "falling-petal";

        petal.innerHTML =
            petals[Math.floor(Math.random() * petals.length)];

        petal.style.left =
            Math.random() * 100 + "%";

        petal.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        petal.style.animationDelay =
            (Math.random() * 2) + "s";

        petal.style.setProperty(
            "--sway",
            (Math.random() * 200 - 100) + "px"
        );

        petal.style.setProperty(
            "--sway2",
            (Math.random() * 300 - 150) + "px"
        );

        effectContainer.appendChild(petal);
    }


    // Xóa hiệu ứng sau 9 giây
    setTimeout(function () {
        effectContainer.remove();
    }, 9000);
}


// Đóng thư
closeLetter.addEventListener("click", function () {

    letterContent.classList.remove("show");

    envelope.classList.remove("open");

    setTimeout(function () {

        letterOverlay.classList.remove("show");

    }, 500);

});