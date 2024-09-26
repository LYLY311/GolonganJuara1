// Senarai kad rawak dengan warna dan golongan kata
const cards = [
    { word: 'rumah', class: 'kata nama', color: 'red' },
    { word: 'berlari', class: 'kata kerja', color: 'blue' },
    { word: 'tinggi', class: 'kata adjektif', color: 'green' },
    { word: 'dan', class: 'kata tugas', color: 'yellow' },
    // Tambah lebih banyak kad di sini
];

let playerHand = [];
let currentCard = {};

// Fungsi untuk menarik kad secara rawak
function drawCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
}

// Memaparkan kad terkini di tengah
function displayCurrentCard() {
    const wordElement = document.getElementById('current-word');
    wordElement.textContent = `${currentCard.word} (${currentCard.class})`;
}

// Memaparkan kad pemain
function displayPlayerCards() {
    const cardsElement = document.getElementById('cards');
    cardsElement.innerHTML = ''; // Kosongkan kad lama
    playerHand.forEach((card, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.textContent = `${card.word} (${card.class})`;
        cardDiv.style.backgroundColor = card.color;
        cardDiv.onclick = () => playCard(index);
        cardsElement.appendChild(cardDiv);
    });
}

// Fungsi untuk bermain kad
function playCard(index) {
    const selectedCard = playerHand[index];
    if (selectedCard.class === currentCard.class || selectedCard.color === currentCard.color) {
        currentCard = selectedCard;
        playerHand.splice(index, 1); // Buang kad yang dimainkan
        displayCurrentCard();
        displayPlayerCards();
        checkWinner();
    } else {
        document.getElementById('status').textContent = 'Kad tidak sepadan!';
    }
}

// Periksa jika pemain menang
function checkWinner() {
    if (playerHand.length === 0) {
        document.getElementById('status').textContent = 'Tahniah, anda menang!';
    }
}

// Tarik kad pada permulaan permainan
document.getElementById('draw-card').onclick = () => {
    const newCard = drawCard();
    playerHand.push(newCard);
    displayPlayerCards();
};

// Mulakan permainan
function startGame() {
    currentCard = drawCard();
    displayCurrentCard();
    playerHand = [drawCard(), drawCard(), drawCard(), drawCard(), drawCard()];
    displayPlayerCards();
}

startGame();
