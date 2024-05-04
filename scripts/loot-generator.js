let roll1;
let roll2;
let roll3;

const itemDisplay = document.getElementById('item');
const linkDisplay = document.getElementById('link');
const rollButton = document.getElementById('roll-btn');

const rollLoot = () => {
    roll1 = rollD100();
    console.log(`Roll: ${roll1}`);

    if (roll1 == 1) {
        roll2 = Math.floor(Math.random() * cursed.length);
        console.log('Category: Cursed');

        itemDisplay.innerHTML = `${cursed[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${cursed[roll2][1]}" id="link" target="_blank">View Item</a>`;
    } else if (roll1 <= 10) {
        console.log('Category: Nothing');

        itemDisplay.innerHTML = `You Didn't Find Anything`;
        linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
    } else if (roll1 <= 35) {
        roll2 = Math.floor(Math.random() * common.length);
        console.log('Category: Common');

        itemDisplay.innerHTML = `${common[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${common[roll2][1]}" id="link" target="_blank">View Item</a>`;
    } else if (roll1 <= 50) {
        console.log('Category: Gold');

        rollGold();
    } else if (roll1 <= 60) {
        roll2 = rollD4();
        console.log('Category: Health Potion');

        if (roll2 == 1) {
            itemDisplay.innerHTML = `${roll2} Potion of Healing`;
        } else {
            itemDisplay.innerHTML = `${roll2} Potions of Healing`;
        }

        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/magic-items/4708-potion-of-healing" id="link" target="_blank">View Item</a>`;
    } else if (roll1 <= 70) {
        roll2 = Math.floor(Math.random() * consumable.length);
        console.log('Category: Consumable');

        itemDisplay.innerHTML = `${consumable[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${consumable[roll2][1]}" id="link" target="_blank">View Item</a>`;
    } else if (roll1 <= 86) {
        roll2 = Math.floor(Math.random() * uncommon.length);
        console.log('Category: Uncommon');

        itemDisplay.innerHTML = `${uncommon[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${uncommon[roll2][1]}" id="link" target="_blank">View Item</a>`;
    } else if (roll1 <= 95) {
        roll2 = Math.floor(Math.random() * rare.length);
        console.log('Category: Rare');

        itemDisplay.innerHTML = `${rare[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${rare[roll2][1]}" id="link" target="_blank">View Item</a>`;
    } else if (roll1 <= 99) {
        roll2 = Math.floor(Math.random() * veryRare.length);
        console.log('Category: Very Rare');

        itemDisplay.innerHTML = `${veryRare[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${veryRare[roll2][1]}" id="link" target="_blank">View Item</a>`;
    } else {
        roll2 = Math.floor(Math.random() * legendary.length);
        console.log('Category: Legendary');

        itemDisplay.innerHTML = `${legendary[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${legendary[roll2][1]}" id="link" target="_blank">View Item</a>`;
    }
};

rollButton.addEventListener('click', () => {
    rollLoot();
});