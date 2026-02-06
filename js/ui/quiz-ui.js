// Quiz UI
// Renders questions, handles answer clicks, and displays info panels
window.RomeGame.QuizUI = (function () {

    var quizContainer = null;
    var answered = false;

    var LETTERS = ["A", "B", "C", "D"];

    return {
        // Start a quiz for the given era
        startQuiz: function (eraId) {
            var success = window.RomeGame.QuizEngine.startQuiz(eraId);
            if (!success) return;

            answered = false;
            window.RomeGame.Screens.showQuiz();
            this.renderQuestion();
        },

        // Render the current question
        renderQuestion: function () {
            quizContainer = document.getElementById("quiz-content");
            if (!quizContainer) return;

            var engine = window.RomeGame.QuizEngine;
            var question = engine.getCurrentQuestion();
            var era = engine.getCurrentEra();

            if (!question) return;

            answered = false;

            var html = '';

            // Quiz header bar
            html += '<div class="quiz-header">';
            html += '  <span class="quiz-era-name">' + era.name + '</span>';
            html += '  <span class="difficulty-badge ' + question.difficulty + '">' + question.difficulty + '</span>';
            html += '  <span class="quiz-progress">' + engine.getQuestionNumber() + ' / ' + engine.getTotalQuestions() + '</span>';
            html += '  <span class="quiz-score">Score: ' + engine.getScore() + '</span>';
            html += '</div>';

            // Question card
            html += '<div class="question-card">';
            html += '  <p class="question-text">' + question.text + '</p>';
            html += '</div>';

            // Answer choices
            html += '<div class="choices-grid">';
            for (var i = 0; i < question.choices.length; i++) {
                html += '<button class="choice-btn" data-index="' + i + '">';
                html += '  <span class="choice-letter">' + LETTERS[i] + '</span>';
                html += '  <span class="choice-text">' + question.choices[i].text + '</span>';
                html += '</button>';
            }
            html += '</div>';

            // Info panel placeholder (filled after answering)
            html += '<div id="info-panel-container"></div>';

            quizContainer.innerHTML = html;

            // Attach click listeners to choice buttons
            var buttons = quizContainer.querySelectorAll(".choice-btn");
            for (var j = 0; j < buttons.length; j++) {
                buttons[j].addEventListener("click", this.handleAnswer.bind(this));
            }
        },

        // Handle when a player clicks an answer
        handleAnswer: function (event) {
            if (answered) return; // Prevent double-clicking
            answered = true;

            // Find the button (might have clicked the inner span)
            var btn = event.target;
            while (btn && !btn.classList.contains("choice-btn")) {
                btn = btn.parentElement;
            }
            if (!btn) return;

            var choiceIndex = parseInt(btn.getAttribute("data-index"), 10);
            var result = window.RomeGame.QuizEngine.checkAnswer(choiceIndex);

            // Highlight correct and incorrect answers
            var buttons = quizContainer.querySelectorAll(".choice-btn");
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.add("disabled");
                if (i === result.correctIndex) {
                    buttons[i].classList.add("correct");
                }
                if (i === choiceIndex && !result.isCorrect) {
                    buttons[i].classList.add("incorrect");
                }
            }

            // Show info panel
            this.showInfoPanel(result);
        },

        // Display the info panel after answering
        showInfoPanel: function (result) {
            var container = document.getElementById("info-panel-container");
            if (!container) return;

            var info = result.infoPanel;
            var resultClass = result.isCorrect ? "correct" : "incorrect";
            var resultText = result.isCorrect ? "Correct!" : "Incorrect";

            var html = '<div class="info-panel">';

            // Result header
            html += '<div class="info-panel-result ' + resultClass + '">';
            html += resultText;
            html += '</div>';

            // Title
            html += '<h4>' + info.title + '</h4>';

            // Body text
            html += '<p class="info-panel-body">' + info.body + '</p>';

            // Podcast reference
            if (info.podcastRef) {
                html += '<p class="info-panel-podcast">';
                html += 'Mike Duncan\'s History of Rome: ' + info.podcastRef;
                html += '</p>';
            }

            // Fun fact
            if (info.funFact) {
                html += '<div class="info-panel-funfact">';
                html += '<strong>Did you know?</strong> ' + info.funFact;
                html += '</div>';
            }

            // Continue button
            html += '<button class="btn-primary" id="btn-continue">Continue</button>';

            html += '</div>';

            container.innerHTML = html;

            // Scroll the info panel into view
            container.scrollIntoView({ behavior: "smooth", block: "nearest" });

            // Attach continue button listener
            var continueBtn = document.getElementById("btn-continue");
            continueBtn.addEventListener("click", this.handleContinue.bind(this));
        },

        // Handle the "Continue" button after reading the info panel
        handleContinue: function () {
            var engine = window.RomeGame.QuizEngine;
            var hasMore = engine.nextQuestion();

            if (hasMore) {
                this.renderQuestion();
            } else {
                // Quiz is finished — show results
                this.showResults();
            }
        },

        // Show the results screen
        showResults: function () {
            var results = window.RomeGame.QuizEngine.getResults();

            // Save the score
            window.RomeGame.GameState.completeEra(results.eraId, results.score);

            var container = document.getElementById("results-content");
            if (!container) return;

            var html = '<div class="results-card">';

            // Laurel decoration
            html += '<div class="results-laurel">' + results.rating.symbol + '</div>';

            // Era name
            html += '<h2>' + results.eraName + '</h2>';

            // Score
            html += '<div class="results-score">' + results.score + ' / ' + results.total + '</div>';

            // Rating title
            html += '<div class="results-rating">' + results.rating.title + '</div>';

            // Message
            if (results.passed) {
                if (results.eraId < window.RomeGame.GameState.TOTAL_ERAS) {
                    html += '<p class="results-message">Well done! You\u2019ve unlocked the next era of Roman history. The journey continues...</p>';
                } else {
                    html += '<p class="results-message">Magnificent! You\u2019ve completed the final era. You\u2019ve journeyed through the full history of Rome\u2019s rise!</p>';
                }
            } else {
                html += '<p class="results-message">You need ' + window.RomeGame.GameState.PASS_THRESHOLD + ' correct answers to unlock the next era. Study up and try again \u2014 Rome wasn\u2019t built in a day!</p>';
            }

            // Buttons
            html += '<div class="results-buttons">';

            if (results.passed && results.eraId < window.RomeGame.GameState.TOTAL_ERAS) {
                html += '<button class="btn-primary" onclick="window.RomeGame.QuizUI.startQuiz(' + (results.eraId + 1) + ')">Next Era</button>';
            }

            html += '<button class="btn-secondary" onclick="window.RomeGame.QuizUI.startQuiz(' + results.eraId + ')">Replay</button>';
            html += '<button class="btn-secondary" onclick="window.RomeGame.Screens.showEraSelect()">Era Select</button>';

            html += '</div>'; // results-buttons
            html += '</div>'; // results-card

            container.innerHTML = html;
            window.RomeGame.Screens.showResults();
        }
    };
})();
