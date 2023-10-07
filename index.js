const questions = [
    {
        question: "According to the Bible, what is the ultimate source of all true prophecy?",
        choices: [
            "(a) Human wisdom",
            "(b) The interpretation of dreams",
            "(c) The inspiration of the Holy Spirit",
        ],
        answer: "c",
        reference: "2 Peter 1:21",
    },
    {
        question: "What Bible verse famously declares that 'God is love'?",
        choices: [
            "(a) John 3:16",
            "(b) 1 Corinthians 13:4",
            "(c) 1 John 4:8",
        ],
        answer: "c",
        reference: "1 John 4:8",
    },
    {
        question: "In which book of the Bible do we find the story of God's wrath during the flood?",
        choices: [
            "(a) Genesis",
            "(b) Exodus",
            "(c) Numbers",
        ],
        answer: "a",
        reference: "Genesis 6:5-8",
    },
    {
        question: "According to the Bible, what is the first blessing given to humanity?",
        choices: [
            "(a) Prosperity",
            "(b) Fruitfulness and multiplication",
            "(c) Knowledge",
        ],
        answer: "b",
        reference: "Genesis 1:28",
    },
    {
        question: "What biblical passage describes the ideal qualities of a godly marriage relationship?",
        choices: [
            "(a) 1 Corinthians 13:4-7",
            "(b) Ephesians 6:1-4",
            "(c) Proverbs 1:8-9",
        ],
        answer: "a",
        reference: "1 Corinthians 13:4-7",
    },
    {
        question: "In the Bible, what does Romans 13:1-7 teach about our relationship with worldly leaders?",
        choices: [
            "(a) We should rebel against them",
            "(b) We should submit to their authority",
            "(c) We should form our own government",
        ],
        answer: "b",
        reference: "Romans 13:1-7",
    },
    {
        question: "What biblical passage instructs church leaders about the qualifications for overseers and deacons?",
        choices: [
            "(a) 1 Timothy 2:5-6",
            "(b) 1 Timothy 3:1-13",
            "(c) Titus 2:1-8",
        ],
        answer: "b",
        reference: "1 Timothy 3:1-13",
    },
    {
        question: "According to the Bible, what is the 'whole armor of God' mentioned in Ephesians 6:11-18?",
        choices: [
            "(a) A physical weapon",
            "(b) Spiritual attire for believers",
            "(c) A fortress",
        ],
        answer: "b",
        reference: "Ephesians 6:11-18",
    },
    {
        question: "What warning is given in 2 Timothy 4:3-4 about people's attitudes toward sound doctrine?",
        choices: [
            "(a) People will eagerly seek sound doctrine",
            "(b) People will no longer tolerate sound doctrine",
            "(c) Sound doctrine is irrelevant",
        ],
        answer: "b",
        reference: "2 Timothy 4:3-4",
    },
    {
        question: "According to the Bible, what signs are associated with the 'last days'?",
        choices: [
            "(a) Peace and unity among nations",
            "(b) False prophets and wars",
            "(c) Abundance of food and resources",
        ],
        answer: "b",
        reference: "Matthew 24:4-14",
    },
    {
        question: "What biblical event is often associated with the phrase 'as in the days of Noah'?",
        choices: [
            "(a) The Exodus",
            "(b) The Second Coming of Christ",
            "(c) The rebuilding of Jerusalem",
        ],
        answer: "b",
        reference: "Matthew 24:37-39",
    },
    {
        question: "In the Bible, what is the 'abomination of desolation' mentioned in the context of the end times?",
        choices: [
            "(a) An idolatrous image in the temple",
            "(b) A celestial phenomenon",
            "(c) A great war",
        ],
        answer: "a",
        reference: "Matthew 24:15-16",
    },
    {
        question: "What biblical prophecy describes a time when 'nation will rise against nation'?",
        choices: [
            "(a) The prophecy of the Second Coming",
            "(b) The prophecy of the rebuilding of the temple",
            "(c) The prophecy of the birth of Christ",
        ],
        answer: "a",
        reference: "Matthew 24:7",
    },
    {
        question: "What biblical event is associated with the 'sun being darkened' and 'the moon not giving its light'?",
        choices: [
            "(a) The crucifixion of Jesus",
            "(b) The Day of Pentecost",
            "(c) The Second Coming of Christ",
        ],
        answer: "c",
        reference: "Matthew 24:29",
    },
    {
        question: "In the Bible, what parable illustrates the importance of being watchful for the return of the Lord?",
        choices: [
            "(a) The Parable of the Sower",
            "(b) The Parable of the Good Samaritan",
            "(c) The Parable of the Ten Virgins",
        ],
        answer: "c",
        reference: "Matthew 25:1-13",
    },
    {
        question: "What biblical prophecy mentions 'wars and rumors of wars' as a sign of the end times?",
        choices: [
            "(a) Isaiah 2:4",
            "(b) Daniel 7:13-14",
            "(c) Matthew 24:6",
        ],
        answer: "c",
        reference: "Matthew 24:6",
    },
    {
        question: "According to the Bible, what is the 'great tribulation' mentioned in Matthew 24:21?",
        choices: [
            "(a) A period of worldwide peace and prosperity",
            "(b) A time of intense suffering and persecution for believers",
            "(c) A season of miraculous signs and wonders",
        ],
        answer: "b",
        reference: "Matthew 24:21",
    },
    {
        question: "What biblical prophecy speaks of a 'new heaven and a new earth'?",
        choices: [
            "(a) Isaiah 65:17",
            "(b) Ezekiel 37:1-14",
            "(c) Revelation 21:1",
        ],
        answer: "c",
        reference: "Revelation 21:1",
    },
    {
        question: "In the book of Revelation, what does the 'mark on the forehead' symbolize?",
        choices: [
            "(a) A literal mark on the forehead",
            "(b) Loyalty to God",
            "(c) A sign of the beast's authority",
        ],
        answer: "b",
        reference: "Revelation 7:3",
    },
    {
        question: "What is the 'tree of life' mentioned in Revelation 22:14, and what does it symbolize?",
        choices: [
            "(a) A literal tree with healing leaves",
            "(b) Eternal life through faith in Christ",
            "(c) A source of physical nourishment",
        ],
        answer: "b",
        reference: "Revelation 22:14",
    },
];


    let currentQuestionIndex = 0;
let score = 0;
let hasSubmitted = false;
const userAnswers = [];

// DOM Elements
const quizForm = document.getElementById("quiz-form");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");
const reviewButton = document.getElementById("review-btn");
const firstnameInput = document.getElementById("firstname");
const lastnameInput = document.getElementById("lastname");
const questionText = document.getElementById("question-text");
const closeButton = document.getElementById("close-btn");
const refreshForm = document.getElementById("refresh-form");
const reviewSection = document.querySelector(".review-section");
const reviewList = document.getElementById("review-list");

// Event Listeners
submitButton.style.display = "block";
reviewButton.style.display = "none";

submitButton.addEventListener("click", function () {
    checkAnswer();
    reviewButton.style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
    refreshForm.addEventListener("submit", function (e) {
        e.preventDefault();
        resetQuiz();
    });

    nextButton.addEventListener("click", checkAnswer);
    loadQuestion();

    firstnameInput.addEventListener("focus", () => {
        firstnameInput.style.borderColor = "";
    });

    lastnameInput.addEventListener("focus", () => {
        lastnameInput.style.borderColor = "";
    });

    closeButton.addEventListener("click", function () {
        window.close();
    });

    reviewButton.addEventListener("click", reviewScore);
});

// Functions
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    const choicesHTML = currentQuestion.choices.map((choice, index) => {
        return `<label><input type="radio" name="q${currentQuestionIndex}" value="${String.fromCharCode(97 + index)}">${choice}</label><br>`;
    }).join("");

    quizForm.innerHTML = choicesHTML;
}

function checkAnswer() {
    if (hasSubmitted) {
        alert("You have already submitted the quiz. Please take a screenshot of your results.");
        return;
    }

    if (!checkNameFields()) {
        return;
    }

    const selectedAnswer = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            const fullName = `${firstnameInput.value} ${lastnameInput.value}`;
            questionText.textContent = `Quiz completed, ${fullName}! Your score: ${score}/${questions.length}`;
            quizForm.style.display = "none";
            nextButton.style.display = "none";
            submitButton.style.display = "none";
            reviewButton.style.display = "block";
            hasSubmitted = true;
        }
    } else {
        alert("Please select an answer before submitting.");
    }
}

function checkNameFields() {
    const firstNameValue = firstnameInput.value.trim();
    const lastNameValue = lastnameInput.value.trim();

    if (firstNameValue === "" || lastNameValue === "") {
        highlightEmptyFields();
        return false;
    }
    return true;
}

function highlightEmptyFields() {
    const firstNameValue = firstnameInput.value.trim();
    const lastNameValue = lastnameInput.value.trim();

    firstnameInput.style.borderColor = firstNameValue === "" ? "red" : "";
    lastnameInput.style.borderColor = lastNameValue === "" ? "red" : "";
}

function resetQuiz() {
    location.reload();
}

function reviewScore() {
    reviewList.innerHTML = "";

    for (let i = 0; i < questions.length; i++) {
        const currentQuestion = questions[i];
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        const answerElement = document.createElement("li");

        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;
            const isCorrect = userAnswer === currentQuestion.answer;

            answerElement.textContent = `${i + 1}. ${currentQuestion.question}`;

            if (isCorrect) {
                answerElement.classList.add("correct");
                answerElement.innerHTML += " &#10004;";
            } else {
                answerElement.classList.add("wrong");
                answerElement.innerHTML += ` &#10008; (Your answer: ${userAnswer}, Correct: ${currentQuestion.answer})`;
            }
        } else {
            answerElement.textContent = `${i + 1}. ${currentQuestion.question} (No answer provided)`;
            answerElement.classList.add("unanswered");
        }

        reviewList.appendChild(answerElement);
    }

    reviewSection.style.display = "block";
}