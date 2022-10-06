const insertHTML = (medicationData) => {
    // part 1
    let body = document.createElement('div');
    let i = document.createElement('div');
    let logo = document.createElement('img'); 
    img(logo);
    icon(i);
    i.appendChild(logo);
    body.appendChild(i);
    // part 2
    let mainCard = document.createElement('div');
    let drugName = document.createElement('h1');
    let exitCard = document.createElement('i');
    main(mainCard);
    drugName.style.display = 'inline';
    drugName.innerHTML = "Drug name here";
    mainCard.appendChild(drugName);
    exit(exitCard) ;
    exitCard.innerHTML = "x"
    mainCard.appendChild(drugName);
    mainCard.appendChild(exitCard);

    // part 3
    let form = document.createElement('form');
    for (let i = 0; i < 3; i++) {
        let divFormGroup = document.createElement('div');
        let input = document.createElement('input');
        if(i == 2){
            input.value = 'total amount';
            input.style.backgroundColor = '#4767F2 !important';
            input.style.backgroundColor = '#F8F8FD';
        } else {
            input.setAttribute = 'readonly';
            input.value = 'whatever price comes in';
            input.type = 'text';
            input.style.borderRadius = '16px';
            input.style.paddingTop = '1em'
            input.style.paddingBottom = '1em';
            input.style.backgroundColor = '#FFFFFF !important';
        }
        divFormGroup.appendChild(input);
        form.appendChild(divFormGroup);
    }
    // part 4
    let formRow = document.createElement('div');
    for(let i = 0; i < 3; i++) {
        let options = ['Form', 'Count', 'Strength'];
        let divOptionGroup = document.createElement('div');
        let selectInput = document.createElement('select');
        let formOption = document.createElement('option');
        formOption.value = "";
        formOption.setAttribute = 'disabled selected'
        formOption.innerHTML = options[i];
        selectInput.appendChild(formOption);
        divOptionGroup.appendChild(selectInput);
        formRow.appendChild(divOptionGroup);
    }
    form.appendChild(formRow);
    // part 5
    let credits =  document.createElement('div');
    credits.innerHtml = "Powered by ...";
    form.appendChild(credits);
    mainCard.appendChild(form);
    body.appendChild(mainCard);

    document.body.appendChild(body);
};

const icon = (element) => {
    element.style.position = 'fixed';
    element.style.top = '8em';
    element.style.right = 0;
    element.style.width = '100px';
    element.style.height = '100px';
    element.style.background = '#4767F2';
    element.style.borderTopLeftRadius  = '60px';
    element.style.borderBottomLeftRadius = '60px';
}
const img = (element) => {
    element.src = chrome.runtime.getURL('logo-removebg-preview.png');
    element.id = 'logo';
    element.style.marginTop = '9%';
    element.style.marginLeft = '10%'; 
    element.style.width =  '80%'; 
    element.style.borderRadius = '50%';
}
const main = (element) => {
    element.style.display = 'block';  // temp change
    element.style.position = 'fixed';
    element.id = 'main-card';
    element.style.top = '20em'; 
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

const getPropsData = (htmlString) => {
    const startTag = '<script id="__NEXT_DATA__" type="application/json">';
    const endTag = '</script>';

    const start = htmlString.indexOf(startTag) + startTag.length;
    const end = htmlString.lastIndexOf(endTag);

    let jsonString = htmlString.substring(start);
    jsonString = jsonString.substring(0, jsonString.indexOf(endTag));
    const propsData = JSON.parse(jsonString);   

    return propsData;
};


// Scrape RX Saver Med Data
const rxSaverPropsData = getPropsData(document.documentElement.outerHTML);
const rxSaverMedData = rxSaverPropsData["props"]["initialState"];
let medName = (rxSaverMedData["drugEducationInfo"]["brandName"]).toLowerCase();

const medTypes = rxSaverMedData["prescription"]["prescriptionNames"];
let medForm;
for (const medType of medTypes) {
    if ((medType["Name"].toLowerCase()).includes(medName)) {
        medForm = (medType["Forms"][0]["Form"]).toLowerCase();
        break;
    }
}

let medStrength = (rxSaverMedData["drugEducationInfo"]["dosage"]).toLowerCase();
medStrength = medStrength.replace(/\s/g, '');

let costPlusQuery = {
    company: "Cost Plus Drugs",
    baseUrl: "https://costplusdrugs.com/medications",
    drugName: medName,
    drugStrength: medStrength,
    drugForm: medForm
    //url: "https://www.rxsaver.com/drugs/imatinib-mesylate/coupons"
};

chrome.runtime.sendMessage(costPlusQuery, (response) => {
    // Cost Plus Scraping
    const costPlusPropsData = getPropsData(response);
    const medicationData = costPlusPropsData["props"]["pageProps"]["medicationDetails"];

    console.log(medicationData["pricePerUnit"]);
    console.log(medicationData["priceOption1"]);
    console.log(medicationData["priceOption2"]);
    console.log(medicationData["priceOption3"]);
    insertHTML(medicationData);
});