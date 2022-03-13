const inputText = document.querySelector('.input-text');
const copyButton = document.querySelector('.copy-button');
const tooltip = document.querySelector('[data-tooltip]');

inputText.addEventListener('input',resetTooltip);
copyButton.addEventListener('click',copyTextToClipboard);

function copyTextToClipboard(event) {
    event.preventDefault();
    const enteredText = inputText.value;
    window.navigator.clipboard.writeText(enteredText);
    tooltip.setAttribute('data-tooltip',`Text is copied!!`);
}

function resetTooltip() {
    tooltip.setAttribute('data-tooltip','Click to copy text.');
}