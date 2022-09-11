const refs = {
    inputFontSizeControl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
};
refs.textEl.style.fontSize = refs.inputFontSizeControl.value + 'px';
refs.inputFontSizeControl.addEventListener('input', onChangeSize);
function onChangeSize(event) {
  refs.textEl.style.fontSize = `${event.currentTarget.value}px`;
}

