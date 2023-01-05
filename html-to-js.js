let body = document.createElement('div');
let i = document.createElement('div');
let logo = document.createElement('img'); 

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

img(logo);
logo.addEventListener("mouseover", () => {
    logo.style.cursor = 'pointer';
});
icon(i);
i.style.marginLeft = '1em';
i.appendChild(logo);
body.appendChild(i);

document.body.appendChild(body);
  
let doc = new DOMParser().parseFromString(xmlString, "text/html");

document.body.appendChild(doc.body.firstChild)

// document.body.appendChild(doc)