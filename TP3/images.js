let image = document.getElementById('image');

image.addEventListener('click', () => {
    console.log('click');
    if (image.src.includes("i1.jpg")) {
        image.src = "images/i2.jpg";
    } else if (image.src.includes("i2.jpg")) {
        image.src = "images/i3.jpg";
    } else {
        image.src = "images/i1.jpg";
    }
});

// Si tu veux changer l'image au scroll, il faut écouter `window` ou un conteneur scrollable
window.addEventListener('scroll', () => {
    console.log('scroll detected');
    let image = document.getElementById('image');

    if (image.src.includes("i1.jpg")) {
        image.src = "images/i2.jpg";
    } else if (image.src.includes("i2.jpg")) {
        image.src = "images/i3.jpg";
    } else {
        image.src = "images/i1.jpg";
    }
});

