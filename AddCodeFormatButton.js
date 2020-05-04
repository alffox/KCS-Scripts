// Inject this script into the page where the TinyMCE Editor toolbar appears in order to add a button that toggles the inline <code></code> markup

// Get the buttons toolbar
var toolbar = document.getElementsByClassName("ssc-view-3df91d6a ssc-group-f69f19c1")[1];

// Create the code format container button
var codeFormatButton = document.createElement('div');
codeFormatButton.classList.add('ssc-view-3df91d6a', 'src-components-EditorToolbar-ToolbarButton---button---2IfvR');
codeFormatButton.setAttribute('tabindex', '0');
codeFormatButton.setAttribute('role', 'button');
codeFormatButton.setAttribute('id', 'custom-code-format-button');
codeFormatButton.setAttribute('data-test-id', 'toolbarCodeFormatButton');

// Create the code format label
var codeFormatLabel = document.createElement('div');
codeFormatLabel.classList.add('src-components-EditorToolbar-ToolbarButton---label---PACxZ');
codeFormatLabel.setAttribute('title', 'Code Format');

// Create the code format icon
var codeFormatIcon = document.createElement('img');
codeFormatIcon.setAttribute('src', 'https://www.tiny.cloud/docs/images/icons/code-sample.svg'); // Icon taken from https://www.tiny.cloud/docs/advanced/editor-icon-identifiers/
codeFormatIcon.setAttribute('alt', "code format")

// Add icon to the label
codeFormatLabel.appendChild(codeFormatIcon);

// Add the label to the button
codeFormatButton.appendChild(codeFormatLabel);

// Add the button to the toolbar
toolbar.appendChild(codeFormatButton);

// API: https://www.tiny.cloud/docs/api/tinymce/tinymce.formatter/
// Register the button functionality
tinymce.activeEditor.formatter.register('codeformat', {
    inline: 'code'
});

// Add function to the button
codeFormatButton.addEventListener("click", function () {
    tinymce.activeEditor.formatter.toggle('codeformat');
});