const belly = document.getElementById('belly');
const dorayakiBtn = document.getElementById('dorayakiBtn');
const mouth = document.getElementById('mouth');
const doraemonContainer = document.getElementById('doraemon');

// Función para crear un corazón flotante
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️'; // Puedes cambiarlo por '✨' si prefieres destellos
    
    // Posición aleatoria cerca de la boca/barriga
    const randomLeft = Math.floor(Math.random() * 80) + 40; // Entre 40px y 120px
    heart.style.left = `${randomLeft}px`;
    heart.style.top = '140px'; 
    
    doraemonContainer.appendChild(heart);
    
    // Eliminar el corazón del DOM después de 1.5 segundos (lo que dura la animación)
    setTimeout(() => {
        heart.remove();
    }, 1500);
}

function makeDoraemonSmile() {
    mouth.classList.add('smile');
    
    // Crear un par de corazones
    createHeart();
    setTimeout(createHeart, 200); // El segundo sale con un ligero retraso
    setTimeout(createHeart, 400); // El tercero un poco después
    
    setTimeout(() => {
        mouth.classList.remove('smile');
    }, 2000);
}

belly.addEventListener('click', () => {
    makeDoraemonSmile();
});

dorayakiBtn.addEventListener('click', () => {
    makeDoraemonSmile();
});
