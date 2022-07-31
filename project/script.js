const italic = document.querySelector('#italic')
const boldBtn = document.getElementById('bold-btn')
const textArea = document.querySelector("#str")
const fileName = document.querySelector('#input')
const inputText = document.querySelector('#input')
const myButton = document.querySelector('.btn-list')
const list = document.querySelector('.container1 ul')
// const content = document.querySelector('#content')

function ConvertToItalic() {
    textArea.style.fontStyle = "Italic"
}
function ConvertToBold() {
    textArea.style.fontWeight = "900"
}
function makePDF() {
    // first create a tag the pass the textArea value as href 
    // then add download attribute
    var attribute = document.createElement('a');
    attribute.setAttribute('href',
        'data:text/plain;charset=utf-8, '
        + encodeURIComponent(textArea.value));
    attribute.setAttribute("download", file);

    // then append child to document 
    document.body.appendChild(attribute);
    attribute.download = fileName.value + ".pdf";
    // auto click event
    attribute.click();

    // then remove child to document 
    document.body.removeChild(attribute);
}
myButton.addEventListener('click', (e) => {
    if (inputText.value != " ") {
        e.preventDefault();
        const myLi = document.createElement('li');
        myLi.innerHTML = inputText.value;
        list.appendChild(myLi);
        const mySpan = document.createElement('span');
        mySpan.innerHTML = 'X';
        myLi.appendChild(mySpan);
    }
    const close = document.querySelectorAll('span');
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', () => {
            close[i].parentElement.style.opacity = 0;
            setTimeout(() => {
                close[i].parentElement.style.display = 'none';
                close[i].parentElement.remove();
            }, 500)
        }
        )
    }
    inputText.value = "";
})