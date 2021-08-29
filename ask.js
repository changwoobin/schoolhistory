var i = 0;
const onClick = () => {
    if (i < 4)
    {
        document.querySelector(`.asking-him${i}`).classList.remove('hidden');
        document.querySelector(`.asking-him${i}`).scrollIntoView({behavior: "auto", block: "start", inline: "nearest"});
        document.querySelector(".inner").scrollTop = document.body.scrollHeight;
        setTimeout(delClass(i), 1000)
        i += 1;   
    }
    else
    {
        alert("더 이상의 질문은 하지 못합니다.");
    }
}
function delClass(number) {
    var name = number;
    return function() {
        const hisAnswer = document.querySelector(`.float-container${name + 1}`)
        hisAnswer.classList.remove('hidden');
        hisAnswer.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
}