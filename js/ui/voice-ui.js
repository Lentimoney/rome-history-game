// Voice UI
// Text-to-speech narration using the Web Speech API
window.RomeGame.VoiceUI = (function () {

    var enabled = false;
    var STORAGE_KEY = "rome-voice-enabled";

    function isSupported() {
        return "speechSynthesis" in window;
    }

    function load() {
        try {
            enabled = localStorage.getItem(STORAGE_KEY) === "true";
        } catch (e) {
            enabled = false;
        }
    }

    function save() {
        try {
            localStorage.setItem(STORAGE_KEY, enabled ? "true" : "false");
        } catch (e) {}
    }

    function stop() {
        if (isSupported()) {
            window.speechSynthesis.cancel();
        }
    }

    function speak(text) {
        if (!enabled || !isSupported()) return;
        stop();
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.92;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        window.speechSynthesis.speak(utterance);
    }

    function updateButton() {
        var btn = document.getElementById("btn-voice");
        if (!btn) return;
        if (enabled) {
            btn.textContent = "Voice: On";
            btn.classList.add("voice-active");
            btn.setAttribute("aria-pressed", "true");
        } else {
            btn.textContent = "Voice: Off";
            btn.classList.remove("voice-active");
            btn.setAttribute("aria-pressed", "false");
        }
    }

    return {
        init: function () {
            if (!isSupported()) {
                var btn = document.getElementById("btn-voice");
                if (btn) {
                    btn.style.display = "none";
                }
                return;
            }
            load();
            updateButton();

            var btn = document.getElementById("btn-voice");
            if (btn) {
                btn.addEventListener("click", function () {
                    enabled = !enabled;
                    save();
                    updateButton();
                    if (!enabled) {
                        stop();
                    }
                });
            }
        },

        // Speak a question aloud
        speakQuestion: function (questionText) {
            speak(questionText);
        },

        // Speak the result and a summary of the info panel
        speakResult: function (isCorrect, infoPanel) {
            var resultWord = isCorrect ? "Correct!" : "Incorrect.";
            var summary = infoPanel && infoPanel.body ? infoPanel.body : "";
            var text = resultWord + " " + summary;
            speak(text);
        },

        // Stop any speech in progress
        stop: stop,

        isEnabled: function () { return enabled; }
    };
})();
