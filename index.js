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
            question: "In Genesis 29, Asher was one of the sons of Jacob. What were the unique characteristics or blessings associated with Asher's tribe among the twelve tribes of Israel, and how did they contribute to the nation's history?",

            choices: [
                "(a) Asher's tribe excelled in military leadership and conquests.",
                "(b) Asher's territory was known for its fertile lands and abundance, playing a vital role in providing for the nation.",
                "(c) Asher's tribe was renowned for its wisdom and scholarly pursuits.",
                "(d) Asher's tribe was primarily nomadic, contributing to Israel's mobility."
            ],
            answer: "b"
        },
        {
            question: "In the context of Asher's role within the twelve tribes of Israel, what symbolism or significance can be attributed to the 'olive oil' mentioned in the blessing of Asher in Deuteronomy 33:24? How did this element influence the tribe's identity?",
            choices: [
                "(a) Olive oil symbolized Asher's peace-loving nature and diplomacy among the tribes.",
                "(b) Olive oil signified Asher's contributions to Israel's religious ceremonies and anointing of leaders.",
                "(c) Olive oil represented Asher's strength and dominance in trade and commerce.",
                "(d) Olive oil had no specific meaning in the context of Asher."
=======
            choices: [
                "(a) Asher's tribe excelled in military leadership and conquests.",
                "(b) Asher's territory was known for its fertile lands and abundance, playing a vital role in providing for the nation.",
                "(c) Asher's tribe was renowned for its wisdom and scholarly pursuits.",
                "(d) Asher's tribe was primarily nomadic, contributing to Israel's mobility."

            ],
            answer: "b"
        },
        {

            question: "In Genesis 29, what was Jacob's initial emotional response upon seeing Rachel, and what implications did it have for their relationship?",
            choices: [
                "(a) He felt joy, foreseeing a harmonious marriage.",
                "(b) He wept, sensing an imminent separation from Rachel.",
                "(c) He laughed, revealing his excitement.",
                "(d) He bowed, acknowledging her authority."

            question: "In the context of Asher's role within the twelve tribes of Israel, what symbolism or significance can be attributed to the 'olive oil' mentioned in the blessing of Asher in Deuteronomy 33:24? How did this element influence the tribe's identity?",
            choices: [
                "(a) Olive oil symbolized Asher's peace-loving nature and diplomacy among the tribes.",
                "(b) Olive oil signified Asher's contributions to Israel's religious ceremonies and anointing of leaders.",
                "(c) Olive oil represented Asher's strength and dominance in trade and commerce.",
                "(d) Olive oil had no specific meaning in the context of Asher."

            ],
            answer: "b"
        },
        {

            question: "Discuss the intricate terms of the agreement between Jacob and Laban for Jacob to marry Rachel. What complexities arose from this arrangement?",
            choices: [
                "(a) Jacob agreed to work for seven years, but Laban changed the deal.",
                "(b) Jacob agreed to a dowry, but Rachel insisted on her own terms.",
                "(c) Laban offered Rachel, but Jacob demanded to marry Leah first.",
                "(d) Rachel imposed conditions that Jacob had to fulfill."
            ],
            answer: "a"
        },
        {
            question: "Examine the symbolism of the number of years Jacob worked for Rachel in Genesis 29. How does this timeframe connect to biblical themes?",
            choices: [
                "(a) It signifies a divine covenant between Jacob and Laban.",
                "(b) It reflects Jacob's humility and patience in pursuing Rachel.",
                "(c) It corresponds to the seven days of creation.",
                "(d) It represents the lunar calendar used by the Israelites."
            ],
            answer: "b"
        },
        {
            question: "Analyze the naming of Jacob's first two sons in Genesis 29. What prophetic significance can be attributed to their names?",
            choices: [
                "(a) Their names symbolize peace and unity among siblings.",
                "(b) Their names imply divine intervention in family matters.",
                "(c) Their names suggest harmony and prosperity in their future lives.",
                "(d) Their names reflect the tribes they would father."

            question: "In Genesis 29, what was Jacob's initial emotional response upon seeing Rachel, and what implications did it have for their relationship?",
            choices: [
                "(a) He felt joy, foreseeing a harmonious marriage.",
                "(b) He wept, sensing an imminent separation from Rachel.",
                "(c) He laughed, revealing his excitement.",
                "(d) He bowed, acknowledging her authority."
            ],
            answer: "b"
        },
        {
            question: "Discuss the intricate terms of the agreement between Jacob and Laban for Jacob to marry Rachel. What complexities arose from this arrangement?",
            choices: [
                "(a) Jacob agreed to work for seven years, but Laban changed the deal.",
                "(b) Jacob agreed to a dowry, but Rachel insisted on her own terms.",
                "(c) Laban offered Rachel, but Jacob demanded to marry Leah first.",
                "(d) Rachel imposed conditions that Jacob had to fulfill."
            ],
            answer: "a"
        },
        {
            question: "Examine the symbolism of the number of years Jacob worked for Rachel in Genesis 29. How does this timeframe connect to biblical themes?",
            choices: [
                "(a) It signifies a divine covenant between Jacob and Laban.",
                "(b) It reflects Jacob's humility and patience in pursuing Rachel.",
                "(c) It corresponds to the seven days of creation.",
                "(d) It represents the lunar calendar used by the Israelites."

            ],
            answer: "b"
        },
        {

            question: "In Genesis 29, how did Laban's actions symbolize the complexities of human relationships, and what consequences followed?",
            choices: [
                "(a) Laban demonstrated unwavering loyalty to Jacob's cause.",
                "(b) Laban exposed the rivalry between Leah and Rachel.",
                "(c) Laban's intervention led to immediate reconciliation.",
                "(d) Laban's plan resulted in Jacob's swift departure."

            question: "Analyze the naming of Jacob's first two sons in Genesis 29. What prophetic significance can be attributed to their names?",
            choices: [
                "(a) Their names symbolize peace and unity among siblings.",
                "(b) Their names imply divine intervention in family matters.",
                "(c) Their names suggest harmony and prosperity in their future lives.",
                "(d) Their names reflect the tribes they would father."

            ],
            answer: "b"
        },
        {

            question: "Discuss the controversial action taken by Rachel in Genesis 29 regarding her father's idols. What does this incident reveal about her character and the consequences it had?",
            choices: [
                "(a) Rachel's actions demonstrated her devotion to her faith.",
                "(b) Rachel sought to protect her family from Laban's superstitions.",
                "(c) Rachel's actions led to a crisis in her relationship with Jacob.",
                "(d) Rachel's actions were overlooked, emphasizing unity in the family."
            ],
            answer: "c"
        },
        {
            question: "In Exodus 4, what does the transformation of Moses' staff into a snake represent in the context of God's message to Pharaoh?",
            choices: [
                "(a) It symbolizes the overthrow of the Egyptian monarchy.",
                "(b) It foreshadows the role of snakes in the plagues.",
                "(c) It represents the power struggle between God and Pharaoh.",
                "(d) It conveys the idea of reconciliation and partnership."
         
              question: "In Genesis 29, how did Laban's actions symbolize the complexities of human relationships, and what consequences followed?",
            choices: [
                "(a) Laban demonstrated unwavering loyalty to Jacob's cause.",
                "(b) Laban exposed the rivalry between Leah and Rachel.",
                "(c) Laban's intervention led to immediate reconciliation.",
                "(d) Laban's plan resulted in Jacob's swift departure."
            ],
            answer: "b"
        },
        {
            question: "Discuss the controversial action taken by Rachel in Genesis 29 regarding her father's idols. What does this incident reveal about her character and the consequences it had?",
            choices: [
                "(a) Rachel's actions demonstrated her devotion to her faith.",
                "(b) Rachel sought to protect her family from Laban's superstitions.",
                "(c) Rachel's actions led to a crisis in her relationship with Jacob.",
                "(d) Rachel's actions were overlooked, emphasizing unity in the family."

            ],
            answer: "c"
        },
        {

            question: "Examine the spiritual significance of the first plague in Exodus 4, in which God warned Moses about turning the river into blood. How does this event set the tone for the ensuing plagues?",
            choices: [
                "(a) It signifies the purification of the Nile River.",
                "(b) It represents God's judgment on Egypt's false gods.",
                "(c) It emphasizes the abundance of life in the river.",
                "(d) It underscores the need for humility and repentance."
            ],
            answer: "b"
        },
        {
            question: "Analyze the implications of Moses' speech impediment as a critical element of his mission. How did this condition influence his interactions with Pharaoh and the Israelites?",
            choices: [
                "(a) It showcased Moses' human limitations and reliance on Aaron.",
                "(b) It highlighted Moses' eloquence and persuasive abilities.",
                "(c) It symbolized God's direct communication with Moses.",
                "(d) It created tension between Moses and Aaron."
            ],
            answer: "a"
        },
        {
            question: "Explore the dynamics of the relationship between Moses and Aaron in Exodus 4. How did their partnership shape their roles in the mission to confront Pharaoh?",
            choices: [
                "(a) Aaron served as the primary decision-maker.",
                "(b) Moses and Aaron had distinct and complementary roles.",
                "(c) Moses relied solely on Aaron's leadership.",
                "(d) Aaron was Moses' personal advisor."
            ],
            answer: "b"
        },
        {
            question: "In Exodus 4, what was the significance of Moses' staff and its role in performing miracles? How did it symbolize God's power?",
            choices: [
                "(a) The staff was a mere symbol with no real power.",
                "(b) The staff represented Moses' authority over Egypt.",
                "(c) The staff was a conduit for divine power and transformation.",
                "(d) The staff was a token of Moses' unique abilities."
            ],
            answer: "c"
        },
        {
            question: "Examine the divine instruction for Moses to cast his staff on the ground in Exodus 4. How did this act align with God's purpose and message to Pharaoh?",
            choices: [
                "(a) It demonstrated Moses' obedience to God's commands.",
                "(b) It initiated a contest of power between God and Pharaoh.",
                "(c) It was a symbolic gesture of surrender.",
                "(d) It was a test of the staff's supernatural abilities."
            ],
            answer: "b"
        },
        {
            question: "In Exodus 4, what was the primary objective of Moses and Aaron's mission to confront Pharaoh, and how did this challenge Pharaoh's authority?",
            choices: [
                "(a) Their objective was to secure a peaceful coexistence with Egypt.",
                "(b) Their mission was to assert the superiority of Israel's gods over Egypt.",
                "(c) They aimed to negotiate a political alliance with Egypt.",
                "(d) Their mission was to challenge Pharaoh's divine status."
            ],
            answer: "d"
        },
        {
            question: "Explain the essence of the message that God instructed Moses and Aaron to convey to Pharaoh in Exodus 4. How did this message serve as a test of Pharaoh's willingness to comply?",
            choices: [
                "(a) The message was a request for Egypt's support in building the Tabernacle.",
                "(b) The message demanded Pharaoh's surrender of Egypt to the Israelites.",
                "(c) It called for negotiations and trade agreements between Egypt and Israel.",
                "(d) The message urged Pharaoh to grant the Israelites their freedom."
            ],
            answer: "d"

            question: "In Exodus 4, what does the transformation of Moses' staff into a snake represent in the context of God's message to Pharaoh?",
            choices: [
                "(a) It symbolizes the overthrow of the Egyptian monarchy.",
                "(b) It foreshadows the role of snakes in the plagues.",
                "(c) It represents the power struggle between God and Pharaoh.",
                "(d) It conveys the idea of reconciliation and partnership."
            ],
            answer: "c"
        },
        {
            question: "Examine the spiritual significance of the first plague in Exodus 4, in which God warned Moses about turning the river into blood. How does this event set the tone for the ensuing plagues?",
            choices: [
                "(a) It signifies the purification of the Nile River.",
                "(b) It represents God's judgment on Egypt's false gods.",
                "(c) It emphasizes the abundance of life in the river.",
                "(d) It underscores the need for humility and repentance."
            ],
            answer: "b"
        },
        {
            question: "Analyze the implications of Moses' speech impediment as a critical element of his mission. How did this condition influence his interactions with Pharaoh and the Israelites?",
            choices: [
                "(a) It showcased Moses' human limitations and reliance on Aaron.",
                "(b) It highlighted Moses' eloquence and persuasive abilities.",
                "(c) It symbolized God's direct communication with Moses.",
                "(d) It created tension between Moses and Aaron."
            ],
            answer: "a"
        },
        {
            question: "Explore the dynamics of the relationship between Moses and Aaron in Exodus 4. How did their partnership shape their roles in the mission to confront Pharaoh?",
            choices: [
                "(a) Aaron served as the primary decision-maker.",
                "(b) Moses and Aaron had distinct and complementary roles.",
                "(c) Moses relied solely on Aaron's leadership.",
                "(d) Aaron was Moses' personal advisor."
            ],
            answer: "b"
        },
        {
            question: "In Exodus 4, what was the significance of Moses' staff and its role in performing miracles? How did it symbolize God's power?",
            choices: [
                "(a) The staff was a mere symbol with no real power.",
                "(b) The staff represented Moses' authority over Egypt.",
                "(c) The staff was a conduit for divine power and transformation.",
                "(d) The staff was a token of Moses' unique abilities."
            ],
            answer: "c"
        },
        {
            question: "Examine the divine instruction for Moses to cast his staff on the ground in Exodus 4. How did this act align with God's purpose and message to Pharaoh?",
            choices: [
                "(a) It demonstrated Moses obedience to God's commands.",
                "(b) It initiated a contest of power between God and Pharaoh.",
                "(c) It was a symbolic gesture of surrender.",
                "(d) It was a test of the staff's supernatural abilities."
            ],
            answer: "b"
        },
        {
            question: "In Exodus 4, what was the primary objective of Moses and Aaron's mission to confront Pharaoh, and how did this challenge Pharaoh's authority?",
            choices: [
                "(a) Their objective was to secure a peaceful coexistence with Egypt.",
                "(b) Their mission was to assert the superiority of Israel's gods over Egypt.",
                "(c) They aimed to negotiate a political alliance with Egypt.",
                "(d) Their mission was to challenge Pharaoh's divine status."
            ],
            answer: "d"
        },
        {
            question: "Explain the essence of the message that God instructed Moses and Aaron to convey to Pharaoh in Exodus 4. How did this message serve as a test of Pharaoh's willingness to comply?",
            choices: [
                "(a) The message was a request for Egypt's support in building the Tabernacle.",
                "(b) The message demanded Pharaoh's surrender of Egypt to the Israelites.",
                "(c) It called for negotiations and trade agreements between Egypt and Israel.",
                "(d) The message urged Pharaoh to grant the Israelites their freedom."
            ],
            answer: "d"

        }
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

