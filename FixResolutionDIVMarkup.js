// The below 2 buttons will look the same on the UI
// but one will appear when first creating a KCS,
// another when updating an existing one
const validationButtons = document.querySelectorAll("div[data-test-id='createButton-menu-button'], div[data-test-id='updateButton-menu-button']");

for (let button of validationButtons) {
    button.addEventListener('click', function (e) {
        handleDIV();
    });
}
function handleDIV() {
    let managedBy = document.querySelector("div[data-test-id='sectionSelector-section']"); // Visible when sidebar is open
    let section = document.querySelector("div[data-test-id='section-name']"); // Visible when Sidebar is closed
    if (managedBy && managedBy.textContent == "Fast Track" || (section && section.textContent == "Fast Track")) { // Only runs if on a KCS
        let allEditorH2 = tinymce.activeEditor.contentDocument.getElementsByTagName("h2");
        for (let i = 0; i < allEditorH2.length; i++) {
            if ((allEditorH2[i].textContent == "Resolution" || allEditorH2[i].textContent == "Additional Information") &&
                allEditorH2[i].nextSibling.tagName != 'DIV') {
                tinymce.dom.DomQuery(allEditorH2[i]).nextUntil().wrapAll('<div>');
            }
        }
    }
}