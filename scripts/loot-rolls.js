const rollD4 = () => {
    return Math.ceil(Math.random() * 4);
};

const rollD6 = () => {
    return Math.ceil(Math.random() * 6);
};

const rollD100 = () => {
    return Math.ceil(Math.random() * 100);
};

const rollMultiple = (numRolls, diceValue) => {
    let total = 0;

    for (let timesRolled = 0; timesRolled < numRolls; timesRolled++) {
        return total += Math.ceil(Math.random() * diceValue);
    }
};

const rollGold = () => {
    roll2 = Math.ceil(Math.random() * 17);
    
    if (roll2 <= 4) {
        roll3 = rollD100();

        if (roll3 <= 30) {
            gp = Math.ceil(rollMultiple(5, 6) / 100);
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        } else if (roll3 <= 60) {
            gp = Math.ceil(rollMultiple(4, 6) / 10);
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        } else if (roll3 <= 70) {
            gp = Math.ceil(rollMultiple(3, 6) / 2);
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        } else if (roll3 <= 95) {
            gp = rollMultiple(3, 6);
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        } else {
            gp = rollMultiple(1, 6) * 10;
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        }
    } else if (roll2 <= 10) {
        roll3 = rollD100();

        if (roll3 <= 30) {
            gp = Math.ceil(((rollMultiple(4, 6) * 100) / 100) + ((rollMultiple(1, 6) * 10) / 2));
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        } else if (roll3 <= 60) {
            gp = Math.ceil(((rollMultiple(6, 6) * 10) / 10) + (rollMultiple(2, 6) * 10));
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        } else if (roll3 <= 70) {
            gp = Math.ceil(((rollMultiple(1, 6) * 100) / 2) + (rollMultiple(2, 6) * 10));
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        } else if (roll3 <= 95) {
            gp = rollMultiple(4, 6) * 10;
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        } else {
            gp = ((rollMultiple(2, 6) * 10) + (rollMultiple(3, 6) * 10)) * 10;
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        }
    } else if (roll2 <= 16) {
        roll3 = rollD100();

        if (roll3 <= 20) {
            gp = Math.ceil(((rollMultiple(4, 6) * 100) / 10) + (rollMultiple(1, 6) * 100));
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        } else if (roll3 <= 35) {
            gp = Math.ceil(((rollMultiple(1, 6) * 100) / 2) + (rollMultiple(1, 6) * 100));
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        } else if (roll3 <= 75) {
            gp = ((rollMultiple(2, 6) * 100) + (rollMultiple(1, 6) * 10)) * 10;
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        } else {
            gp = ((rollMultiple(2, 6) * 100) + (rollMultiple(2, 6) * 10)) * 10;
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        }
    } else {
        roll3 = rollD100();

        if (roll3 <= 15) {
            gp = Math.ceil(((rollMultiple(2, 6) * 1000) / 2) + (rollMultiple(8, 6) * 100));
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        } else if (roll3 <= 55) {
            gp = ((rollMultiple(1, 6) * 1000) + (rollMultiple(1, 6) * 100)) * 10;
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        } else {
            gp = ((rollMultiple(1, 6) * 1000) + (rollMultiple(2, 6) * 100)) * 10;
            console.log(`${gp} GP`);

            itemDisplay.innerHTML = `${gp} GP`;
            linkDisplay.innerHTML = `<a href="#" id="link"></a>`;
        }
    }
};