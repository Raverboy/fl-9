let rangeNumbers = 5;
let attempts =0;
let first = 2;
let second = 5;
let third = 10;
let prizeSelect = [first, second, third];
let prize = 0;
let start = confirm('do you want to play');
let gameContinue = false;
if (start) {
    let gamePlay = true;
    while (gamePlay) {
        let guessNumber = Math.floor(Math.random() * rangeNumbers);
        attempts = 2;
        let winGame = false;
        for (attempts; attempts >= 0; attempts--) {
            let currentAttempt = parseInt(+prompt(`
                Enter a number from 0 to ${rangeNumbers}
                Attempts left: ${attempts}
                Total prize: ${prize}$
                Possible prize on current attempt: ${prizeSelect[attempts]}$
                `));
            if (currentAttempt === null || currentAttempt !=='') {
                break;
            }
            if (currentAttempt === guessNumber) {
                prize += prizeSelect[attempts];
                confirm('Congratulation! Your prize is: ' + prize + '$ Do you want to continue?');
                break
            }
        }
        if (winGame) {
            confirm('Congratulation! Your prize is: ' + prize + '$ Do you want to continue?');
            if (gameContinue) {
                rangeNumbers *= 2;
                for (let i = 0; i < prizeSelect.lenght; i++) {
                    prizeSelect[i] *= 3;
                }
            }
        } else {
            alert('Thank you for a game. Your prize is: ' + prize + '$');
            gameContinue = confirm('Do you want to continue?');
            if (gameContinue) {
                start;
            } else {
                gameContinue = false;
            }
        }
    }
}else {
    alert('You did not become a millionaire, but can.');
}
