import 'bootstrap';

let costplus = {
    company: "Cost Plus Drugs",
    url: "https://costplusdrugs.com/medications/imatinib-100mg-tablet/",
    //url: "https://www.rxsaver.com/drugs/imatinib-mesylate/coupons"
};




const insertHTML = (medicationData) => {
    // part 1
    let body = document.querySelector('body');
    let i = document.createElement('div');
    let logo = document.createElement('img'); 
    let logoImg = img(logo);
    let popIcon = icon(i);
    popIcon.append(logoImg);
    body.append(popIcon);
    // part 2
    let mainCard = document.createElement('div');
    let drugName = document.createElement('h1');
    let exitCard = document.createElement('i');
    let card = main(mainCard);
    drugName.innerHtml = "Drug name here";
    drugName.style.display = 'inline';
    card.append(drugName);
    let x = exit(exitCard) ;
    mainCard.append(drugName);
    mainCard.append(x);
    body.append(mainCard);
    // part 3
    let form = document.createElement('form');
    for (let i = 0; i < 3; i++) {
        let divFormGroup = document.createElement('div');
        let input = document.createElement('input');
        if(i == 2){
            input.value = 'total amount';
            input.style.backgroundColor = '#4767F2 !important';
            input.style.color = '#F8F8FD';
        } else {
            input.setAttribute = 'readonly';
            input.value = 'whatever price comes in';
            input.type = 'text';
            input.style.borderRadius = '16px';
            input.style.paddingTop = '1em'
            input.style.paddingBottom = '1em';
            input.style.backgroundColor = '#FFFFFF !important';
        }
    divFormGroup.apppend(input);
    form.append(divFormGroup);
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
        selectInput.append(formOption);
        divOptionGroup.append(selectInput);
        formRow.append(divOptionGroup);
    }
    form.append(formRow);
    // part 5
    let credits =  document.createElement('div');
    credits.innerHtml = "Powered by ...";
    form.append(credits);
    body.append(form);

};
const icon = (element) => {
    element.style.position = 'absolute';
    element.style.top = '8em';
    element.style.right = 0;
    element.style.width = '100px';
    element.style.height = '100px';
    element.style.background = '#4767F2';
    element.style.borderTopLeftRadius  = '60px';
    element.style.borderBottomLeftRadius = '60px';
}
const img = (element) => {
    element.src = './images/logo-removebg-preview.png';
    element.id = 'logo';
    element.style.marginTop = '9%';
    element.style.marginLeft = '10%'; 
    element.style.width =  '80%'; 
    element.style.borderRadius = '50%';
}
const main = (element) => {
    element.style.display = none; 
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
