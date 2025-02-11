// Get the checkbox element
const checkbox = document.getElementById('myCheckbox');

// Add an event listener to detect when the checkbox is clicked
checkbox.addEventListener('click', function() {
    if (checkbox.checked) {
        console.log("Checkbox is checked");
    } else {
        console.log("Checkbox is unchecked");
    }
});