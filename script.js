document.getElementById('field').addEventListener('change', function() {
    var fieldChoice = this.value;
    document.getElementById('medChoiceContainer').style.display = (fieldChoice == '1') ? 'block' : 'none';
    document.getElementById('engChoiceContainer').style.display = (fieldChoice == '2') ? 'block' : 'none';
});

document.getElementById('calculateBtn').addEventListener('click', function() {
    var fieldChoice = document.getElementById('field').value;
    var matricMarks = parseFloat(document.getElementById('matricMarks').value);
    var interMarks = parseFloat(document.getElementById('interMarks').value);
    var entryMarks = parseFloat(document.getElementById('entryMarks').value);
    var aggregate;

    if (isNaN(matricMarks) || isNaN(interMarks) || isNaN(entryMarks)) {
        alert("Please fill in all the fields.");
        return;
    }

    if (fieldChoice == '1') {
        // Pre-Medical
        aggregate = (matricMarks / 1100 * 10) + (interMarks / 550 * 15) + (entryMarks / 200 * 75);
    } else if (fieldChoice == '2') {
        var engChoice = document.getElementById('engChoice').value;
        if (engChoice == '1') {
            // NUST
            aggregate = (matricMarks / 1100 * 10) + (interMarks / 550 * 15) + (entryMarks / 200 * 75);
        } else if (engChoice == '2') {
            // FAST
            aggregate = (matricMarks / 1100 * 10) + (interMarks / 550 * 40) + (entryMarks / 200 * 50);
        } else if (engChoice == '3') {
            // UET
            aggregate = (matricMarks / 1100 * 17) + (interMarks / 550 * 50) + (entryMarks / 400 * 33);
        } else if (engChoice == '4') {
            // COMSATS
            aggregate = (matricMarks / 1100 * 10) + (interMarks / 550 * 40) + (entryMarks / 100 * 50);
        }
    }

    // Display Result in Popup
    document.getElementById('aggregateResult').textContent = aggregate.toFixed(2);
    document.getElementById('resultPopup').style.display = 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('resultPopup').style.display = 'none';
});
