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
    const physicsQuestions = [
        {
            question: "What is the SI unit of force?",
            choices: [
                "(a) Newton",
                "(b) Joule",
                "(c) Watt",
                "(d) Pascal"
            ],
            answer: "a"
        },
        {
            question: "In the electromagnetic spectrum, which type of wave has the shortest wavelength?",
            choices: [
                "(a) Radio waves",
                "(b) Microwaves",
                "(c) X-rays",
                "(d) Gamma rays"
            ],
            answer: "d"
        },
        {
            question: "What is the formula for calculating kinetic energy?",
            choices: [
                "(a) KE = mgh",
                "(b) KE = 1/2 * mv^2",
                "(c) KE = P / t",
                "(d) KE = F * d"
            ],
            answer: "b"
        },
        {
            question: "Which law of thermodynamics states that energy cannot be created or destroyed, only transferred or converted?",
            choices: [
                "(a) Zeroth law",
                "(b) First law",
                "(c) Second law",
                "(d) Third law"
            ],
            answer: "b"
        },
        {
            question: "What is the phenomenon where a sound wave encounters an obstacle and bends around it?",
            choices: [
                "(a) Refraction",
                "(b) Diffraction",
                "(c) Reflection",
                "(d) Interference"
            ],
            answer: "b"
        },
        {
            question: "In a parallel circuit, how does adding more resistors affect the total resistance?",
            choices: [
                "(a) Total resistance decreases",
                "(b) Total resistance remains the same",
                "(c) Total resistance increases",
                "(d) It depends on the individual resistances"
            ],
            answer: "d"
        },
        {
            question: "What is the SI unit of electric current?",
            choices: [
                "(a) Ampere",
                "(b) Volt",
                "(c) Ohm",
                "(d) Watt"
            ],
            answer: "a"
        },
        {
            question: "According to the law of conservation of energy, what happens to the total energy in a closed system?",
            choices: [
                "(a) It decreases",
                "(b) It increases",
                "(c) It remains constant",
                "(d) It transforms into matter"
            ],
            answer: "c"
        },
        {
            question: "What is the speed of light in a vacuum?",
            choices: [
                "(a) 300,000 m/s",
                "(b) 150,000 m/s",
                "(c) 450,000 m/s",
                "(d) 600,000 m/s"
            ],
            answer: "a"
        },
        {
            question: "What is the relationship between the frequency (f) and wavelength (λ) of a wave?",
            choices: [
                "(a) f = λ^2",
                "(b) f = 1/λ",
                "(c) f = λ/2",
                "(d) f = c/λ"
            ],
            answer: "d"
        },
        {
        question: "What is the principle behind a transformer?",
    choices: [
        "(a) Faraday's law of electromagnetic induction",
        "(b) Archimedes' principle",
        "(c) Boyle's law",
        "(d) Pascal's principle"
    ],
    answer: "a"
},
{
    question: "What is the SI unit of capacitance?",
    choices: [
        "(a) Henry",
        "(b) Farad",
        "(c) Coulomb",
        "(d) Tesla"
    ],
    answer: "b"
},
{
    question: "What is the relationship between the voltage (V), current (I), and resistance (R) in an electrical circuit?",
    choices: [
        "(a) V = IR",
        "(b) I = VR",
        "(c) R = VI",
        "(d) V = I/R"
    ],
    answer: "a"
},
{
    question: "What does the term 'vector' represent in physics?",
    choices: [
        "(a) A quantity with only magnitude",
        "(b) A quantity with both magnitude and direction",
        "(c) A scalar quantity",
        "(d) A fundamental particle"
    ],
    answer: "b"
},
{
    question: "What is the law of reflection?",
    choices: [
        "(a) The angle of incidence is equal to the angle of refraction",
        "(b) Light travels in straight lines",
        "(c) The incident ray, reflected ray, and the normal to the surface all lie in the same plane",
        "(d) The frequency of reflected light is the same as the incident light"
    ],
    answer: "c"
},
{
    question: "What is the main factor affecting the resistance of a conductor?",
    choices: [
        "(a) Length",
        "(b) Diameter",
        "(c) Temperature",
        "(d) Material"
    ],
    answer: "c"
},
{
    question: "What is the purpose of a concave lens?",
    choices: [
        "(a) To converge light rays",
        "(b) To diverge light rays",
        "(c) To reflect light",
        "(d) To absorb light"
    ],
    answer: "b"
},
{
    question: "Which law of motion states that an object at rest will remain at rest, and an object in motion will remain in motion unless acted upon by a net external force?",
    choices: [
        "(a) Newton's First Law",
        "(b) Newton's Second Law",
        "(c) Newton's Third Law",
        "(d) Kepler's Law"
    ],
    answer: "a"
},
{
    question: "What is the SI unit of power?",
    choices: [
        "(a) Watt",
        "(b) Joule",
        "(c) Newton",
        "(d) Ampere"
    ],
    answer: "a"
},
{
    question: "What is the phenomenon of a sudden and violent release of energy in the Earth's crust that creates seismic waves?",
    choices: [
        "(a) Tsunami",
        "(b) Hurricane",
        "(c) Earthquake",
        "(d) Tornado"
    ],
    answer: "c"
},
{
question: "What is the primary function of a semiconductor diode?",
    choices: [
        "(a) To amplify electrical signals",
        "(b) To generate electrical power",
        "(c) To control the flow of electrical current",
        "(d) To store electrical energy"
    ],
    answer: "c"
},

{
    question: "What is the formula for calculating kinetic energy?",
    choices: [
        "(a) E = mc^2",
        "(b) E = mgh",
        "(c) E = 1/2mv^2",
        "(d) E = P/V"
    ],
    answer: "c"
},
{
    question: "Which law of thermodynamics states that energy cannot be created or destroyed, only transferred or converted from one form to another?",
    choices: [
        "(a) Zeroth Law",
        "(b) First Law",
        "(c) Second Law",
        "(d) Third Law"
    ],
    answer: "b"
},
{
    question: "What is the unit of measurement for frequency?",
    choices: [
        "(a) Newton",
        "(b) Hertz",
        "(c) Ohm",
        "(d) Joule"
    ],
    answer: "b"
},
{
    question: "What is the purpose of a telescope?",
    choices: [
        "(a) To magnify small objects",
        "(b) To observe distant objects",
        "(c) To refract light",
        "(d) To generate electricity"
    ],
    answer: "b"
},
{
    question: "Which particle is responsible for carrying the electric charge in an atom?",
    choices: [
        "(a) Electron",
        "(b) Proton",
        "(c) Neutron",
        "(d) Positron"
    ],
    answer: "a"
},
{
    question: "What is the phenomenon where a wave changes direction as it passes from one medium to another?",
    choices: [
        "(a) Reflection",
        "(b) Refraction",
        "(c) Diffraction",
        "(d) Absorption"
    ],
    answer: "b"
},
{
    question: "What is the fundamental force responsible for holding the nucleus of an atom together?",
    choices: [
        "(a) Gravity",
        "(b) Electromagnetic force",
        "(c) Strong nuclear force",
        "(d) Weak nuclear force"
    ],
    answer: "c"
},
{
    question: "What does the term 'Ohm's Law' describe?",
    choices: [
        "(a) The relationship between voltage, current, and resistance",
        "(b) The behavior of gases under pressure",
        "(c) The motion of planets in orbit",
        "(d) The reflection of light"
    ],
    answer: "a"
},
{
    question: "What is the speed of light in a vacuum?",
    choices: [
        "(a) 300,000 km/s",
        "(b) 150,000 km/s",
        "(c) 600,000 km/s",
        "(d) 900,000 km/s"
    ],
    answer: "a"
},
    ]


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

