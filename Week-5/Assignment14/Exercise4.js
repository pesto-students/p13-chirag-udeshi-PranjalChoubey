// Select all the radio buttons
const radios = document.querySelectorAll('input[type=radio]');

// Add a change event listener to each radio button
for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', updateScore);
}

// Define the updateScore function
function updateScore() {
  // Select all the radio buttons that have been checked
  const checkedRadios = document.querySelectorAll('input[type=radio]:checked');
  
  // Check if one button from each property has been selected
  if (checkedRadios.length === 10) {
    // Hide the warning label
    document.getElementById('warning').style.display = 'none';
    
    // Compute the vulnerability score
    const scope = parseFloat(document.querySelector('input[name=SCOPE]:checked').value);
    const sensitivity = parseFloat(document.querySelector('input[name=SENSITIVITY]:checked').value);
    const integrity = parseFloat(document.querySelector('input[name=INTEGRITY]:checked').value);
    const availability = parseFloat(document.querySelector('input[name=AVAILABILITY]:checked').value);
    const attackVector = parseFloat(document.querySelector('input[name=AV]:checked').value);
    const attackComplexity = parseFloat(document.querySelector('input[name=AC]:checked').value);
    const privilegeRequired = parseFloat(document.querySelector('input[name=PR]:checked').value);
    const userInteraction = parseFloat(document.querySelector('input[name=UI]:checked').value);
    
    let impact = 0;
    if (scope === 1) {
      impact = Math.max(sensitivity, integrity, availability);
    } else {
      impact = 7.52 * (sensitivity * integrity * availability);
    }
    
    let exploitability = 20 * attackVector * attackComplexity * privilegeRequired * userInteraction;
    
    let score = (1 - (1 - impact) * (1 - exploitability)) * ((3.326258289 * scope) + (1.1 * impact));
    score = Math.round(score * 10) / 10;
    score = Math.min(Math.max(score, 0), 10);
    
    // Update the vulnerability score
    document.getElementById('score').textContent = score.toFixed(1);
  }
}