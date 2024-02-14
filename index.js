// Define a player object with a name and initial chips
let player = {
    name: "Hemanthkumar BM",
    chips: 200
}

// Initialize an empty array to store cards
let cards = []

// Initialize variables for the sum of player's cards, whether they have Blackjack, and if they are alive in the game
let sum = 0
let hasBlackJack = false
let isAlive = false

// Initialize a message variable to display game messages
let message = ""

// Get reference to HTML elements by their IDs
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// Display player's name and chips in the HTML
playerEl.textContent = player.name + ": $" + player.chips

// Function to generate a random card value between 1 and 13
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// Function to start the game by initializing variables and rendering the game state
function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// Function to update the HTML elements with the current game state
function renderGame() {
    // Display the player's cards in the HTML
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    // Display the sum of player's cards in the HTML
    sumEl.textContent = "Sum: " + sum

    // Determine the game message based on the sum of cards
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // Display the game message in the HTML
    messageEl.textContent = message
}

// Function to draw a new card and update the game state
function newCard() {
    // Check if the player is alive and doesn't have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        // Render the updated game state
        renderGame()
    }
}

/*Chips are tokens that are used to place bets in blackjack, a card game where the goal is to get a higher point total than the dealer without going over 21. The chips have different colors and values, depending on the casino. The standard denominations for casino chips are:

white chips = $1
red chips = $5
green chips = $25
black chips = $100
To play blackjack, you need to exchange your cash for chips and put them in the betting circle in front of your seat. */