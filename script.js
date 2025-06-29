document.addEventListener('DOMContentLoaded', function() {
    // --- Dynamic Time in Footer (Recurring Interval) ---
    const currentTimeSpan = document.getElementById('currentTime');
    function updateTime() {
        if (currentTimeSpan) {
            const now = new Date();
            currentTimeSpan.textContent = `Current Time: ${now.toLocaleTimeString('en')}`;
        }
    }
    if (currentTimeSpan) {
        updateTime(); // Initial call
        setInterval(updateTime, 1000); // Update every second
    }
});
