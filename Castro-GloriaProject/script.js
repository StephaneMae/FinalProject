function generateInputFields() {
  var jobCount = parseInt(document.getElementById("jobCountInput").value);

  var additionalFieldsDiv = document.getElementById("additionalFields");
  additionalFieldsDiv.innerHTML = ""; // Clear previous fields

  additionalFieldsDiv.classList.remove("scrollable"); // Reset scrollable class

  for (var i = 1; i <= jobCount; i++) {
    var fieldLabel = document.createElement("label");
    fieldLabel.classList.add("field-label"); // Add a CSS class for the label

    var fieldValueInput = document.createElement("input");
    fieldValueInput.type = "number";
    fieldValueInput.name = "job_value_" + i;
    fieldValueInput.placeholder = "Job Value " + i + ":";
    fieldValueInput.classList.add("field-input"); // Add a CSS class for the input field
    additionalFieldsDiv.appendChild(fieldLabel);
    additionalFieldsDiv.appendChild(fieldValueInput);
    additionalFieldsDiv.appendChild(document.createElement("br"));
  }

  if (jobCount > 5) {
    additionalFieldsDiv.classList.add("scrollable"); // Add scrollable class
  }

  toggleAdditionalFields(); // Show additional fields
}

function togglePopup() {
  var background = document.getElementById('background');
  var popup = document.getElementById('popup');

  // Toggle the display property of the background and pop-up
  background.style.display = (background.style.display === 'none') ? 'block' : 'none';
  popup.style.display = (popup.style.display === 'none') ? 'block' : 'none';
}

var popupBtn = document.getElementById('popupBtn');
popupBtn.addEventListener('click', togglePopup);

document.getElementById("closeBtn").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("background").style.display = "none";
});

document.getElementById("computeBtn").addEventListener("click", function() {
  var algorithmRadioButtons = document.getElementsByName("algorithm");
  var selectedAlgorithm;

  for (var i = 0; i < algorithmRadioButtons.length; i++) {
    if (algorithmRadioButtons[i].checked) {
      selectedAlgorithm = algorithmRadioButtons[i].value;
      break;
    }
  }

  if (selectedAlgorithm) {
    // Redirect to the corresponding page based on the selected algorithm
    switch (selectedAlgorithm) {
      case "FIFO":
        window.location.href = "fifo.html";
        break;
      case "SSTF":
        window.location.href = "sstf.html";
        break;
      case "SCAN":
        window.location.href = "scan.html";
        break;
      case "C-SCAN":
        window.location.href = "cscan.html";
        break;
      case "LOOK":
        window.location.href = "look.html";
        break;
      case "C-LOOK":
        window.location.href = "clook.html";
        break;
    }
  }
});
