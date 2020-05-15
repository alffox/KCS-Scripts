var underlineButtonListItem = document.createElement('li');

var underlineButton = document.createElement('button');
underlineButton.classList.add('zendesk-editor--item', 'underline');
underlineButton.setAttribute('type', 'button');
underlineButton.setAttribute('data-command-name', 'underline');
underlineButton.setAttribute('aria-label', 'Underline');
underlineButton.setAttribute('data-editor-tooltip', 'Underline (ctrl u)');
underlineButton.setAttribute('aria-pressed', 'false');
underlineButton.setAttribute('aria-disabled', 'false');

var underlineButtonIconContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
underlineButtonIconContainer.setAttribute('viewBox', '0 0 14 14');

underlineSVGPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
underlineSVGPath.setAttribute('fill', 'currentColor');
underlineSVGPath.setAttribute('d', 'M11 7.5c0 2.5-1.4 3.8-3.9 3.8-2.6 0-4.1-1.2-4.1-3.8V1.2h1.3v6.3c0 1.8 1 2.7 2.7 2.7 1.7 0 2.6-.9 2.6-2.7V1.2H11v6.3zm-9 5.3v-.7h10v.7H2z');

var underlineButtonText = document.createElement('span');
underlineButtonText.textContent = ('Underlined')
underlineButtonText.classList.add('zendesk-editor--accessible-hidden-text');

var formattingButtons = document.getElementsByClassName('zendesk-editor--group')[1];
formattingButtons.appendChild(underlineButtonListItem);
underlineButtonListItem.appendChild(underlineButton);
underlineButton.appendChild(underlineButtonIconContainer);
underlineButtonIconContainer.appendChild(underlineSVGPath);
underlineButton.appendChild(underlineButtonText);

underlineButton.addEventListener("click", function () {
    document.execCommand('underline', false, null)
}); 