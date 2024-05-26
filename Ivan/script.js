function punches(){
    document.getElementById("punch").innerHTML = "Punches are the most commonly used weapons in Muay Thai. The main punch techniques include the straight lead punch (jab), straight rear punch (cross), uppercut, hook, overhead punch, and spinning back fist. Punching power is generated with speed from the feet up, through shifting of weight, and rotation of the hip and shoulders.";
}

function elbow(){
    document.getElementById("elbow").innerHTML = "The elbow is one of the hardest parts of the human body, making them an effective weapon in Muay Thai. There are many different ways to throw an elbow: sideways to the head, from the top down, reverse to the chin, flying elbow from the top down and spinning back elbow. When executed properly, elbow strikes can knock out an opponent or inflict deep cuts that can end fights via stoppages.";
}

function kick(){
    document.getElementById("kick").innerHTML = "The Muay Thai kick is a devastating weapon delivered via the shins. The kick is delivered from the outside, with the arm swung backwards along with the inside rotation of the hip to generate force. Kicks can be thrown to the opponent’s legs (known as low kick or leg kick), body, arms, the back or the head. ";
}

function knee(){
    document.getElementById("knee").innerHTML = "Knees in Muay Thai are typically close range weapons used during clinching. They are often thrown to the body, especially the ribcage but also on thighs and directly to the head. Jumping knee strikes can also be devastating if landed. When used effectively like other weapons of Muay Thai, knees can end fights by knockouts.";
}

function teep(){
    document.getElementById("teep").innerHTML = "The push kick, referred to as “teep” in Muay Thai, can be used as both defensively or offensively. It can be used as a technique to keep opponents at a distance and disrupting an advance or as a strike if delivered with power and accuracy.";
}

function clinch(){
    document.getElementById("clinch").innerHTML = "Clinching in Muay Thai is a grappling technique usually used in combination with knee and elbow strikes. Clinching is a close range fighting style that requires many years of practice to master. Takedowns, or tripping the opponent to the ground are also allowed and performed during clinching. When used to the right effect, clinching can help fighters outscore their opponents and win fights.";
}

const quizData = [
    {
        question: 'What is the most commonly used weapon in Muay Thai?',
        a: 'Punches',
        b: 'Elbows',
        c: 'Kicks',
        d: 'Knees',
        correct: 'a'
    },
    {
        question: 'What is the hardest part of the human body?',
        a: 'Fist',
        b: 'Knee',
        c: 'Elbow',
        d: 'Shin',
        correct: 'c'
    },
    {
        question: 'What is the most devastating weapon in Muay Thai?',
        a: 'Punches',
        b: 'Elbows',
        c: 'Kicks',
        d: 'Knees',
        correct: 'd'
    },
    {
        question: 'What is the push kick called in Muay Thai?',
        a: 'Teep',
        b: 'Elbow',
        c: 'Knee',
        d: 'Punch',
        correct: 'a'
    },
    {
        question: 'What is the grappling technique used in Muay Thai?',
        a: 'Punch',
        b: 'Elbow',
        c: 'Knee',
        d: 'Clinch',
        correct: 'd'
    },
    {
        question: 'Where is developed Karate?',
        a: 'Ryukyu Kingdom',
        b: 'Thailand',
        c: 'Korea',
        d: 'China',
        correct: 'a'
    },
    {
        questin: 'In how many countries is spread Kyokushin Karate?',
        a: '100',
        b: '120',
        c: '150',
        d: '160',
        correct: 'b'
    },
    {
        question: 'What is the most important thing in Karate?',
        a: 'Speed',
        b: 'Power',
        c: 'Technique',
        d: 'Spirit',
        correct: 'd'
    },
    {
        question: 'What are the basic techniques in Karate?',
        a: 'Punches, kicks, blocks, stances',
        b: 'Punches, kicks, throws, locks',
        c: 'Punches, kicks, throws, sweeps',
        d: 'Punches, kicks, blocks, sweeps',
        correct: 'a'
    },
    {
        question: 'What are the benefits of Karate?',
        a: 'Self-defense, discipline, respect',
        b: 'Self-defense, discipline, respect, health',
        c: 'Self-defense, discipline, respect, health, confidence, focus',
        d: 'Self-defense, discipline, respect, health, confidence',
        correct: 'c'
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})