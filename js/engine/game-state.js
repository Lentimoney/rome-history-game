// Game State Manager
// Handles saving/loading progress, era unlocking, and scoring
window.RomeGame.GameState = (function () {
    var STORAGE_KEY = "romeGameProgress";
    var PASS_THRESHOLD = 6; // out of 10
    var TOTAL_ERAS = 7;

    // Default state for a fresh game
    function createDefaultState() {
        var eras = {};
        for (var i = 1; i <= TOTAL_ERAS; i++) {
            eras[i] = {
                unlocked: true, // All eras available from the start
                completed: false,
                bestScore: 0,
                attempts: 0
            };
        }
        return {
            currentDifficulty: "medium",
            eras: eras
        };
    }

    var state = createDefaultState();

    return {
        PASS_THRESHOLD: PASS_THRESHOLD,
        TOTAL_ERAS: TOTAL_ERAS,

        // Load progress from localStorage
        load: function () {
            try {
                var saved = localStorage.getItem(STORAGE_KEY);
                if (saved) {
                    state = JSON.parse(saved);
                }
            } catch (e) {
                // If localStorage fails, just use default state
                state = createDefaultState();
            }
        },

        // Save current progress to localStorage
        save: function () {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            } catch (e) {
                // Silently fail if localStorage is unavailable
            }
        },

        // Get the full state (read-only copy)
        getState: function () {
            return state;
        },

        // Get/set difficulty
        getDifficulty: function () {
            return state.currentDifficulty;
        },

        setDifficulty: function (difficulty) {
            state.currentDifficulty = difficulty;
            this.save();
        },

        // Check if an era is unlocked
        isEraUnlocked: function (eraId) {
            return state.eras[eraId] && state.eras[eraId].unlocked;
        },

        // Check if an era is completed (passed)
        isEraCompleted: function (eraId) {
            return state.eras[eraId] && state.eras[eraId].completed;
        },

        // Get the best score for an era
        getBestScore: function (eraId) {
            return state.eras[eraId] ? state.eras[eraId].bestScore : 0;
        },

        // Record the result of completing an era's quiz
        completeEra: function (eraId, score) {
            var era = state.eras[eraId];
            if (!era) return;

            era.attempts += 1;

            // Update best score
            if (score > era.bestScore) {
                era.bestScore = score;
            }

            // Mark as completed if they passed
            if (score >= PASS_THRESHOLD) {
                era.completed = true;

                // Unlock the next era
                var nextEra = eraId + 1;
                if (nextEra <= TOTAL_ERAS && state.eras[nextEra]) {
                    state.eras[nextEra].unlocked = true;
                }
            }

            this.save();
        },

        // Get a rating based on score (for laurel display)
        getRating: function (score) {
            if (score === 10) return { laurels: 3, title: "Roman Consul", symbol: "\uD83C\uDF3F\uD83C\uDF3F\uD83C\uDF3F" };
            if (score >= 8) return { laurels: 2, title: "Roman Senator", symbol: "\uD83C\uDF3F\uD83C\uDF3F" };
            if (score >= 6) return { laurels: 1, title: "Roman Citizen", symbol: "\uD83C\uDF3F" };
            return { laurels: 0, title: "Plebeian", symbol: "" };
        },

        // Get overall progress as a percentage
        getOverallProgress: function () {
            var completed = 0;
            for (var i = 1; i <= TOTAL_ERAS; i++) {
                if (state.eras[i] && state.eras[i].completed) {
                    completed++;
                }
            }
            return Math.round((completed / TOTAL_ERAS) * 100);
        },

        // Check if the player has earned Imperator status (all gold)
        isImperator: function () {
            for (var i = 1; i <= TOTAL_ERAS; i++) {
                if (!state.eras[i] || state.eras[i].bestScore < 10) {
                    return false;
                }
            }
            return true;
        },

        // Reset all progress
        reset: function () {
            state = createDefaultState();
            this.save();
        }
    };
})();
