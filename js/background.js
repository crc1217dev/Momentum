const images = ['0.jpg', '1.jpg', '2.jpg'];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const background = document.querySelector('#background');
background.style.background = `url("resource/${chosenImage}")`;
background.style.backgroundRepeat = 'no-repeat';
background.style.backgroundSize = 'cover';
