// Add your JavaScript code here
document.addEventListener('DOMContentLoaded', function() {
    // Get the copy link element
    var copyLink = document.getElementById('copy-link');

    // Initialize clipboard.js
    new ClipboardJS(copyLink);

    // Add event listener for successful copy
    copyLink.addEventListener('click', function() {
        alert('Text copied to clipboard!');
    });
});