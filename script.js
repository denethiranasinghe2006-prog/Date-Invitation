let noClickCount = 0;
const guiltMessages = [
    "Don't do this 🥺",
    "Heart broken </3",
    "Are you really sure?",
    "Think again! 😭",
    "My heart can't take it..."
];

function moveNoButton() {
    const noBtn = document.getElementById('no-btn');
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function handleNo() {
    const guiltText = document.getElementById('guilt-text');
    guiltText.innerText = guiltMessages[noClickCount % guiltMessages.length];
    noClickCount++;
}

function handleYes() {
    const card = document.getElementById('main-card');
    card.innerHTML = `
        <div class="image-box">
            <img src="https://media4.giphy.com/media/2voh2xweu75Xo3001v/giphy.gif" alt="Happy Bears">
        </div>
        <h1>YAY!</h1>
        <p class="step-content">I'm so glad u said yes.</p>
        <button id="yes-btn" onclick="showDatePicker()">PRESS TO CONTINUE →</button>
    `;
}

function showDatePicker() {
    const card = document.getElementById('main-card');
    card.innerHTML = `
        <div class="image-box">
            <img src="https://media3.giphy.com/media/13HgwGsXF0aiGY/giphy.gif" alt="Thinking Cat">
        </div>
        <h1>PICK A DATE</h1>
        <p class="step-content">Choose the day for our cute little plan.</p>
        <br>
        <input type="date" id="date-picker"><br><br>
        <button id="yes-btn" onclick="showActivities()">CONTINUE →</button>
    `;
}

function showActivities() {
    const card = document.getElementById('main-card');
    card.innerHTML = `
        <h1>WHAT WOULD YOU LIKE TO DO?</h1>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 20px 0;">
            <button onclick="selectActivity(this)" style="font-size:8px; padding:10px;">DINNER DATE</button>
            <button onclick="selectActivity(this)" style="font-size:8px; padding:10px;">MOVIE NIGHT</button>
            <button onclick="selectActivity(this)" style="font-size:8px; padding:10px;">COFFEE & WALK</button>
            <button onclick="selectActivity(this)" style="font-size:8px; padding:10px;">PICNIC</button>
        </div>
        <button id="yes-btn" onclick="showLoveNote()">LOCK IT IN 🔒</button>
    `;
}

let chosenActivity = "Surprise Me";
function selectActivity(btn) {
    chosenActivity = btn.innerText;
    document.querySelectorAll('.button-group button, div button').forEach(b => b.style.borderColor = '#fff');
    btn.style.borderColor = '#ffff00';
}

function showLoveNote() {
    const card = document.getElementById('main-card');
    card.innerHTML = `
        <div style="background: #fff; color: #333; padding: 20px; border-radius: 8px; text-align: left; font-size: 9px; line-height: 1.8; border: 2px solid #d81b60;">
            <p style="margin-top:0; color:#d81b60;"><strong>love_note.txt</strong></p>
            <p>you're really cute no matter what. don't let anyone tell you any different, okay?</p>
            <p>you make every ordinary day feel special.</p>
            <p>today and every day, I celebrate you and us.</p>
            <p style="text-align: right; margin-bottom:0; color:#d81b60;">xoxo,<br><strong>your favorite person</strong></p>
        </div>
    `;
}
