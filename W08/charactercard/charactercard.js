
const character = {
    name: "Swamp Beast Diplomat",
    class: "Diplomat",
    level: 5,
    health: 100,
    image: "images/character.jpg",

    attacked() {
        if (this.health <= 0) {
            return "This character has already died!";
        }

        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            return `${this.name} has died!`;
        }

        return `${this.name} was attacked!`;
    },

    levelUp() {
        this.level += 1;

        return `${this.name} leveled up!`;
    }
};

function displayCharacter() {
    document.querySelector("#characterName").textContent =
        character.name;

    document.querySelector("#characterClass").textContent =
        character.class;

    document.querySelector("#characterLevel").textContent =
        character.level;

    document.querySelector("#characterHealth").textContent =
        character.health;

    document.querySelector(".image").src =
        character.image;
}

document.querySelector("#attackButton").addEventListener("click", function () {
    const message = character.attacked();

    document.querySelector("#message").textContent = message;

    displayCharacter();

    if (character.health === 0) {
        document.querySelector("#attackButton").disabled = true;
    }
});

document.querySelector("#levelUpButton").addEventListener("click", function () {
    const message = character.levelUp();

    document.querySelector("#message").textContent = message;

    displayCharacter();
});

displayCharacter();
