// Listen for text selections
document.addEventListener("mouseup", event => {
    let selection = document.getSelection().toString();
    let meaning;

    if (selection != "") {
        chrome.runtime.sendMessage({ selection: selection }, function (response) {
            meaning = response.meaning;

            // Inject the popup into the DOM
            let div = document.createElement('div');
            div.classList.add('meanify-popup');
            let text = document.createTextNode(meaning);
            div.appendChild(text);
            document.body.appendChild(div)
        });
    }
})