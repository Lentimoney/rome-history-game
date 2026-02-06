// Timeline UI
// Renders the vertical scrollable timeline with events grouped by era
window.RomeGame.TimelineUI = (function () {

    function formatYear(year) {
        if (year < 0) {
            return Math.abs(year) + " BC";
        }
        return year + " AD";
    }

    // Find the era data by ID
    function getEraById(eraId) {
        for (var i = 0; i < window.RomeGame.eras.length; i++) {
            if (window.RomeGame.eras[i].id === eraId) {
                return window.RomeGame.eras[i];
            }
        }
        return null;
    }

    return {
        render: function () {
            var container = document.getElementById("timeline-content");
            if (!container) return;

            var events = window.RomeGame.timelineEvents;

            var html = '';

            // Back button bar
            html += '<div class="timeline-back-bar">';
            html += '  <button class="btn-secondary" onclick="window.RomeGame.Screens.showEraSelect()">Back to Eras</button>';
            html += '  <h2>Timeline of Rome</h2>';
            html += '  <div style="width: 100px;"></div>'; // spacer for centering
            html += '</div>';

            html += '<div class="meander-border"></div>';

            html += '<div class="timeline-container">';
            html += '  <div class="timeline-line"></div>';

            var currentEraId = 0;
            var side = "left";

            for (var i = 0; i < events.length; i++) {
                var event = events[i];

                // Insert era label when era changes
                if (event.eraId !== currentEraId) {
                    currentEraId = event.eraId;
                    var era = getEraById(currentEraId);
                    var eraLabel = era ? era.name : "Era " + currentEraId;
                    html += '<div class="timeline-era-label">';
                    html += '  <span>' + eraLabel + '</span>';
                    html += '</div>';
                    side = "left"; // reset side at each new era
                }

                // Build the event row
                html += '<div class="timeline-event ' + side + '">';

                if (side === "left") {
                    // Card on left, spacer on right
                    html += '<div class="timeline-card" data-index="' + i + '">';
                    html += '  <div class="timeline-year">' + formatYear(event.year) + '</div>';
                    html += '  <h4>' + event.title + '</h4>';
                    html += '  <div class="timeline-description">' + event.description + '</div>';
                    html += '</div>';
                    html += '<div class="timeline-marker-wrapper"><div class="timeline-marker ' + event.type + '"></div></div>';
                    html += '<div class="timeline-spacer"></div>';
                } else {
                    // Spacer on left, card on right
                    html += '<div class="timeline-spacer"></div>';
                    html += '<div class="timeline-marker-wrapper"><div class="timeline-marker ' + event.type + '"></div></div>';
                    html += '<div class="timeline-card" data-index="' + i + '">';
                    html += '  <div class="timeline-year">' + formatYear(event.year) + '</div>';
                    html += '  <h4>' + event.title + '</h4>';
                    html += '  <div class="timeline-description">' + event.description + '</div>';
                    html += '</div>';
                }

                html += '</div>'; // timeline-event

                // Alternate sides
                side = (side === "left") ? "right" : "left";
            }

            html += '</div>'; // timeline-container

            container.innerHTML = html;

            // Add click handlers to expand/collapse cards
            var cards = container.querySelectorAll(".timeline-card");
            for (var j = 0; j < cards.length; j++) {
                cards[j].addEventListener("click", function () {
                    // Toggle expanded
                    if (this.classList.contains("expanded")) {
                        this.classList.remove("expanded");
                    } else {
                        // Collapse any other expanded card
                        var allCards = container.querySelectorAll(".timeline-card.expanded");
                        for (var k = 0; k < allCards.length; k++) {
                            allCards[k].classList.remove("expanded");
                        }
                        this.classList.add("expanded");
                    }
                });
            }
        }
    };
})();
