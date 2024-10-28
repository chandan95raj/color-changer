const colorBox = document.getElementById('colorBox');
const changeColorBtn = document.getElementById('changeColorBtn');

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
};

const changeColor = () => {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
    colorBox.textContent = newColor;
};


changeColorBtn.addEventListener('click', changeColor);