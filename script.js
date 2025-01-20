document.getElementById('fieldChoice').addEventListener('change', function () {
    const fieldChoice = parseInt(this.value);
    const engChoices = document.getElementById('engChoices');
    const marksSection = document.getElementById('marksSection');

    engChoices.style.display = 'none';
    marksSection.style.display = 'none';

    if (fieldChoice === 2) {
        engChoices.style.display = 'block';
    } else if (fieldChoice === 1) {
        marksSection.style.display = 'block';
    }
});

document.getElementById('engChoice').addEventListener('change', function () {
    document.getElementById('marksSection').style.display = 'block';
});

document.getElementById('calculateBtn').addEventListener('click', function () {
    const fieldChoice = parseInt(document.getElementById('fieldChoice').value);
    const engChoice = parseInt(document.getElementById('engChoice').value);
    const matricMarks = parseFloat(document.getElementById('matricMarks').value);
    const interMarks = parseFloat(document.getElementById('interMarks').value);
    const testScore = parseFloat(document.getElementById('testScore').value);
    let aggregate = 0;

    if (isNaN(matricMarks) || isNaN(interMarks) || isNaN(testScore)) {
        alert('Please fill in all the fields correctly!');
        return;
    }

    if (fieldChoice === 1) {
        alert('Aggregate calculation for Pre-Medical is coming soon!');
    } else if (fieldChoice === 2) {
        if (engChoice === 1) { // NUST
            aggregate = (matricMarks / 1100) * 10 + (interMarks / 550) * 15 + (testScore / 200) * 75;
        } else if (engChoice === 2) { // FAST
            aggregate = (matricMarks / 1100) * 10 + (interMarks / 550) * 40 + (testScore / 200) * 50;
        } else if (engChoice === 3) { // UET
            aggregate = (matricMarks / 1100) * 17 + (interMarks / 550) * 50 + (testScore / 400) * 33;
        } else if (engChoice === 4) { // COMSATS
            aggregate = (matricMarks / 1100) * 10 + (interMarks / 550) * 40 + (testScore / 100) * 50;
        }

        alert(`Your aggregate is: ${aggregate.toFixed(2)}%`);
    }
});
