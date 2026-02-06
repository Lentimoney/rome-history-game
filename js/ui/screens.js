// Screen Manager
// Handles transitions between the different game screens
window.RomeGame.Screens = (function () {

    // All screen element IDs
    var screenIds = [
        "title-screen",
        "era-select-screen",
        "quiz-screen",
        "results-screen",
        "timeline-screen"
    ];

    return {
        // Show a specific screen, hiding all others
        show: function (screenId) {
            for (var i = 0; i < screenIds.length; i++) {
                var el = document.getElementById(screenIds[i]);
                if (el) {
                    if (screenIds[i] === screenId) {
                        el.classList.add("active");
                    } else {
                        el.classList.remove("active");
                    }
                }
            }
            // Scroll to top when switching screens
            window.scrollTo(0, 0);
        },

        showTitle: function () {
            this.show("title-screen");
            this.updateProgressBar();
        },

        showEraSelect: function () {
            this.show("era-select-screen");
            window.RomeGame.EraSelectUI.render();
            this.updateProgressBar();
        },

        showQuiz: function () {
            this.show("quiz-screen");
        },

        showResults: function () {
            this.show("results-screen");
            this.updateProgressBar();
        },

        showTimeline: function () {
            this.show("timeline-screen");
            window.RomeGame.TimelineUI.render();
        },

        // Update the footer progress bar
        updateProgressBar: function () {
            var progress = window.RomeGame.GameState.getOverallProgress();
            var fill = document.getElementById("progress-fill");
            if (fill) {
                fill.style.width = progress + "%";
            }
            var label = document.getElementById("progress-label");
            if (label) {
                label.textContent = progress + "% Complete";
            }
        }
    };
})();
