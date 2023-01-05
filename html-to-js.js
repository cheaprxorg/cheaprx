import styles from "./public/stylesheets/popup.css";

let xmlString = `<div class="${styles.card}"> <div class="nav"> <div class="left-nav"> <img src="../images/logo-tp.png" alt="logo" class="logo"> <div class="deals-link">deals</div> </div> <div class="right-nav"> <div class="settings-icon"> <i class="fa fa-cog"></i> </div> <div class="x-icon"> <i class="fa fa-times"></i> </div> </div> </div> <!-- display flex --> <div class="midsection"> <!-- product analytics section --> <div class="header"> <div class="left-header"> <img src="../images/drug-temp-logo.png" alt="item" class="item-image"> <div class="item-info"> <div class="item-name">Albendazole (Albenza)</div> <div class="company-name">CostPlusDrugs</div> </div> </div> <div class="right-header"> <div class="search-icon"> <i class="fa fa-search"></i> </div> </div> </div> <div class="search-form"> <form> <input type="text" placeholder="Search..."> <button type="submit">Go</button> </form> </div> <div class="top-pick"> <div class="left-side"> <img src="../images/medal.png" alt="medal" class="medal"> <div class="heading">Our Top Pick</div> <div class="subtext">from 2 stores</div> </div> </div> <div class="analytics-section"> <div class="picture"> <img src="../images/chart.png" alt="chart" > </div> <div class="text"> <div class="save">Amount you save</div> <div class="amount">$ 30.98</div> <div class="subtext-store">with this store</div> </div> </div> <div class="left-header"> <img src="../images/bookmark.png" alt="item" class="bookmark-image"> <div> <div class="save">Save this item</div> <div class="alerts">Get live deal alerts for this item</div> </div> </div> <div class="save-section"> <img src="../images/drug-temp-logo.png" alt="item" class="save-image"> <div class="prescription-save-form"> <div class="prescription-company">CostPlusDrugs</div> <div class="prescription-name">Albendazole (Albenza)</div> <div class="dropdown-container"> <select class="dropdown"> <!-- <option value="option1">Option 1</option> --> </select> <select class="dropdown"> <!-- <option value="option1">Option 1</option> --> </select> </div> </div> </div> <button class="save-button">Save</button> </div> <div class="footer"> Sourced by CheapRx </div> </div>`;
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