let currentHealth2 = 100;
const maxHealth = 100;

function updateHealthBar2() {
    const healthPercentage = (currentHealth2 / maxHealth) * 100;
    const healthBar = document.getElementById('health2');

    healthBar.style.height = (healthPercentage) + '%';

    if (healthPercentage < 30) {
        healthBar.style.backgroundColor = 'red'; // Low health color
    } else if (healthPercentage < 70) {
        healthBar.style.backgroundColor = 'orange'; // Medium health color
    } else {
        healthBar.style.backgroundColor = 'greenyellow'; // Full health color
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

