console.log('funguju!');

//Doplňte do stránky JavaScriptový program, který zařídí, že když uživatel zmáčkne na stránce libovolnou klávesu, 

let side = 1;

window.addEventListener('keydown', function() {
    const dice = document.querySelector('.dice');
    side++;
    if (side === 7) {
        side = 1;
    }
    dice.src = `img/side${side}.svg`;
});