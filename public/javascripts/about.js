let count = 0;

function play() {
    const answer = confirm('Ты меня уважаешь?');
    if (answer === true) {
        alert('Респект и уважение!');
        count = 0;
    } else if (answer !== true && count < 1) {
        count += 1;
        alert('Так дело не пойдёт. Давай я переформулирую вопрос!');
        play();
    } else {
        alert('За такое неуважение я отказываюсь с тобой работать!');
        document.write('Надо было меня уважать!');
    }
}