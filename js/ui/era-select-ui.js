// Era Selection UI
// Renders the era selection screen with locked/unlocked/completed states
window.RomeGame.EraSelectUI = (function () {

    var ROMAN_NUMERALS = ["", "I", "II", "III", "IV", "V", "VI", "VII"];

    return {
        // Render the era select screen
        render: function () {
            var container = document.getElementById("era-list");
            if (!container) return;

            var eras = window.RomeGame.eras;
            var gameState = window.RomeGame.GameState;

            var html = '';

            for (var i = 0; i < eras.length; i++) {
                var era = eras[i];
                var unlocked = gameState.isEraUnlocked(era.id);
                var completed = gameState.isEraCompleted(era.id);
                var bestScore = gameState.getBestScore(era.id);
                var rating = gameState.getRating(bestScore);

                var cardClass = "era-card";
                if (!unlocked) cardClass += " locked";
                else if (completed) cardClass += " completed";

                html += '<div class="' + cardClass + '"';
                if (unlocked) {
                    html += ' onclick="window.RomeGame.QuizUI.startQuiz(' + era.id + ')"';
                }
                html += '>';

                // Era number circle
                html += '<div class="era-number">' + ROMAN_NUMERALS[era.id] + '</div>';

                // Era info
                html += '<div class="era-info">';
                html += '  <h3>' + era.name + '</h3>';
                html += '  <span class="era-dates">' + era.subtitle + '</span>';
                html += '  <p class="era-description">' + era.description + '</p>';
                html += '</div>';

                // Status
                html += '<div class="era-status">';
                if (!unlocked) {
                    html += '<div class="lock-icon">&#128274;</div>';
                    html += '<div style="font-size: 0.75rem; color: var(--rome-stone);">Locked</div>';
                } else if (completed) {
                    html += '<div class="laurel-display">' + rating.symbol + '</div>';
                    html += '<div class="score-display">' + bestScore + '/10</div>';
                } else {
                    html += '<div style="color: var(--rome-gold); font-size: 0.85rem;">Begin</div>';
                }
                html += '</div>';

                html += '</div>'; // era-card
            }

            container.innerHTML = html;
        }
    };
})();
