document.getElementById('fieldChoice').addEventListener('change', function () {
    const fieldChoice = parseInt(this.value);
    const engChoices = document.getElementById('engChoices');
    const marksSection = document.getElementById('marksSection');
    const comingSoonPopup = document.getElementById('comingSoonPopup');
    
    // Hide all sections initially
    engChoices.style.display = 'none';
    marksSection.style.display = 'none';
    comingSoonPopup.style.display = 'none'; // Hide the popup

    // Reset previous selections
    document.getElementById('engChoice').value = '';
    document.getElementById('matricMarks').value = '';
    document.getElementById('interMarks').value = '';
    document.getElementById('testScore').value = '';

    if (fieldChoice === 1) { // Pre-Medical
        // Show Coming Soon popup and stop further actions
        comingSoonPopup.style.display = 'block';
        return; // Prevent further actions
    }

    if (fieldChoice === 2) { // Pre-Engineering/ICS
        // Show the Engineering/ICS university choice
        engChoices.style.display = 'block';
    }
    
    // Show the marks input section
    marksSection.style.display = 'block';
});

document.getElementById('calculateBtn').addEventListener('click', function () {
    const fieldChoice = parseInt(document.getElementById('fieldChoice').value);
    const matricMarks = parseFloat(document.getElementById('matricMarks').value);
    const interMarks = parseFloat(document.getElementById('interMarks').value);
    const testScore = parseFloat(document.getElementById('testScore').value);
    let aggregate = 0;

    // Input validation
    if (isNaN(matricMarks) || isNaN(interMarks) || (isNaN(testScore) && fieldChoice !== 1)) {
        alert('Please fill in all the fields correctly!');
        return;
    }

    if (fieldChoice === 2) { // Pre-Engineering/ICS
        const engChoice = parseInt(document.getElementById('engChoice').value);

        if (engChoice === 1) {
            aggregate = (matricMarks / 1100) * 10 + (interMarks / 550) * 15 + (testScore / 200) * 75;
            alert(`Your aggregate for NUST is: ${aggregate.toFixed(2)}%`);
        } else if (engChoice === 2) {
            aggregate = (matricMarks / 1100) * 10 + (interMarks / 550) * 40 + (testScore / 200) * 50;
            alert(`Your aggregate for FAST is: ${aggregate.toFixed(2)}%`);
        } else if (engChoice === 3) {
            aggregate = (matricMarks / 1100) * 17 + (interMarks / 550) * 50 + (testScore / 400) * 33;
            alert(`Your aggregate for UET is: ${aggregate.toFixed(2)}%`);
        } else if (engChoice === 4) {
            aggregate = (matricMarks / 1100) * 10 + (interMarks / 550) * 40 + (testScore / 100) * 50;
            alert(`Your aggregate for COMSATS is: ${aggregate.toFixed(2)}%`);
        }
    }
});

function closePopup() {
    document.getElementById('comingSoonPopup').style.display = 'none';
}
