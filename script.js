const stomachHitbox = document.getElementById('stomach-hitbox');
const dorayakiBtn = document.getElementById('dorayakiBtn');
const doraemonImg = document.getElementById('doraemon-img');
const heartContainer = document.getElementById('heart-container');

// Capturar los elementos de audio del HTML
const stomachAudios = [
    document.getElementById('audio-estomago-1'),
    document.getElementById('audio-estomago-2'),
    document.getElementById('audio-estomago-3'),
    document.getElementById('audio-estomago-4')
];
const btnAudio = document.getElementById('audio-boton');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️'; 
    
    const randomLeft = Math.floor(Math.random() * 200) + 50; 
    const randomTop = Math.floor(Math.random() * 100) + 50; 
    heart.style.left = `${randomLeft}px`;
    heart.style.top = `${randomTop}px`; 
    
    heartContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 1500);
}

function showHappyReaction() {
    doraemonImg.classList.add('active-reaction');
    
    setTimeout(() => {
        doraemonImg.classList.remove('active-reaction');
    }, 400);

    createHeart();
    setTimeout(createHeart, 200); 
    setTimeout(createHeart, 400); 
    setTimeout(createHeart, 600); 
}

// Escuchar clics en el estómago
stomachHitbox.addEventListener('click', () => {
    showHappyReaction();
    
    // Elegir un audio al azar (del 0 al 3)
    const randomAudio = stomachAudios[Math.floor(Math.random() * stomachAudios.length)];
    randomAudio.currentTime = 0; // Reinicia el audio por si haces clic muy rápido
    randomAudio.play();
});

// Escuchar clics en el botón de Dorayaki
dorayakiBtn.addEventListener('click', () => {
    showHappyReaction();
    
    // Reproducir el audio específico del botón
    btnAudio.currentTime = 0; 
    btnAudio.play();
});