chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        let meaning;

        if (request.selection !== "" && request.selection.length < 15) {
            // Make request to the API
            fetch('https://api.dictionaryapi.dev/api/v2/entries/en_US/' + request.selection)
                .then(response => response.json())
                .then(data => {
                    meaning = data[0].meanings[0].definitions[0].definition;
                    sendResponse({ meaning: meaning });
                })
        }
        return true;
    }
);