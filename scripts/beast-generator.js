let roll;

const beastDisplay = document.getElementById('beast');
const linkDisplay = document.getElementById('link');
const flyingRadio = document.getElementById('flying');
const swimmingRadio = document.getElementById('swimming');
const walkingRadio = document.getElementById('walking');
const rollButton = document.getElementById('roll-btn');

const rollBeast = () => {
    if (flyingRadio.checked) {
        roll = Math.floor(Math.random() * flying.length);

        beastDisplay.innerHTML = `${flying[roll][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${flying[roll][1]}" id="link" target="_blank">View Statblock</a>`;
    } else if (swimmingRadio.checked) {
        roll = Math.floor(Math.random() * swimming.length);

        beastDisplay.innerHTML = `${swimming[roll][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${swimming[roll][1]}" id="link" target="_blank">View Statblock</a>`;
    } else {
        roll = Math.floor(Math.random() * walking.length);

        beastDisplay.innerHTML = `${walking[roll][0]}`;
        linkDisplay.innerHTML = `<a href="https://www.dndbeyond.com/${walking[roll][1]}" id="link" target="_blank">View Statblock</a>`;
    }
};

rollButton.addEventListener('click', () => {
    rollBeast();
});