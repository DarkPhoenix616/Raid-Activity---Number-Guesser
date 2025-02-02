let currentHealth = 100;
const maxHealth = 100;

function updateHealthBar() {
    const healthPercentage = (currentHealth / maxHealth) * 100;
    const healthBar = document.getElementById('health');

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
updateHealthBar();

// Example function to decrease health
function decreaseHealth(amount) {
    currentHealth -= amount;
    if (currentHealth < 0) {
        currentHealth = 0;
    }
    updateHealthBar();
}

function resetHealth(){
    currentHealth = 100;
    updateHealthBar();
}

// Example usage: Decrease health by 20

