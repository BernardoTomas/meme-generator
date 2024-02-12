const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

const getMemeText = () => {
  textInput.addEventListener('keyup', () => {
    memeText.innerText = textInput.value;
  });
};

getMemeText();
