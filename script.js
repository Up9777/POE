// Quotes for two Indian personalities
const quotes = {
    personality1: [
        "The best way to predict the future is to create it.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "You cannot change your future, but you can change your habits, and surely your habits will change your future."
    ],
    personality2: [
        "The only way to do great work is to love what you do.",
        "In the middle of difficulty lies opportunity.",
        "The power of imagination makes us infinite."
    ]
};

// Function to show quotes for a personality
function showQuotes(personality) {
    const modal = document.getElementById('quoteModal');
    const name = document.getElementById('personalityName');
    const quotesList = document.getElementById('quotesList');

    // Set the name of the personality
    name.textContent = personality === 'personality1' ? 'Mahatma Gandhi' : 'Sardar Vallabhbhai Patel';

    // Clear any existing quotes
    quotesList.innerHTML = '';

    // Add the quotes for the selected personality
    quotes[personality].forEach(quote => {
        const li = document.createElement('li');
        li.textContent = quote;
        quotesList.appendChild(li);
    });

    // Show the modal
    modal.style.display = 'flex';
}

// Close the modal
function closeModal() {
    const modal = document.getElementById('quoteModal');
    modal.style.display = 'none';
}
