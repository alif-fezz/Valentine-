    const noBtn = document.getElementById("noBtn");
    const area = document.getElementById("buttonArea");
    const yesBtn = document.getElementById("yesBtn");
    const question = document.getElementById("question");
    const message = document.getElementById("message");

    function moveNoButton() {
        const areaWidth = area.offsetWidth;
        const areaHeight = area.offsetHeight;

        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;

        const x = Math.random() * (areaWidth - btnWidth);
        const y = Math.random() * (areaHeight - btnHeight);

        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    }

    noBtn.addEventListener("mouseenter", moveNoButton);
    noBtn.addEventListener("touchstart", function (e) {
        e.preventDefault();
        moveNoButton();
    });

    yesBtn.addEventListener("click", function () {
        question.style.display = "none";
        area.style.display = "none";
        message.style.display = "block";
    });