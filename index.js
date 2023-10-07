document.addEventListener("DOMContentLoaded", function () {
    // Get the refresh form and add an event listener for form submission
    const refreshForm = document.getElementById("refresh-form");
    refreshForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting
        resetQuiz(); // Call the resetQuiz function to reload the page
    });

    // Function to reset the quiz by reloading the page
    function resetQuiz() {
        location.reload(); // Reload the page to start the quiz over
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Get elements from the DOM
    const closeButton = document.getElementById("close-btn");
    const quizForm = document.getElementById("quiz-form");
    const nextButton = document.getElementById("next-btn");
    const submitButton = document.getElementById("submit-btn");
    const firstnameInput = document.getElementById("firstname");
    const lastnameInput = document.getElementById("lastname");
    const questionText = document.getElementById("question-text");

    // Function to check if the first name and last name fields are filled
    function checkNameFields() {
        const firstNameValue = firstnameInput.value.trim();
        const lastNameValue = lastnameInput.value.trim();

        if (firstNameValue === "" || lastNameValue === "") {
            highlightEmptyFields();
            return false;
        }
        return true;
    }

    // Function to highlight empty fields
    function highlightEmptyFields() {
        const firstNameValue = firstnameInput.value.trim();
        const lastNameValue = lastnameInput.value.trim();

        firstnameInput.style.borderColor = firstNameValue === "" ? "red" : "";
        lastnameInput.style.borderColor = lastNameValue === "" ? "red" : "";
    }
    const questions = [
        {
            question: "What is the biblical significance of the number '40' in the Bible?",
            choices: [
                "(a) Represents perfection",
                "(b) Symbolizes testing and trial",
                "(c) Signifies abundance",
            ],
            answer: "b",
        },
        {
            question: "Who was the prophet that was taken up to heaven in a chariot of fire?",
            choices: [
                "(a) Elijah",
                "(b) Elisha",
                "(c) Isaiah",
            ],
            answer: "a",
        },
        {
            question: "In which book of the Bible do we find the story of the three Hebrews in the fiery furnace?",
            choices: [
                "(a) Genesis",
                "(b) Daniel",
                "(c) Ezekiel",
            ],
            answer: "b",
        },
        {
            question: "What is the name of the Apostle Paul's companion who wrote the Gospel of Mark?",
            choices: [
                "(a) Luke",
                "(b) Barnabas",
                "(c) Timothy",
            ],
            answer: "b",
        },
        {
            question: "Who is known as the 'weeping prophet' in the Old Testament?",
            choices: [
                "(a) Isaiah",
                "(b) Jeremiah",
                "(c) Ezekiel",
            ],
            answer: "b",
        },
        // Revised Questions about Offerings and Tithe
        {
            question: "What is the biblical tithe typically calculated as a percentage of one's income?",
            choices: [
                "(a) 5%",
                "(b) 10%",
                "(c) 15%",
            ],
            answer: "b",
        },
        {
            question: "In the Bible, what did Abel offer to God that pleased Him?",
            choices: [
                "(a) Grains",
                "(b) Livestock",
                "(c) Fruits",
            ],
            answer: "b",
        },
        {
            question: "What is the purpose of a tithe according to biblical teachings?",
            choices: [
                "(a) To support the church",
                "(b) To fund social programs",
                "(c) To support the poor and widows",
            ],
            answer: "c",
        },
        {
            question: "Which book in the Bible mentions the story of the widow's mite?",
            choices: [
                "(a) Genesis",
                "(b) Exodus",
                "(c) Mark",
                "(d) Luke",
            ],
            answer: "d",
        },
        {
            question: "What did Zacchaeus promise to do as a sign of his repentance?",
            choices: [
                "(a) Give half of his possessions to the poor",
                "(b) Pay back four times the amount he cheated from others",
                "(c) Fast for 40 days",
            ],
            answer: "b",
        },
        // Revised Questions from the Last Books of the Old Testament
        {
            question: "Which prophet wrote the book of Malachi?",
            choices: [
                "(a) Isaiah",
                "(b) Jeremiah",
                "(c) Malachi",
                "(d) Zechariah",
            ],
            answer: "c",
        },
        {
            question: "What does the name 'Malachi' mean?",
            choices: [
                "(a) Messenger of God",
                "(b) Faithful servant",
                "(c) King of Israel",
            ],
            answer: "a",
        },
        {
            question: "Which Old Testament book contains the prophecies of the coming of Elijah before the great day of the Lord?",
            choices: [
                "(a) Malachi",
                "(b) Zechariah",
                "(c) Joel",
            ],
            answer: "a",
        },
        {
            question: "Which Old Testament book emphasizes the importance of returning tithes and offerings to God?",
            choices: [
                "(a) Malachi",
                "(b) Haggai",
                "(c) Zechariah",
            ],
            answer: "a",
        },
        {
            question: "In which book of the Old Testament is the story of Esther found?",
            choices: [
                "(a) Nehemiah",
                "(b) Job",
                "(c) Esther",
            ],
            answer: "c",
        },
        // Revised Questions about the Book of Revelation
        {
            question: "Who is traditionally believed to be the author of the Book of Revelation?",
            choices: [
                "(a) John the Baptist",
                "(b) John the Apostle",
                "(c) James",
            ],
            answer: "b",
        },
        {
            question: "What number is often associated with the Book of Revelation, representing perfection and completeness?",
            choices: [
                "(a) 3",
                "(b) 7",
                "(c) 12",
            ],
            answer: "b",
        },
        {
            question: "In the Book of Revelation, what is the final destination of the righteous?",
            choices: [
                "(a) Purgatory",
                "(b) Heaven",
                "(c) Hell",
            ],
            answer: "b",
        },
        {
            question: "What is the symbolic number of the beast in the Book of Revelation?",
            choices: [
                "(a) 666",
                "(b) 777",
                "(c) 888",
            ],
            answer: "a",
        },
        {
            question: "In the Book of Revelation, what is the final fate of Satan?",
            choices: [
                "(a) Eternal torment",
                "(b) Redemption",
                "(c) Annihilation",
            ],
            answer: "c",
        },
    ];

    let currentQuestionIndex = 0; // Index to keep track of the current question
    let score = 0; // Variable to store the quiz score
    let hasSubmitted = false; // Flag to check if the quiz has been submitted

    // Function to load a question and its choices
    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;

        const choicesHTML = currentQuestion.choices.map(choice => {
            return `<label><input type="radio" name="q" value="${choice.charAt(1).toLowerCase()}">${choice}</label><br>`;
        }).join("");

        quizForm.innerHTML = choicesHTML;
    }

    // Function to check the selected answer and proceed to the next question
    function checkAnswer() {
        if (hasSubmitted) {
            alert("You have already submitted the quiz. Please take a screenshot of your results.");
            return;
        }

        if (!checkNameFields()) {
            return; // Don't proceed with the quiz if name fields are not filled
        }

        const selectedAnswer = document.querySelector('input[name="q"]:checked');
        if (selectedAnswer) {
            if (selectedAnswer.value === questions[currentQuestionIndex].answer) {
                score++; // Increase the score if the answer is correct
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion(); // Load the next question
            } else {
                const fullName = `${firstnameInput.value} ${lastnameInput.value}`;
                questionText.textContent = `Quiz completed, ${fullName}! Your score: ${score}/${questions.length}`;
                quizForm.style.display = "none";
                nextButton.style.display = "none";
                submitButton.style.display = "block";
                hasSubmitted = true;
            }
        } else {
            alert("Please select an answer before submitting.");
        }
    }

    // Add event listeners
    nextButton.addEventListener("click", checkAnswer);
    loadQuestion();

    // Reset border color on input focus
    firstnameInput.addEventListener("focus", () => {
        firstnameInput.style.borderColor = "";
    });

    lastnameInput.addEventListener("focus", () => {
        lastnameInput.style.borderColor = "";
    });

    // Add an event listener to the close button to close the window
    closeButton.addEventListener("click", function () {
        window.close();
    });
});

