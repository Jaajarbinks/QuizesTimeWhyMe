//Starting
let start = document.querySelector("#start");

//guide
let guide = document.querySelector("#guide");
let exit = document.querySelector("#exit");
let KeepGoingBtn = document.querySelector("#KeepGoing");

//quiz 
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

//questions
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

//multiple choices
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

//correct
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");

//results
let result = document.querySelector("#result");
let points = document.querySelector("#points");
let quit = document.querySelector("#quit");
let startAgain = document.querySelector("#startAgain");

//h4
let choice_que = document.querySelectorAll(".choice_que");

let index = 0;
let timer = 0;
let interval = 0;

//total points
let correct = 0;

//store value
let UserAns = undefined;

//listener
start.addEventListener("click" , ()=> {
        start.style.display = "none";
        guide.style.display = "block";
    })

//exit click

exit.addEventListener("click" , ()=> {
    start.style.display = "block";
    guide.style.display = "none";
})

//timer  
let countDown = ()=> {
    if(timer === 0) {
        clearInterval(interval);
        next_question.click();
    }else {
        timer--;
        time.innerText = timer;
    }
}

setInterval(countDown, 3000);

var jeeps = [{
    questions: "html stand for?",
    choice1: "hyperlinks and text markup language",
    choice2: "hyper text markup language",
    choice3: "hyper text making language",
    choice4: "hyper text mark language" ,
    answer: 0
},
{questions: "who is Clifard?",
choice1: "waldos partner",
choice2: "the mob boss",
choice3: "the big red dog",
choice4:"my piano teacher",
answer: 2
},
{questions: "what goes on pizza?",
choice1: "bannanas",
choice2: "octopus",
choice3: "orange juic",
choice4: "pepperoni",
answer: 3
},
{questions: "Css stands for?",
choice1: "colorful stylesheet",
choice2: "creative style sheet",
choice3: "cascading style sheet",
choice4: "style sheet",
answer: 1
},
{questions: "how do you put comments in html?",
choice1: "//this is comment",
choice2: "/*this is comment*/",
choice3: "</!---this is comment---/>",
choice4: "//this is comment//",
answer: 0    
}];

let one = () => {
    questionNo.innerText = index + 1 + ". ";
    questionText.innerText = jeeps[index].questions;
    option1.innerText = jeeps[index].choice1;
    option2.innerText = jeeps[index].choice2;
    option3.innerText = jeeps[index].choice3;
    option4.innerText = jeeps[index].choice4;

    //timer start
    timer = 30;
}

one();
// console.log(jeeps);
KeepGoingBtn.addEventListener("click" , ()=> {
    quiz.style.display = "block";
    guide.style.display = "none";

    interval = setInterval(countDown, 3000);
    one();
        choice_que.forEach(removeActive => {
        removeActive.classList.remove("active");
    })
    total_correct.innerHTML = `${correct = 0} out of ${5} questions`;

});



//says forEach wont work not sure what to put
choice_que.forEach( (choices, choiceNo) => {
    choices.addEventListener("click" , ()=> {
        choices.classList.add("active");
// console.log(choiceNo);
// console.log(jeeps[index].answer);
        if(choiceNo === jeeps[index].answer) {
            correct++;
        }
        else {
            correct += 0;
        }
        //???
        clearInterval(interval);
        
        for(i = 0; i <= 3; i++) {
            choice_que[i].classList.add("disabled");
            console.log(choice_que);
        }
        
    })
})

next_question.addEventListener("click" , ()=> {

    if(index !== jeeps.length - 1) {
        index++;
        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active");
        })
        one();

        total_correct.style.display = "block";
        total_correct.innerHTML = `${correct} out of ${5} questions`;
        
        clearInterval(interval);
        interval = setInterval(countDown , 3000);
    }
    else {
        index = 0;

        clearInterval(interval);
        quiz.style.display = "none";
        points.innerHTML = `you got ${correct} out of ${5}`;
        result.style.display = "block";
        // make array to hold the value
        
        
        localStorage.setItem('totalPoints', correct);
        let happy = localStorage.getItem('totalPoints');
        console.log(happy);
        
        
    }
    for(i = 0; i <= 3; i++) {
        choice_que[i].classList.remove("disabled");
    }
})


quit.addEventListener("click" , ()=> {
    start.style.display = "block";
    result.style.display = "none";
});

startAgain.addEventListener("click" , ()=> {
    guide.style.display = "block";
    result.style.display = "none";

    
});