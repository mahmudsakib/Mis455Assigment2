const submitButton = document.getElementById('submit-button');
const userInput = document.getElementById('user-input');
const displayArea = document.getElementById('display-area');

submitButton.addEventListener('click', () => {
    const inputText = userInput.value;
    displayArea.textContent = `User Input: ${inputText}`;
});