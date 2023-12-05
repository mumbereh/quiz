
document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const quizContainer = document.querySelector(".quiz-container");
    const nextButton = document.getElementById("next-btn");
    const submitButton = document.getElementById("submit-btn");
    const firstnameInput = document.getElementById("firstname");
    const lastnameInput = document.getElementById("lastname");
    const questionText = document.getElementById("question-text");
    const choicesContainer = document.getElementById("quiz-form");

    const physicsQuestions = [

        { question: "What is the SI unit of force?", 
        choices: [
            "(a) Newton", 
            "(b) Joule", 
            "(c) Watt", 
            "(d) Pascal"
        ],
             answer: "a" 
            },

        { question: "In the electromagnetic spectrum, which type of wave has the shortest wavelength?", 
        choices: [
            "(a) Radio waves", 
            "(b) Microwaves", 
            "(c) X-rays", 
            "(d) Gamma rays"
        ], answer: "d" 
            },
    
        {   question: "What is the formula for calculating kinetic energy?",
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
}
];

let currentQuestionIndex = 0;
            let score = 0;
            let hasRegistered = false;
            let hasSubmitted = false;
            let participantName = "";  
            let timer;

            function showQuizForm() {
                registrationForm.style.display = "none";
                quizContainer.style.display = "block";
                participantName = `${firstnameInput.value} ${lastnameInput.value}`;
                loadQuestion();
                startTimer();
            }

            function startTimer() {
                const timerDuration = 20000;  // 20 seconds
                timer = setTimeout(() => {
                    // Automatically move to the next question when the timer expires
                    checkAnswer();
                }, timerDuration);
            }

            function resetTimer() {
                clearTimeout(timer);
                startTimer();
            }

            function loadQuestion() {
                const currentQuestion = physicsQuestions[currentQuestionIndex];
                questionText.textContent = `${participantName}, ${currentQuestion.question}`;

                const choicesHTML = currentQuestion.choices.map(choice => {
                    return `<label><input type="radio" name="q" value="${choice.charAt(1).toLowerCase()}">${choice}</label><br>`;
                }).join("");

                choicesContainer.innerHTML = choicesHTML;
                resetTimer();
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

            function registerUser() {
                if (!checkNameFields()) {
                    return;
                }

                hasRegistered = true;
                const fullName = `${firstnameInput.value} ${lastnameInput.value}`;
                alert(`Thank you, ${fullName}, for registering! You are now ready to start the quiz.`);
                // Show the quiz questions after registration
                showQuizForm();
            }

            function checkAnswer() {
                if (!hasRegistered) {
                    alert("Please register first before attempting the quiz.");
                    return;
                }

                if (hasSubmitted) {
                    alert("You have already submitted the quiz. Please take a screenshot of your results.");
                    return;
                }

                const selectedAnswer = document.querySelector('input[name="q"]:checked');
                if (selectedAnswer) {
                    if (selectedAnswer.value === physicsQuestions[currentQuestionIndex].answer) {
                        score++;
                    }
                    currentQuestionIndex++;
                    if (currentQuestionIndex < physicsQuestions.length) {
                        loadQuestion();
                    } else {
                        const fullName = `${firstnameInput.value} ${lastnameInput.value}`;
                        questionText.textContent = `Quiz completed, ${fullName}! Your score: ${score}/${physicsQuestions.length}`;
                        quizContainer.style.display = "none";
                        nextButton.style.display = "none";
                        submitButton.style.display = "block";
                        hasSubmitted = true;
                    }
                } else {
                    alert("Please select an answer before submitting.");
                }
            }

            registrationForm.addEventListener("submit", function (e) {
                e.preventDefault();
                registerUser();
            });

            nextButton.addEventListener("click", function () {
                // Check if the user has registered before showing the quiz
                if (!hasRegistered) {
                    alert("Please register first before attempting the quiz.");
                    return;
                }

                // Show the next question
                checkAnswer();
            });

            firstnameInput.addEventListener("focus", () => {
                firstnameInput.style.borderColor = "";
            });

            lastnameInput.addEventListener("focus", () => {
                lastnameInput.style.borderColor = "";
            });
        });