function toggleDarkMode() {
    // Toggle classes for sun and moon icons
    document.querySelector('.sun').classList.toggle('sun-toggle');
    document.querySelector('.moon').classList.toggle('moon-toggle');

    // Toggle dark mode styles for the page
    document.body.classList.toggle('dark-mode');
}

// Event listener for the theme toggle button
document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleDarkMode);
    }
});
