$(document).ready(function () {
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat',
        'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let letterCounter = 0;
    let sentenceIndex = 0;
    $("#sentence").text(sentences[sentenceIndex]);
    let shiftKeyPress = false;
    let targetLetter = $("#target-letter")
    let endGameDiv = $("#end-game-text")
    endGameDiv.hide()
    $('body').keydown(function (e) {
        $('#' + calKeyCode(e.keyCode)).css('background-color', 'grey');

        if (e.keyCode == 16) {
            shiftKeyPress = true;

            $('#keyboard-upper-container').show();

            $('#keyboard-lower-container').hide();
        }
        const feedback = $("#feedback");
        if (e.key === sentences[sentenceIndex][letterCounter]) {
            letterCounter++
            targetLetter.empty()
            targetLetter.text(sentences[sentenceIndex][letterCounter])
            // $("#sentence").text(sentences[sentenceIndex]);
            feedback.empty()
            feedback.text(" \u2705").css({ 'color': 'red' });

            if(sentences[sentenceIndex][letterCounter] === ' '){
                targetLetter.empty()
                targetLetter.text('[Space]')
            }
        } else {
            console.log('wrong key');
            feedback.empty()
            feedback.text(' \u2613');
        }
        $("#yellow-block").css("margin-left", `${letterCounter * 16}px`);
        // document.getElementById("yellow-block").style.marginLeft = ((letterCounter + 1) * 16) + 'px';

        // letterCounter++;
        if (letterCounter == sentences[sentenceIndex].length) {
            sentenceIndex++;
            letterCounter = 0;
            $("#sentence").text(sentences[sentenceIndex]);

        }
    })

    $('body').keyup(function (e) {
        if (e.keyCode == 16) {
            shiftKeyPress = false;
            $('#keyboard-lower-container').show();
            $('#keyboard-upper-container').hide();
        }
        $('#' + calKeyCode(e.keyCode)).css('background-color', 'white');

        if (sentenceIndex >= sentences.length) {
            let restartBtn = $(`<input type="submit" id="restart-btn" value="Restart">`)
            endGameDiv.text('Would you like to play again??');
            endGameDiv.append(restartBtn)
            endGameDiv.show()
            $('#restart-btn').click(function (e) {
                $('#restart-btn').css('background-color', 'rgb(5, 49, 5)');
            })
        }
    })


    $('#keyboard-upper-container').hide();
    function calKeyCode(keycode) {
        if (shiftKeyPress) {
            return keycode;
        } else {
            return keycode + 32;
        }
    }
    function calScore(score) {
        let numberOfWords = 54;
        if (numberOfWords / minutes - 2 * numberOfMistakes) {
            return score;
        }
    }

})

