// Add your JavaScript code here
document.addEventListener('DOMContentLoaded', function() {
    // Get the copy link element
    var copyLink = document.getElementById('copy-button');

    // Initialize clipboard.js
    new ClipboardJS(copyLink);

    // Add event listener for  copy
    copyLink.addEventListener('click', function() {
        var clipboard = new ClipboardJS(copyLink);
        clipboard.on('success', function(e) {
            alert('UPI ID is copied to your clipboard!');
        });
        clipboard.on('error', function(e) {
            alert('Sorry, UPI ID could not be copied to your clipboard.');
        });
    });
});