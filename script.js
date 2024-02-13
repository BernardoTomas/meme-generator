const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeContainer = document.getElementById('meme-image-container');
const fireBtn = document.getElementById('fire');
const waterBtn = document.getElementById('water');
const earthBtn = document.getElementById('earth');

const firePreviewBorder = () => {
  fireBtn.addEventListener('click', () => {
    memeContainer.style.border = '3px dashed rgb(255 , 0 , 0)';
  });
};

const waterPreviewBorder = () => {
  waterBtn.addEventListener('click', () => {
    memeContainer.style.border = '5px double rgb(0 , 0 , 255)';
  });
};

const earthPreviewBorder = () => {
  earthBtn.addEventListener('click', () => {
    memeContainer.style.border = '6px groove rgb(0 , 128 , 0)';
  });
};

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
firePreviewBorder();
waterPreviewBorder();
earthPreviewBorder();
