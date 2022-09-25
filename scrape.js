let costplus = {
    company: "Cost Plus Drugs",
    url: "https://costplusdrugs.com/medications/imatinib-100mg-tablet/",
    //url: "https://www.rxsaver.com/drugs/imatinib-mesylate/coupons"
};

const insertHTML = (medicationData) => {
    /*
    let bg = document.createElement("div");
    bg.style.position = "fixed";
    bg.style.top = "0px";
    bg.style.height = "100%";
    bg.style.zIndex = "99";
    bg.style.borderColor = "red";

    let cp = document.createElement("div");
    cp.style.position = "-webkit-sticky";
    cp.style.position = "sticky";
    cp.innerText = medicationData["brandName"];


    bg.appendChild(cp);
    */
    document.body.appendChild(bg);
};

chrome.runtime.sendMessage(costplus, (response) => {
    // Cost Plus Scraping
    const data = response;
    const startTag = '<script id="__NEXT_DATA__" type="application/json">';
    const endTag = '</script>';

    const start = data.indexOf(startTag) + startTag.length;
    const end = data.lastIndexOf(endTag);

    const jsonString = data.substring(start, end);
    const propsData = JSON.parse(jsonString);

    const medicationData = propsData["props"]["pageProps"]["medicationDetails"];

    insertHTML(medicationData);
 
    // RXsaver scraping
    //const html = document.documentElement.outerHTML;
    //console.log(html);
});
