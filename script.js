// Listen for changes in the field choice dropdown
document.getElementById('fieldChoice').addEventListener('change', function () {
    const fieldChoice = parseInt(this.value);

    // Hide all sections initially
    document.getElementById('medChoices').style.display = 'none';
    document.getElementById('engChoices').style.display = 'none';
    document.getElementById('marksSection').style.display = 'none';

    // Reset any previous selections
    document.getElementById('medChoice').value = '';
    document.getElementById('engChoice').value = '';
    document.getElementById('matricMarks').value = '';
    document.getElementById('interMarks').value = '';
    document.getElementById('testScore').value = '';

    if (fieldChoice === 1) { // Pre-Medical
        // Show popup for "Coming Soon"
        alert('Coming Soon for Pre-Medical!');
        return; // Prevent further selection of test and university
    }

    if (fieldChoice === 2) { // Pre-Engineering/ICS
        // Show the Engineering/ICS university choice
        document.getElementById('engChoices').style.display = 'block';
    }

    // Show the marks input section
    document.getElementById('marksSection').style.display = 'block';
});

// Handle submission of the form (Calculate Aggregate)
document.getElementById('calculateBtn').addEventListener('click', function () {
    const fieldChoice = parseInt(document.getElementById('fieldChoice').value);
    const matricMarks = parseFloat(document.getElementById('matricMarks').value);
    const interMarks = parseFloat(document.getElementById('interMarks').value);
    const testScore = parseFloat(document.getElementById('testScore').value);
    let aggregate = 0;

    if (isNaN(matricMarks) || isNaN(interMarks) || (isNaN(testScore) && fieldChoice !== 1)) {
        alert('Please fill in all the fields correctly!');
        return;
    }

    // Logic to calculate aggregate based on the selections
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
