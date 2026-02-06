// App Initialization
// Wires everything together and starts the game
(function () {

    // Wait for the DOM to be ready
    document.addEventListener("DOMContentLoaded", function () {

        // Load saved progress
        window.RomeGame.GameState.load();

        // --- Title Screen Buttons ---

        // Begin Journey button
        var beginBtn = document.getElementById("btn-begin");
        if (beginBtn) {
            beginBtn.addEventListener("click", function () {
                window.RomeGame.Screens.showEraSelect();
            });
        }

        // Reset Progress button
        var resetBtn = document.getElementById("btn-reset");
        if (resetBtn) {
            resetBtn.addEventListener("click", function () {
                if (confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
                    window.RomeGame.GameState.reset();
                    window.RomeGame.Screens.showTitle();
                    updateTitleScreen();
                }
            });
        }

        // --- Header Nav Buttons ---

        var navEraSelect = document.getElementById("nav-era-select");
        if (navEraSelect) {
            navEraSelect.addEventListener("click", function () {
                window.RomeGame.Screens.showEraSelect();
            });
        }

        var navHome = document.getElementById("nav-home");
        if (navHome) {
            navHome.addEventListener("click", function () {
                window.RomeGame.Screens.showTitle();
            });
        }

        var navTimeline = document.getElementById("nav-timeline");
        if (navTimeline) {
            navTimeline.addEventListener("click", function () {
                window.RomeGame.Screens.showTimeline();
            });
        }

        // --- Initialize ---

        updateTitleScreen();

        // Show title screen
        window.RomeGame.Screens.showTitle();
    });

    function updateTitleScreen() {
        // Show "Continue" instead of "Begin" if there's existing progress
        var progress = window.RomeGame.GameState.getOverallProgress();
        var beginBtn = document.getElementById("btn-begin");
        if (beginBtn && progress > 0) {
            beginBtn.textContent = "Continue Journey";
        } else if (beginBtn) {
            beginBtn.textContent = "Begin Journey";
        }
    }

})();
