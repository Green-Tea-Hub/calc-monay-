"use strict";

function getOptionsGroup(db, inValue = "id", inText = "-", grName = "-") {
  const optgroup = document.createElement("optgroup"); // Make optgroup
  optgroup.label = grName;

  db.forEach((object) => {
    const option = document.createElement("option");
    option.value = object[inValue];
    option.innerText = object[inText];
    optgroup.appendChild(option); // Add in optgroup option
  });

  return optgroup; // Return optgroup
}
