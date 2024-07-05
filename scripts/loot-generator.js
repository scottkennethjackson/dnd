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
    } else if (roll1 <= 20) {
        console.log('Category: Gold');

        rollGold();
    } else if (roll1 <= 30) {
        roll2 = Math.floor(Math.random() * gemstone.length);
        console.log('Category: Gemstone');

        itemDisplay.innerHTML = `${gemstone[roll2]}`;
        linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
    } else if (roll1 <= 40) {
        roll2 = Math.floor(Math.random() * treasure.length);
        console.log('Category: Treasure');

        itemDisplay.innerHTML = `${treasure[roll2]}`;
        linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
    } else if (roll1 <= 50) {
        roll2 = rollD4();
        console.log('Category: Health Potion');

        if (roll2 == 1) {
            itemDisplay.innerHTML = `${roll2} Potion of Healing`;
        } else {
            itemDisplay.innerHTML = `${roll2} Potions of Healing`;
        }

        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/magic-items/4708-potion-of-healing" id="link" target="_blank">View Item</a>`;
    } else if (roll1 <= 60) {
        roll2 = Math.floor(Math.random() * consumable.length);
        console.log('Category: Consumable');

        itemDisplay.innerHTML = `${consumable[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${consumable[roll2][1]}" id="link" target="_blank">View Item</a>`;
    } else if ( roll1 == 61) {
        roll2 = Math.floor(Math.random() * cantrips.length);
        console.log('Category: Spell Scroll');

        itemDisplay.innerHTML = `Spell Scroll, Cantrip - ${cantrips[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${cantrips[roll2][1]}" id="link" target="_blank">View Spell</a>`;
    } else if ( roll1 == 62) {
        roll2 = Math.floor(Math.random() * spells1st.length);
        console.log('Category: Spell Scroll');

        itemDisplay.innerHTML = `Spell Scroll, 1st Level - ${spells1st[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${spells1st[roll2][1]}" id="link" target="_blank">View Spell</a>`;
    } else if ( roll1 == 63) {
        roll2 = Math.floor(Math.random() * spells2nd.length);
        console.log('Category: Spell Scroll');

        itemDisplay.innerHTML = `Spell Scroll, 2nd Level - ${spells2nd[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${spells2nd[roll2][1]}" id="link" target="_blank">View Spell</a>`;
    } else if ( roll1 == 64) {
        roll2 = Math.floor(Math.random() * spells3rd.length);
        console.log('Category: Spell Scroll');

        itemDisplay.innerHTML = `Spell Scroll, 3rd Level - ${spells3rd[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${spells3rd[roll2][1]}" id="link" target="_blank">View Spell</a>`;
    } else if ( roll1 == 65) {
        roll2 = Math.floor(Math.random() * spells4th.length);
        console.log('Category: Spell Scroll');

        itemDisplay.innerHTML = `Spell Scroll, 4th Level - ${spells4th[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${spells4th[roll2][1]}" id="link" target="_blank">View Spell</a>`;
    } else if ( roll1 == 66) {
        roll2 = Math.floor(Math.random() * spells5th.length);
        console.log('Category: Spell Scroll');

        itemDisplay.innerHTML = `Spell Scroll, 5th Level - ${spells5th[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${spells5th[roll2][1]}" id="link" target="_blank">View Spell</a>`;
    } else if ( roll1 == 67) {
        roll2 = Math.floor(Math.random() * spells6th.length);
        console.log('Category: Spell Scroll');

        itemDisplay.innerHTML = `Spell Scroll, 6th Level - ${spells6th[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${spells6th[roll2][1]}" id="link" target="_blank">View Spell</a>`;
    } else if ( roll1 == 68) {
        roll2 = Math.floor(Math.random() * spells7th.length);
        console.log('Category: Spell Scroll');

        itemDisplay.innerHTML = `Spell Scroll, 7th Level - ${spells7th[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${spells7th[roll2][1]}" id="link" target="_blank">View Spell</a>`;
    } else if ( roll1 == 69) {
        roll2 = Math.floor(Math.random() * spells8th.length);
        console.log('Category: Spell Scroll');

        itemDisplay.innerHTML = `Spell Scroll, 8th Level - ${spells8th[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${spells8th[roll2][1]}" id="link" target="_blank">View Spell</a>`;
    } else if ( roll1 == 70) {
        roll2 = Math.floor(Math.random() * spells9th.length);
        console.log('Category: Spell Scroll');

        itemDisplay.innerHTML = `Spell Scroll, 9th Level - ${spells9th[roll2][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${spells9th[roll2][1]}" id="link" target="_blank">View Spell</a>`;
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
    };
};

rollButton.addEventListener('click', () => {
    rollLoot();
});