chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {    
    if (request.method == "fetch") {
        const url = request.url;
        fetch(url)
            .then(response => response.text())
            .then(response => sendResponse(response))
            .catch();
        return true;
    }
});
