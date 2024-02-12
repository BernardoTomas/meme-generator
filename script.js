const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');

const loadMemePreview = () => {
  memeInsert.addEventListener('change', (event) => {
    const memeImage = document.getElementById('meme-image');
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = () => {
      URL.revokeObjectURL(memeImage.src);
    };
  });
};

const getMemeText = () => {
  textInput.addEventListener('keyup', () => {
    memeText.innerText = textInput.value;
  });
};

getMemeText();
loadMemePreview();
