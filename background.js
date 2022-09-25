chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {    
    if (request.company === "Cost Plus Drugs"){
        const url = `${request.baseUrl}/${request.drugName}-${request.drugStrength}-${request.drugForm}/`;
        fetch(url)
            .then(response => response.text())
            .then(response => sendResponse(response))
            .catch();
        return true;
    }
});
