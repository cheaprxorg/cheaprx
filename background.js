chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {    
    let url;
    if (request.company === "Cost Plus Drugs"){
        url = `${request.baseUrl}/${request.drugName}-${request.drugStrength}-${request.drugForm}/`;
    }
    else if (request.company === "RxSaver") {
        let drugName = request.drugName;
        if (request.drugName === "imatinib") {
            drugName += "-mesylate";
        }
        url = `${request.baseUrl}/${drugName}/coupons`;
    }

    fetch(url)
        .then(response => response.text())
        .then(response => sendResponse(response))
        .catch();
    return true;
});
