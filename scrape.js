const goodRx = {
    method: "fetch",
    url: "https://costplusdrugs.com/medications/imatinib-100mg-tablet/"
};

chrome.runtime.sendMessage(goodRx, (response) => {
    const data = response;
    const startTag = '<script id="__NEXT_DATA__" type="application/json">';
    const endTag = '</script>';

    const start = data.indexOf(startTag) + startTag.length;
    const end = data.lastIndexOf(endTag);

    const jsonString = data.substring(start, end);
    const propsData = JSON.parse(jsonString);

    const medicationData = propsData["props"]["pageProps"]["medicationDetails"];

    console.log(medicationData);
});
