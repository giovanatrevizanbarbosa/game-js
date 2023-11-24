// criacao de arquivo separado para os eventListeners das teclas

// evento para quando tecla é apertada ('keydown')
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            if (player.velocity.y === 0){
                player.velocity.y = -25;
            }
            break;
        case 'a':
            keys.a.pressed = true;
            break;
        case 'd':
            keys.d.pressed = true;
            break;
        
    }
});

// evento para quando tecla é solta ('keyup')
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            keys.a.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
        
    }
});