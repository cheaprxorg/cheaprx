const insertHTML = () => {

const icon = (element) => {
    element.style.position = 'fixed';
    element.style.zIndex = 99;
    element.style.top = '8em';
    element.style.right = 0;
    element.style.width = '70px';
    element.style.height = '72px';
    element.style.background = '#4767F2';
    element.style.borderTopLeftRadius  = '60px';
    element.style.borderBottomLeftRadius = '60px';
}
const img = (element) => {
    element.src = chrome.runtime.getURL('/images/logo-tp.png');
    element.id = 'rectangle';
    element.style.marginTop = '9%';
    element.style.marginLeft = '10%'; 
    element.style.width =  '80%'; 
    element.style.borderRadius = '50%';
}
const main = (element) => {
    element.style.display = 'block';  // temp change
    element.style.position = 'fixed';
    element.id = 'main-card';
    element.style.top = '17em'; 
    element.style.right ='2em';
    element.style.backgroundColor = '#F8F8FD';
    element.style.padding = '1em';
    element.style.borderRadius = '20px';
}

const exit = (element) => {
    element.style.color = 'rgb(94, 94, 94)';
    element.style.fontSize = '20px';
    element.style.fontFamily = 'Gill Sans';
    element.style.position = 'absolute';
    element.style.left = '90%';
    element.style.top = '6%';
}

    let fontawesome = document.createElement('link');
    fontawesome.rel = 'stylesheet';
    fontawesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    document.head.appendChild(fontawesome);

    let googleAPIS = document.createElement('link');
    googleAPIS.rel = 'preconnect';
    googleAPIS.href = 'https://fonts.googleapis.com';
    document.head.appendChild(googleAPIS);

    let gStatic = document.createElement('link');
    gStatic.rel = 'preconnect';
    gStatic.href = 'https://fonts.gstatic.com';
    gStatic.crossOrigin = true;
    document.head.appendChild(gStatic);

    let fontsAPIS = document.createElement('link');
    fontsAPIS.rel = 'stylesheet';
    fontsAPIS.href = 'https://fonts.googleapis.com/css2?family=Suwannaphum&display=swap';
    document.head.appendChild(fontsAPIS);

    let i = document.createElement('div');
    let logot = document.createElement('img'); 
    img(logot);
    logot.addEventListener("mouseover", () => {
        logot.style.cursor = 'pointer';
    });
    icon(i);
    i.style.marginLeft = '1em';
    i.className = "icon-logo"
    i.appendChild(logot);

    let card = document.createElement('div');
    card.className = "card";
    card.appendChild(i)
    let nav = document.createElement('div');
    nav.className = "nav";

    let leftNav = document.createElement('div');
    leftNav.className = "left-nav";

    let logo = document.createElement('img');
    logo.src = chrome.runtime.getURL('/images/logo-tp.png');
    logo.alt = "logo";
    logo.className = "logo";
    let dealsLink = document.createElement('div');
    dealsLink.className = "deals-link";
    dealsLink.innerText = "deals";
    leftNav.appendChild(logo)
    leftNav.appendChild(dealsLink)
    nav.appendChild(leftNav)
    let rightNav = document.createElement('div');
    rightNav.className = "right-nav";
    let settingsIcon = document.createElement('div');
    settingsIcon.className = "settings-icon";
    let cogIcon = document.createElement('i');
    cogIcon.className = "fa fa-cog";
    settingsIcon.appendChild(cogIcon);
    rightNav.append(settingsIcon);
    let xIcon = document.createElement('div');
    xIcon.className = "x-icon";
    let faTimes = document.createElement('i');
    faTimes.className = "fa fa-times";
    xIcon.appendChild(faTimes);
    rightNav.appendChild(xIcon);
    nav.appendChild(rightNav);
    card.appendChild(nav);

    // midsection
    let midsection = document.createElement('div');
    midsection.className = "midsection";
    let header = document.createElement('div');
    header.className = "header"
    let leftHeader = document.createElement('div');
    leftHeader.className = "left-header";
    let drugImage = document.createElement('img');
    drugImage.src = chrome.runtime.getURL('/images/drug-temp-logo.png');
    drugImage.alt = "item";
    drugImage.className = "item-image";
    leftHeader.appendChild(drugImage);
    let itemInfo = document.createElement('div');
    itemInfo.className = "item-info"
    let itemName = document.createElement('div');
    let companyName = document.createElement('div');
    itemName.className = "item-name"
    itemName.innerText = "Albendazole (Albenza)";
    itemInfo.appendChild(itemName);
    companyName.className = "company-name";
    companyName.innerText = "CostPlusDrugs";
    itemInfo.appendChild(companyName);
    leftHeader.append(itemInfo);
    header.appendChild(leftHeader);

    let rightHeader = document.createElement('div');
    rightHeader.className = "right-header";
    let searchIcon = document.createElement('div');
    searchIcon.className = "search-icon";
    let faSearch = document.createElement('i');
    faSearch.className = "fa fa-search";
    searchIcon.appendChild(faSearch);
    rightHeader.appendChild(searchIcon);
    header.appendChild(rightHeader); 
    midsection.appendChild(header);

    let searchForm = document.createElement('div');    
    searchForm.className = "search-form";
    let form = document.createElement('form');
    let input = document.createElement('input');
    input.type = "text";
    input.placeholder = "Search...";
    form.appendChild(input);
    let button = document.createElement('button');
    button.type = "submit";
    button.innerText = "Go";
    form.appendChild(button)
    searchForm.appendChild(form);
    midsection.appendChild(searchForm);

    let topPick = document.createElement('div');
    topPick.className = "top-pick";
    let leftSide = document.createElement('div');
    leftSide.className = "left-side";
    let medalImage = document.createElement('img');
    medalImage.src = chrome.runtime.getURL('/images/medal.png');
    medalImage.alt = "medal";
    medalImage.className = "medal";
    leftSide.appendChild(medalImage)
    let heading = document.createElement('div');
    heading.className = "heading";
    heading.innerText = "Our Top Pick";
    leftSide.appendChild(heading);
    let subText = document.createElement('div');
    subText.className = "subtext";
    subText.innerText = "from 2 stores";
    leftSide.appendChild(subText);
    topPick.appendChild(leftSide);
    midsection.appendChild(topPick);

    let analyticsSection = document.createElement('div');
    analyticsSection.className = "analytics-section";
    let picture = document.createElement('div');
    picture.className = "picture";
    let chartImage = document.createElement('img');
    chartImage.src = chrome.runtime.getURL('/images/chart.png');
    chartImage.alt = "chart";
    picture.appendChild(chartImage);
    analyticsSection.appendChild(picture);
    let text = document.createElement('div');
    text.className = "text";
    let save = document.createElement('div');
    save.className = "save";
    save.innerText = "Amount you save";
    text.appendChild(save);
    let amount = document.createElement('div');
    amount.className = "amount";
    amount.innerText = "$ 30.98";
    text.appendChild(amount)
    let subTextStore = document.createElement('div')
    subTextStore.className = "subtext-store";
    subTextStore.innerText = "with this store";
    text.appendChild(subTextStore);
    analyticsSection.appendChild(text);
    midsection.appendChild(analyticsSection);

    let lowerMidSection = document.createElement('div');
    lowerMidSection.className = "left-header";
    let bookmarkImage = document.createElement('img');
    bookmarkImage.src = chrome.runtime.getURL('/images/bookmark.png');
    bookmarkImage.alt = "item";
    bookmarkImage.className = "bookmark-image";
    lowerMidSection.appendChild(bookmarkImage);
    let saveAlertDivWrap = document.createElement('div');
    let saveItem = document.createElement('div');
    saveItem.className = "save";
    saveItem.innerText = "Save this item";
    saveAlertDivWrap.appendChild(saveItem);
    let saveAlerts = document.createElement('div');
    saveAlerts.className = "alerts";
    saveAlerts.innerText = "Get live deal alerts for this item";
    saveAlertDivWrap.appendChild(saveAlerts);
    lowerMidSection.appendChild(saveAlertDivWrap);
    midsection.appendChild(lowerMidSection);

    let saveSection = document.createElement('div');
    saveSection.className = "save-section";
    let drugLogo = document.createElement('img');
    drugLogo.src = chrome.runtime.getURL('/images/drug-temp-logo.png');
    drugLogo.alt = "item";
    drugLogo.className = "save-image";
    saveSection.appendChild(drugLogo);
    let prescriptionSaveForm = document.createElement('div');
    prescriptionSaveForm.className = "prescription-save-form";
    let prescriptionCompany = document.createElement('div');
    prescriptionCompany.className = "prescription-company";
    prescriptionCompany.innerText = "CostPlusDrugs";
    prescriptionSaveForm.appendChild(prescriptionCompany);
    let prescriptionName = document.createElement('div');
    prescriptionName.className = "prescription-name";
    prescriptionName.innerText = "Albendazole (Albenza)";
    prescriptionSaveForm.appendChild(prescriptionName);
    let dropDownContainer = document.createElement('div');
    dropDownContainer.className = "dropdown-container";
    let dropDownQuality = document.createElement('select');
    dropDownQuality.className = "dropdown";
    dropDownContainer.appendChild(dropDownQuality);
    let dropDownStrength =  document.createElement('select');
    dropDownStrength.className = "dropdown";
    dropDownContainer.appendChild(dropDownStrength);
    prescriptionSaveForm.appendChild(dropDownContainer);
    saveSection.appendChild(prescriptionSaveForm);
    midsection.appendChild(saveSection);

    let saveButton = document.createElement('button');
    saveButton.className = "save-button";
    saveButton.innerText = "Save";
    midsection.appendChild(saveButton);

    card.appendChild(midsection);

    let footer = document.createElement('div');
    footer.className = "footer";
    footer.innerText = "Sourced by CheapRx";
    card.appendChild(footer);
   
    document.body.appendChild(card);
}

insertHTML()

// let styleSheet = document.createElement("style");
// styleSheet.innerText = styles;
// document.head.appendChild(styleSheet);

// const getPropsData = (htmlString) => {
//     const startTag = '<script id="__NEXT_DATA__" type="application/json">';
//     const endTag = '</script>';

//     const start = htmlString.indexOf(startTag) + startTag.length;
//     const end = htmlString.lastIndexOf(endTag);

//     let jsonString = htmlString.substring(start);
//     jsonString = jsonString.substring(0, jsonString.indexOf(endTag));
//     const propsData = JSON.parse(jsonString);   

//     return propsData;
// };

// const rxSaverPropsData = getPropsData(document.documentElement.outerHTML);
// console.log(rxSaverPropsData["props"])
// const rxSaverMedData = rxSaverPropsData["props"]["pageProps"];

// let medName = (rxSaverMedData["medicationDetails"]["brandName"]).toLowerCase();

// const medTypes = rxSaverMedData["prescription"]["prescriptionNames"];
// let medForm;
// for (const medType of medTypes) {
//     if ((medType["Name"].toLowerCase()).includes(medName)) {
//         medForm = (medType["Forms"][0]["Form"]).toLowerCase();
//         break;
//     }
// }

// let medStrength = (rxSaverMedData["drugEducationInfo"]["dosage"]).toLowerCase();
// medStrength = medStrength.replace(/\s/g, '');

// let costPlusQuery = {
//     company: "Cost Plus Drugs",
//     baseUrl: "https://costplusdrugs.com/medications",
//     drugName: medName,
//     drugStrength: medStrength,
//     drugForm: medForm,
//     url: "https://www.rxsaver.com/drugs/imatinib-mesylate/coupons"
// };

// chrome.runtime.sendMessage(costPlusQuery, (response) => {
//     // Cost Plus Scraping
//     const costPlusPropsData = getPropsData(response);
//     const costPlusMedData = costPlusPropsData["props"]["pageProps"]["medicationDetails"];

//     insertHTML(costPlusMedData, rxSaverMedData);
// });
