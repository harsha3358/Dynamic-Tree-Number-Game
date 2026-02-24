async function startGame() {
    const res = await fetch("/start");
    const data = await res.json();

    document.getElementById("gameArea").style.display = "block";
    document.getElementById("question").innerText = data.question;
}

async function sendAnswer(answer) {
    const res = await fetch(`/answer/${answer}`, { method: "POST" });
    const data = await res.json();

    if (data.result) {
        document.getElementById("question").innerText =
            "🔥 Your number is " + data.result + " 😎";
    } else {
        document.getElementById("question").innerText = data.question;
    }
}