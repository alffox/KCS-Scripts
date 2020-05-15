let validationButtons = [];

// The below 2 buttons will look the same on the UI
// but one will appear when first creating a KCS,
// another when updating an existing one
const createButton = document.querySelector("div[data-test-id='createButton-menu-button']");
const updateButton = document.querySelector("div[data-test-id='updateButton-menu-button']");

validationButtons.push(createButton, updateButton);
for (i = 0; i < validationButtons.length; i++) {
    if (validationButtons[i]) { // Attach event listener only to the found button
        validationButtons[i].addEventListener('click', function () {
            checkDIV(); // Runs the DIV checking function/autofix
        });
    }
}

function checkDIV() {
    const allEditorH2 = tinymce.activeEditor.contentDocument.getElementsByTagName("h2");
    let resolutionH2;
    for (var i = 0; i < allEditorH2.length; i++) {
        if (allEditorH2[i].textContent == "Resolution") { // Finds the Resolution <h2> node
            resolutionH2 = allEditorH2[i];
            if (resolutionH2.nextSibling.tagName != 'DIV') {
                tinymce.dom.DomQuery(resolutionH2.nextSibling).wrapAll('<div>'); // Adds DIVs around the resolution text, if missing
                console.log('No DIV was found, the script added it');
            } else {
                console.log('markup is ok, no changes done');
            }
        }
    }
}