const stomachHitbox = document.getElementById('stomach-hitbox');
const dorayakiBtn = document.getElementById('dorayakiBtn');
const doraemonImg = document.getElementById('doraemon-img');
const heartContainer = document.getElementById('heart-container');

// Función para crear un corazón flotante
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️'; // Corazón
    
    // Posición aleatoria alrededor de la imagen de Doraemon
    const randomLeft = Math.floor(Math.random() * 200) + 50; // Entre 50px y 250px de ancho
    const randomTop = Math.floor(Math.random() * 100) + 50; // Entre 50px y 150px de altura
    heart.style.left = `${randomLeft}px`;
    heart.style.top = `${randomTop}px`; 
    
    heartContainer.appendChild(heart);
    
    // Eliminar el corazón del DOM después de 1.5 segundos (lo que dura la animación)
    setTimeout(() => {
        heart.remove();
    }, 1500);
}

// Función que aplica la reacción feliz (corazones y animación)
function showHappyReaction() {
    // 1. Activar la animación de escala de la imagen (un efecto de risita)
    doraemonImg.classList.add('active-reaction');
    
    // Quitar la clase de animación después de que termine (0.4s)
    setTimeout(() => {
        doraemonImg.classList.remove('active-reaction');
    }, 400);

    // 2. Crear una lluvia de corazones
    createHeart();
    setTimeout(createHeart, 200); 
    setTimeout(createHeart, 400); 
    setTimeout(createHeart, 600); 
}

// Escuchar clics en el estómago
stomachHitbox.addEventListener('click', () => {
    showHappyReaction();
});

// Escuchar clics en el botón de Dorayaki
dorayakiBtn.addEventListener('click', () => {
    showHappyReaction();
});