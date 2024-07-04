let roll;
let selection;

const monsterDisplay = document.getElementById('monster');
const linkDisplay = document.getElementById('link');
const dropdown = document.getElementById('monsters');
const rollButton = document.getElementById('roll-btn');

const rollMonster = (array) => {
    roll = Math.floor(Math.random() * array.length);

    monsterDisplay.innerHTML = `${array[roll][0]}`;
    linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${array[roll][1]}" id="link" target="_blank">View Statblock</a>`;
};

const getSelection = () => {
    selection = dropdown.value;

    if (selection == 'aberation') {
        rollMonster(aberration)
    } else if (selection == 'celestial') {
        rollMonster(celestial)
    } else if (selection == 'construct') {
        rollMonster(construct)
    } else if (selection == 'dragon') {
        rollMonster(dragon)
    } else if (selection == 'dragonWyrmling') {
        rollMonster(dragonWyrmling)
    } else if (selection == 'dragonYoung') {
        rollMonster(dragonYoung)
    } else if (selection == 'dragonAdult') {
        rollMonster(dragonAdult)
    } else if (selection == 'dragonAncient') {
        rollMonster(dragonAncient)
    } else if (selection == 'elemental') {
        rollMonster(elemental)
    } else if (selection == 'fey') {
        rollMonster(fey)
    } else if (selection == 'fiend') {
        rollMonster(fiend)
    } else if (selection == 'giant') {
        rollMonster(giant)
    } else if (selection == 'humanoid') {
        rollMonster(humanoid)
    } else if (selection == 'monstrosity') {
        rollMonster(monstrosity)
    } else if (selection == 'ooze') {
        rollMonster(ooze)
    } else if (selection == 'plant') {
        rollMonster(plant)
    } else if (selection == 'undead') {
        rollMonster(undead)
    } else {
        rollMonster(all);
    }
};

rollButton.addEventListener('click', () => {
    getSelection();
});