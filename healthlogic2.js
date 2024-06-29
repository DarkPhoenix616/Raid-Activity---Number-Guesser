let currentHealth2 = 100;
const maxHealth2 = 100;

function updateHealthBar2() {
    const healthPercentage2 = (currentHealth2 / maxHealth2) * 100;
    const healthBar2 = document.getElementById('health2');

    healthBar2.style.height = (healthPercentage2) + '%';

    if (healthPercentage2 < 30) {
        healthBar2.style.backgroundColor = 'red'; // Low health color
    } else if (healthPercentage2 < 70) {
        healthBar2.style.backgroundColor = 'orange'; // Medium health color
    } else {
        healthBar2.style.backgroundColor = 'greenyellow'; // Full health color
    }
}

// Initial update to set the health bar
updateHealthBar2();

// Example function to decrease health
function decreaseHealth2(amount) {
    currentHealth2 -= amount;
    if (currentHealth2 < 0) {
        currentHealth2 = 0;
    }
    updateHealthBar2();
}

function resetHealth2(){
    currentHealth2 = 100;
    updateHealthBar2();
}

// Example usage: Decrease health by 20

