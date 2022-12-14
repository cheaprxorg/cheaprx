const insertHTML = (costPlusMedData, rxSaverMedData) => {   
    let body = document.createElement('div');
    let i = document.createElement('div');
    let logo = document.createElement('img'); 
    img(logo);
    logo.addEventListener("mouseover", () => {
        logo.style.cursor = 'pointer';
    });
    icon(i);
    i.style.marginLeft = '1em';
    i.appendChild(logo);
    body.appendChild(i);

    let mainCard = document.createElement('div');
    let drugName = document.createElement('h1');
    let exitCard = document.createElement('i');
    exitCard.addEventListener("mouseover", () => {
        exitCard.style.cursor = 'pointer';
    })
    exitCard.addEventListener("click", () => {
        mainCard.style.display = 'none';
    })
    logo.addEventListener("mouseover", () => {
         logo.style.cursor = 'pointer';

    })
    logo.addEventListener("click", () => {
        mainCard.style.display = 'block';
    })
    main(mainCard);
    drugName.style.display = 'inline';
    drugName.style.width = '3em';
    drugName.style.height = '3em';
    drugName.style.fontSize = '2em';
    drugName.style.marginRight = '20px';
    drugName.innerHTML = costPlusMedData["brandName"];
    mainCard.appendChild(drugName);
    exit(exitCard) ;
    exitCard.innerHTML = "x"
    mainCard.appendChild(drugName);
    mainCard.appendChild(exitCard);

    let form = document.createElement('form');
    for (let i = 0; i < 3; i++) {
        let divFormGroup = document.createElement('div');
        let input = document.createElement('input');
        if(i == 2){
            input.style.backgroundColor = '#4767F2';
            input.value = 'total amount: $xxx';
            input.style.borderRadius = '16px';
            input.style.paddingTop = '1em'
            input.style.paddingBottom = '1em';
            input.style.backgroundColor = '#4767F2 !important';
            input.style.color = "#FFFFFF"
            input.type = 'text';
            
        } else {
            input.setAttribute = 'readonly';
            if (i == 0) {
                input.value = 'Price: $14.40';
            }
            else if (i == 1) {
                input.value = 'RxSaver: $2,768.93';
            }
            else if (i == 2) {
                input.value = 'You save: $2,754.53';
            }
            input.style.borderRadius = '16px';
            input.style.paddingTop = '1em';
            input.style.paddingLeft = '1em';
            input.style.paddingBottom = '1em';
            input.style.backgroundColor = '#FFFFFF';
        }
        input.style.width = "100%";
        input.style.marginTop = "1em";
        divFormGroup.appendChild(input);
        form.appendChild(divFormGroup);
    }

    let formRow = document.createElement('div');
    formRow.style.display = 'flex';
    formRow.style.justifyContent = 'space-between';
    formRow.style.marginTop = '1em';
    //let options = [`Form ${rxSaverMedData["form"]}`, `Count ${rxSaverMedData["form"]}`, `Strength ${rxSaverMedData["strength"]}`];
    let options = ["Tablets", "Count", "Strength"];
    for(let i = 0; i < 3; i++) {
        let divOptionGroup = document.createElement('div');
        let formOption = document.createElement('input');
        formOption.style.borderRadius = '16px';
        formOption.style.width = '80px';
        formOption.style.fontSize = '0.8em';
        formOption.style.padding = '1em';
        formOption.style.marginRight = '5px';
        formOption.placeholder = `${options[i]}`;
        divOptionGroup.appendChild(formOption);
        formRow.appendChild(divOptionGroup);
    }
    form.appendChild(formRow);
    mainCard.appendChild(form);
    body.appendChild(mainCard);

    document.body.appendChild(body);
};
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


// Cost Plus Med Data
const costPlusPropsData = getPropsData(document.documentElement.outerHTML);
const costPlusMedData = costPlusPropsData["props"]["pageProps"]["medicationDetails"];
let medName = (costPlusMedData["brandName"]).toLowerCase();

let rxSaverQuery = {
    company: "RxSaver",
    baseUrl: "https://www.rxsaver.com/drugs",
    drugName: medName,
    //url: "https://www.rxsaver.com/drugs/imatinib-mesylate/coupons"
};

chrome.runtime.sendMessage(rxSaverQuery, (response) => {
    // RxSaver Scraping
    const rxSaverPropsData = getPropsData(response);
    const rxSaverMedData = rxSaverPropsData["props"]["initialState"];

    insertHTML(costPlusMedData, rxSaverMedData);
});
