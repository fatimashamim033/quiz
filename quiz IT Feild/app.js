


var questions = [
    {
        question: 'Q.1: What does JS stand for?',
        option1: 'JavaScript',
        option2: 'Job Seeker ',
        option3: 'Joint Support',
        correctOption: 'JavaScript',

    },
    {
        question: 'Q.2: What punctuation is used to end a statement in JavaScript?',
        option1: 'colon',
        option2: 'semicolon',
        option3: 'full stop',
        correctOption: 'semicolon',
    },
    {
        question: 'Q.3; What function is used to output data in the console?',
        option1: 'document.getElementId',
        option2: 'document.write()',
        option3: 'console.log()',
        correctOption: 'console.log()',
    },
    {
        question: 'Q.4: What method is used to access an element by its id?', 
        option1: 'colon',
        option2: 'getElementById()',
        option3: 'console.log',
        correctOption: 'getElementById()',
    },
    {
        question: 'Q.5: What symbol is used for equality comparison in JavaScript?', 
        option1: '=',
        option2: '==',
        option3: '===',
        correctOption: '==',
    },
    {
        question: 'Q.6: What symbol is used for strict equality comparison in JavaScript?', 
        option1: '===',
        option2: '==',
        option3: '=',
        correctOption: '===',
    },
    {
        question: 'Q.7: which sign is used as the assignment operator to assign a value to a variable?', 
        option1: '===',
        option2: '==',
        option3: '=',
        correctOption: '=',
    },
    {
        question: 'Q.8: What method is used to remove the last element from an array in JavaScript?', 
        option1: 'push()',
        option2: 'pop()',
        option3: 'slice()',
        correctOption: 'pop()',
    },
    {
        question: 'Q.9; What method is used to add elements to the end of an array in JavaScript?', 
        option1: 'push()',
        option2: 'pop()',
        option3: 'slice()',
        correctOption: 'push()',
    },
    {
        question: 'Q.10: What keyword is used to create a loop in JavaScript?', 
        option1: 'for',
        option2: 'if',
        option3: 'else',
        correctOption: 'for',
    },
    {
        question: 'Q.11: What symbol is used for single-line comments in JavaScript?', 
        option1: '//',
        option2: '//**',
        option3: '**//',
        correctOption: '//',
    },
    {
        question: 'Q.12: What symbol is used for multi-line comments in JavaScript?', 
        option1: '// **',
        option2: '*/ /*',
        option3: '/* */',
        correctOption: '/* */',
    },
    {
        question: 'Q.13: How do you create an object in JavaScript?', 
        option1: '()',
        option2: '{}',
        option3: '[]',
        correctOption: '{}',
    },
    {
        question: 'Q.14: What is the purpose of new Date() constructor in JavaScript?', 
        option1: 'Previous date',
        option2: 'Current date',
        option3: 'Future date',
        correctOption: 'Current data',
    },
    {
        question: 'Q.15: What is the purpose of Math.floor() method in JavaScript?', 
        option1: 'Add the number',
        option2: 'Round the number',
        option3: 'Subtract the number',
        correctOption: 'Round the number',
    },
]

var ques = document.getElementById('ques');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var index = 0;
var btn = document.getElementById('btn')
var score = 0
function nextQ() {
    var getoptions = document.getElementsByName('options')
    for (var i = 0; i < getoptions.length ; i++) {
     
        if (getoptions[i].checked) {
            var selectvalue = getoptions[i].value;
            var selectedques = questions[index-1]['question'];
            var selectans = questions[index - 1]['option' + selectvalue];
            var correctOption = questions[index - 1]['correctOption']
            if (selectans == correctOption) {
                score++

            }
        }
        // console.log(selectedvalues)
        getoptions[i].checked = false;
    }
    btn.disabled = true;
    if (index > questions.length -1) {
        console.log(score)
        console.log((score / 15 * 100))
    }
    else {

        ques.innerHTML = questions[index].question;
        opt1.innerHTML = questions[index].option1;
        opt2.innerHTML = questions[index].option2;
        opt3.innerHTML = questions[index].option3;
        index++
    }

}
nextQ()
function clicked() {
    // var btn = document.getElementById('btn')
    btn.disabled = false
}
