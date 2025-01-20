document.getElementById('fieldChoice').addEventListener('change', function () {
    const fieldChoice = parseInt(this.value);
    const engChoices = document.getElementById('engChoices');
    const marksSection = document.getElementById('marksSection');
    const comingSoonPopup = document.getElementById('comingSoonPopup');
    
    // Hide all sections initially
    engChoices.style.display = 'none';
    marksSection.style.display = 'none';
    comingSoonPopup.style.display = 'none'; // Hide the popup
    document.getElementById('testLabel').innerText = "Enter Entry Test Marks:";

    // Reset previous selections
    document.getElementById('engChoice').value = '';
    document.getElementById('matricMarks').value = '';
    document.getElementById('interMarks').value = '';
    document.getElementById('testScore').value = '';

    if (fieldChoice === 1) { // Pre-Medical
        comingSoonPopup.style.display = 'block';
        return; // Stop further actions
    }

    if (fieldChoice === 2 || fieldChoice === 3) { // Pre-Engineering or ICS
        engChoices.style.display = 'block';
    }
    
    // Show the marks input section
    marksSection.style.display = 'block';
});

document.getElementById('engChoice').addEventListener('change', function () {
    const engChoice = parseInt(this.value);
    const fieldChoice = parseInt(document.getElementById('fieldChoice').value);

    if (fieldChoice === 2 && engChoice === 3) { // Pre-Engineering → UET
        document.getElementById('testLabel').innerText = "Enter ECAT Marks:";
    } else {
        document.getElementById('testLabel').innerText = "Enter Entry Test Marks:";
    }
});

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

    if (fieldChoice === 2) { // Pre-Engineering
        const engChoice = parseInt(document.getElementById('engChoice').value);

        if (engChoice === 1) { // NUST
            aggregate = (matricMarks / 1100) * 10 + (interMarks / 550) * 15 + (testScore / 200) * 75;
            alert(`Your aggregate for NUST is: ${aggregate.toFixed(2)}%`);
        } else if (engChoice === 2) { // FAST
            aggregate = (matricMarks / 1100) * 10 + (interMarks / 550) * 40 + (testScore / 200) * 50;
            alert(`Your aggregate for FAST is: ${aggregate.toFixed(2)}%`);
        } else if (engChoice === 3) { // UET
            aggregate = (matricMarks / 1100) * 17 + (interMarks / 550) * 33 + (testScore / 400) * 50;
            alert(`Your aggregate for UET is: ${aggregate.toFixed(2)}%`);
        } else if (engChoice === 4) { // COMSATS
            aggregate = (matricMarks / 1100) * 10 + (interMarks / 550) * 40 + (testScore / 100) * 50;
            alert(`Your aggregate for COMSATS is: ${aggregate.toFixed(2)}%`);
        }
    } else if (fieldChoice === 3) { // ICS
        alert("The aggregate calculation is the same for ICS.");
    }
});

function closePopup() {
    document.getElementById('comingSoonPopup').style.display = 'none';
}
