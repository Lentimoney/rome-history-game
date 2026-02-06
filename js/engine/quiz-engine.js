// Quiz Engine
// Handles question selection, answer checking, and scoring for a single quiz session
window.RomeGame.QuizEngine = (function () {

    // Current quiz session state
    var currentEra = null;
    var questions = [];
    var currentQuestionIndex = 0;
    var score = 0;
    var answers = []; // Track what the player answered

    return {
        // Start a new quiz for the given era
        startQuiz: function (eraId) {
            // Find the era data
            currentEra = null;
            for (var i = 0; i < window.RomeGame.eras.length; i++) {
                if (window.RomeGame.eras[i].id === eraId) {
                    currentEra = window.RomeGame.eras[i];
                    break;
                }
            }

            if (!currentEra) return false;

            // Shuffle all questions
            questions = this.shuffle(currentEra.questions.slice()).slice(0, 10);
            currentQuestionIndex = 0;
            score = 0;
            answers = [];

            return true;
        },

        // Fisher-Yates shuffle
        shuffle: function (array) {
            var arr = array.slice(); // copy
            for (var i = arr.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            return arr;
        },

        // Get the current question
        getCurrentQuestion: function () {
            if (currentQuestionIndex >= questions.length) return null;
            return questions[currentQuestionIndex];
        },

        // Get current question number (1-based)
        getQuestionNumber: function () {
            return currentQuestionIndex + 1;
        },

        // Get total number of questions
        getTotalQuestions: function () {
            return questions.length;
        },

        // Get current score
        getScore: function () {
            return score;
        },

        // Get the current era data
        getCurrentEra: function () {
            return currentEra;
        },

        // Check an answer and return the result
        checkAnswer: function (choiceIndex) {
            var question = questions[currentQuestionIndex];
            if (!question) return null;

            var isCorrect = question.choices[choiceIndex].correct;

            if (isCorrect) {
                score++;
            }

            // Record the answer
            answers.push({
                questionId: question.id,
                choiceIndex: choiceIndex,
                isCorrect: isCorrect
            });

            return {
                isCorrect: isCorrect,
                correctIndex: this.getCorrectIndex(question),
                infoPanel: question.infoPanel
            };
        },

        // Find the index of the correct answer
        getCorrectIndex: function (question) {
            for (var i = 0; i < question.choices.length; i++) {
                if (question.choices[i].correct) return i;
            }
            return -1;
        },

        // Move to the next question. Returns false if quiz is over.
        nextQuestion: function () {
            currentQuestionIndex++;
            return currentQuestionIndex < questions.length;
        },

        // Check if the quiz is finished
        isFinished: function () {
            return currentQuestionIndex >= questions.length;
        },

        // Get the final results
        getResults: function () {
            var rating = window.RomeGame.GameState.getRating(score);
            var passed = score >= window.RomeGame.GameState.PASS_THRESHOLD;

            return {
                eraId: currentEra.id,
                eraName: currentEra.name,
                score: score,
                total: questions.length,
                passed: passed,
                rating: rating,
                answers: answers
            };
        }
    };
})();
