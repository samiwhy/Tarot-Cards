// ==========================================
// 1. YOUR DECK (ALL 78 CARDS)
// ==========================================

let myDeck = [
    // --- MAJOR ARCANA ---
    { name: "0 - The Fool", explanation: "New beginnings, innocence, spontaneity, a free spirit.", image: "images/The Fool.webp" },
    { name: "I - The Magician", explanation: "Manifestation, resourcefulness, power, inspired action.", image: "images/The Magician.webp" },
    { name: "II - The High Priestess", explanation: "Intuition, sacred knowledge, divine feminine, the subconscious mind.", image: "images/The High Priestess.webp" },
    { name: "III - The Empress", explanation: "Femininity, beauty, nature, nurturing, abundance.", image: "images/The Empress.webp" },
    { name: "IV - The Emperor", explanation: "Authority, establishment, structure, a father figure.", image: "images/The Emperor.webp" },
    { name: "V - The Hierophant", explanation: "Spiritual wisdom, religious beliefs, conformity, tradition.", image: "images/The Hierophant.webp" },
    { name: "VI - The Lovers", explanation: "Love, harmony, relationships, values alignment, choices.", image: "images/The Lovers.webp" },
    { name: "VII - The Chariot", explanation: "Control, willpower, success, action, determination.", image: "images/The Chariot.webp" },
    { name: "VIII - Strength", explanation: "Strength, courage, persuasion, influence, compassion.", image: "images/Strength.webp" },
    { name: "IX - The Hermit", explanation: "Soul-searching, introspection, being alone, inner guidance.", image: "images/The Hermit.webp" },
    { name: "X - Wheel of Fortune", explanation: "Good luck, karma, life cycles, destiny, a turning point.", image: "images/Wheel of Fortune.webp" },
    { name: "XI - Justice", explanation: "Justice, fairness, truth, cause and effect, law.", image: "images/Justice.webp" },
    { name: "XII - The Hanged Man", explanation: "Pause, surrender, letting go, new perspectives.", image: "images/The Hanged Man.webp" },
    { name: "XIII - Death", explanation: "Endings, change, transformation, transition.", image: "images/Death.webp" },
    { name: "XIV - Temperance", explanation: "Balance, moderation, patience, purpose.", image: "images/Temperance.webp" },
    { name: "XV - The Devil", explanation: "Shadow self, attachment, addiction, restriction, sexuality.", image: "images/The Devil.webp" },
    { name: "XVI - The Tower", explanation: "Sudden change, upheaval, chaos, revelation, awakening.", image: "images/The Tower.webp" },
    { name: "XVII - The Star", explanation: "Hope, faith, purpose, renewal, spirituality.", image: "images/The Star.webp" },
    { name: "XVIII - The Moon", explanation: "Illusion, fear, anxiety, subconscious, intuition.", image: "images/The Moon.webp" },
    { name: "XIX - The Sun", explanation: "Positivity, fun, warmth, success, vitality.", image: "images/The Sun.webp" },
    { name: "XX - Judgement", explanation: "Judgement, rebirth, inner calling, absolution.", image: "images/Judgement.webp" },
    { name: "XXI - The World", explanation: "Completion, integration, accomplishment, travel.", image: "images/The World.webp" },

    // --- SUIT OF WANDS ---
    { name: "Ace of Wands", explanation: "Inspiration, new opportunities, growth, potential.", image: "images/Ace of Wands.webp" },
    { name: "Two of Wands", explanation: "Future planning, progress, decisions, discovery.", image: "images/Two of Wands.webp" },
    { name: "Three of Wands", explanation: "Looking ahead, expansion, rapid growth.", image: "images/Three of Wands.webp" },
    { name: "Four of Wands", explanation: "Celebration, joy, harmony, relaxation, homecoming.", image: "images/Four of Wands.webp" },
    { name: "Five of Wands", explanation: "Conflict, disagreements, competition, tension.", image: "images/Five of Wands.webp" },
    { name: "Six of Wands", explanation: "Success, public recognition, progress, self-confidence.", image: "images/Six of Wands.webp" },
    { name: "Seven of Wands", explanation: "Challenge, competition, protection, perseverance.", image: "images/Seven of Wands.webp" },
    { name: "Eight of Wands", explanation: "Movement, fast paced change, action, alignment.", image: "images/Eight of Wands.webp" },
    { name: "Nine of Wands", explanation: "Resilience, courage, persistence, test of faith.", image: "images/Nine of Wands.webp" },
    { name: "Ten of Wands", explanation: "Burden, extra responsibility, hard work, completion.", image: "images/Ten of Wands.webp" },
    { name: "Page of Wands", explanation: "Inspiration, ideas, discovery, limitless potential.", image: "images/Page of Wands.webp" },
    { name: "Knight of Wands", explanation: "Energy, passion, inspired action, adventure, impulsiveness.", image: "images/Knight of Wands.webp" },
    { name: "Queen of Wands", explanation: "Courage, confidence, independence, social butterfly, determination.", image: "images/Queen of Wands.webp" },
    { name: "King of Wands", explanation: "Natural-born leader, vision, entrepreneur, honor.", image: "images/King of Wands.webp" },

    // --- SUIT OF CUPS ---
    { name: "Ace of Cups", explanation: "Love, new relationships, compassion, creativity.", image: "images/Ace of Cups.webp" },
    { name: "Two of Cups", explanation: "Unified love, partnership, mutual attraction.", image: "images/Two of Cups.webp" },
    { name: "Three of Cups", explanation: "Celebration, friendship, creativity, collaborations.", image: "images/Three of Cups.webp" },
    { name: "Four of Cups", explanation: "Meditation, contemplation, apathy, reevaluation.", image: "images/Four of Cups.webp" },
    { name: "Five of Cups", explanation: "Regret, failure, disappointment, pessimism.", image: "images/Five of Cups.webp" },
    { name: "Six of Cups", explanation: "Revisiting the past, childhood memories, innocence, joy.", image: "images/Six of Cups.webp" },
    { name: "Seven of Cups", explanation: "Opportunities, choices, wishful thinking, illusion.", image: "images/Seven of Cups.webp" },
    { name: "Eight of Cups", explanation: "Disappointment, abandonment, withdrawal, escapism.", image: "images/Eight of Cups.webp" },
    { name: "Nine of Cups", explanation: "Contentment, satisfaction, gratitude, wish come true.", image: "images/Nine of Cups.webp" },
    { name: "Ten of Cups", explanation: "Divine love, blissful relationships, harmony, alignment.", image: "images/Ten of Cups.webp" },
    { name: "Page of Cups", explanation: "Creative opportunities, intuitive messages, curiosity, possibility.", image: "images/Page of Cups.webp" },
    { name: "Knight of Cups", explanation: "Creativity, romance, charm, imagination, beauty.", image: "images/Knight of Cups.webp" },
    { name: "Queen of Cups", explanation: "Compassionate, caring, emotionally stable, intuitive, in flow.", image: "images/Queen of Cups.webp" },
    { name: "King of Cups", explanation: "Emotionally balanced, compassionate, diplomatic.", image: "images/King of Cups.webp" },

    // --- SUIT OF SWORDS ---
    { name: "Ace of Swords", explanation: "Breakthroughs, new ideas, mental clarity, success.", image: "images/Ace of Swords.webp" },
    { name: "Two of Swords", explanation: "Difficult decisions, weighing up options, an impasse, avoidance.", image: "images/Two of Swords.webp" },
    { name: "Three of Swords", explanation: "Heartbreak, emotional pain, sorrow, grief, hurt.", image: "images/Three of Swords.webp" },
    { name: "Four of Swords", explanation: "Rest, relaxation, meditation, contemplation, recuperation.", image: "images/Four of Swords.webp" },
    { name: "Five of Swords", explanation: "Conflict, disagreements, competition, defeat, winning at all costs.", image: "images/Five of Swords.webp" },
    { name: "Six of Swords", explanation: "Transition, change, rite of passage, releasing baggage.", image: "images/Six of Swords.webp" },
    { name: "Seven of Swords", explanation: "Betrayal, deception, getting away with something, acting strategically.", image: "images/Seven of Swords.webp" },
    { name: "Eight of Swords", explanation: "Negative thoughts, self-imposed restriction, imprisonment, victim mentality.", image: "images/Eight of Swords.webp" },
    { name: "Nine of Swords", explanation: "Anxiety, worry, fear, depression, nightmares.", image: "images/Nine of Swords.webp" },
    { name: "Ten of Swords", explanation: "Painful endings, deep wounds, betrayal, loss, crisis.", image: "images/Ten of Swords.webp" },
    { name: "Page of Swords", explanation: "New ideas, curiosity, thirst for knowledge, new ways of communicating.", image: "images/Page of Swords.webp" },
    { name: "Knight of Swords", explanation: "Ambitious, action-oriented, driven to succeed, fast-thinking.", image: "images/Knight of Swords.webp" },
    { name: "Queen of Swords", explanation: "Independent, unbiased judgement, clear boundaries, direct communication.", image: "images/Queen of Swords.webp" },
    { name: "King of Swords", explanation: "Mental clarity, intellectual power, authority, truth.", image: "images/King of Swords.webp" },

    // --- SUIT OF PENTACLES ---
    { name: "Ace of Pentacles", explanation: "A new financial or career opportunity, manifestation, abundance.", image: "images/Ace of Pentacles.webp" },
    { name: "Two of Pentacles", explanation: "Multiple priorities, time management, prioritization, adaptability.", image: "images/Two of Pentacle.webp" },
    { name: "Three of Pentacles", explanation: "Teamwork, collaboration, learning, implementation.", image: "images/Three of Pentacle.webp" },
    { name: "Four of Pentacles", explanation: "Saving money, security, conservatism, scarcity, control.", image: "images/Four of Pentacle.webp" },
    { name: "Five of Pentacles", explanation: "Financial loss, poverty, lack mindset, isolation, worry.", image: "images/Five of Pentacles.webp" },
    { name: "Six of Pentacles", explanation: "Giving, receiving, sharing wealth, generosity, charity.", image: "images/Six of Pentacles.webp" },
    { name: "Seven of Pentacles", explanation: "Long-term view, sustainable results, perseverance, investment.", image: "images/Seven of Pentacles.webp" },
    { name: "Eight of Pentacles", explanation: "Apprenticeship, repetitive tasks, mastery, skill development.", image: "images/Eight of Pentacles.webp" },
    { name: "Nine of Pentacles", explanation: "Abundance, luxury, self-sufficiency, financial independence.", image: "images/Nine of Pentacles.webp" },
    { name: "Ten of Pentacles", explanation: "Wealth, financial security, family, long-term success, contribution.", image: "images/Ten of Pentacles.webp" },
    { name: "Page of Pentacles", explanation: "Manifestation, financial opportunity, skill development.", image: "images/Page of Pentacles.webp" },
    { name: "Knight of Pentacles", explanation: "Hard work, productivity, routine, conservatism.", image: "images/Knight of Pentacles.webp" },
    { name: "Queen of Pentacles", explanation: "Nurturing, practical, providing financially, a working parent.", image: "images/Queen of Pentacles.webp" },
    { name: "King of Pentacles", explanation: "Wealth, business, leadership, security, discipline, abundance.", image: "images/King of Pentacles.webp" }
];

// ==========================================
// 2. THE APP LOGIC
// ==========================================

let currentDeck = [...myDeck]; 

const drawBtn = document.getElementById("draw-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const cardTitle = document.getElementById("card-title");
const cardExplanation = document.getElementById("card-explanation");
const tarotCard = document.getElementById("tarot-card");
const cardImage = document.getElementById("card-image");

function shuffleDeck() {
    currentDeck.sort(() => Math.random() - 0.5);
    
    cardTitle.innerText = "Deck Shuffled!";
    cardExplanation.innerText = `There are ${currentDeck.length} cards ready to be drawn.`;
    cardImage.style.display = "none"; 
}

function drawCard() {
    if (currentDeck.length === 0) {
        cardTitle.innerText = "Deck Empty";
        cardExplanation.innerText = "Please shuffle to play again!";
        cardImage.style.display = "none";
        return; 
    }

    const drawnCard = currentDeck.pop(); 
    cardTitle.innerText = drawnCard.name;
    cardExplanation.innerText = drawnCard.explanation;
    
    // Check if the image link was replaced with a real link
    if (drawnCard.image && drawnCard.image !== "PASTE_YOUR_IMAGE_LINK_HERE") {
        cardImage.src = drawnCard.image;
        cardImage.style.display = "block";
    } else {
        cardImage.style.display = "none"; 
    }
}

// Event Listeners
shuffleBtn.addEventListener("click", () => {
    tarotCard.classList.remove("is-flipped"); 
    setTimeout(shuffleDeck, 300);
});

drawBtn.addEventListener("click", () => {
    tarotCard.classList.remove("is-flipped");
    
    setTimeout(() => {
        drawCard(); 
        tarotCard.classList.add("is-flipped"); 
    }, 300); 
});

tarotCard.addEventListener("click", () => {
    tarotCard.classList.toggle("is-flipped");
});
