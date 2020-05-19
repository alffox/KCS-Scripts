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
            handleDIV(); // Runs the DIV checking function/autofix
        });
    }
}

function handleDIV() {
    // Get document type/section
    var managedBy = document.querySelector("div[data-test-id='sectionSelector-section']"); // Visible when sidebar is open
    var section = document.querySelector("div[data-test-id='section-name']"); // Visible when Sidebar is closed

    // Only runs if on a KCS
    if (managedBy && managedBy.textContent == "Fast Track" || (section && section.textContent == "Fast Track")) {
        console.log("The current article is a KCS, proceeding with DIV fixing");

        const allEditorH2 = tinymce.activeEditor.contentDocument.getElementsByTagName("h2");
        let resolutionH2;
        let additionalInformationH2;

        fixDIV(allEditorH2, resolutionH2, "Resolution");
        fixDIV(allEditorH2, additionalInformationH2, "Additional Information");

    } else {
        console.log("The current article is a KCS, proceeding with DIV fixing, script will now exit");
        return;
    }
}

function fixDIV(allEditorH2, KCSH2Elem, KCSH2Text) {
    for (var i = 0; i < allEditorH2.length; i++) {
        if (allEditorH2[i].textContent == KCSH2Text) { // Finds the Resolution <h2> node
            KCSH2Elem = allEditorH2[i];
            if (KCSH2Elem.nextSibling.tagName != 'DIV') {
                tinymce.dom.DomQuery(KCSH2Elem.nextSibling).wrapAll('<div>'); // Adds DIVs around the resolution text, if missing
                console.log('No DIV was found after ' + KCSH2Text + ', the script added it');
            } else {
                console.log('markup after ' + KCSH2Text + ' is ok, no changes done');
            }
        }
    }
}