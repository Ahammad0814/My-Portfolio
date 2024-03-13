function HoverImage() {
    document.querySelector('.git-logo').setAttribute('src', 'images/Git_Logo.png');
    document.querySelector('.git-logo').style.backgroundColor = 'red';
    document.querySelector('.git-logo').style.boxShadow = '0px 0px 20px rgba(255, 0, 0)';
}
function OriginalImage() {
    document.querySelector('.git-logo').setAttribute('src', 'images/Git_Logo_Red.png');
    document.querySelector('.git-logo').style.backgroundColor = 'black';
    document.querySelector('.git-logo').style.boxShadow = '';
}

function reloadFun(event) {
    event.preventDefault();
}

function if_ContactEmpty() {
    let name = document.getElementById('name-box').value
    let mail = document.getElementById('mail-box').value
    let message = document.getElementById('message-box').value

    let error1 = document.getElementsByClassName('error-msg1')[0]
    let error2 = document.getElementsByClassName('error-msg2')[0]
    let error3 = document.getElementsByClassName('error-msg3')[0]

    let Result1 = false;
    let Result2 = false;
    let Result3 = false;

    if (name === '' && mail === '' && message === '') {
        Result1 = false;
        Result2 = false;
        Result3 = false;
        error1.classList.add('Error_Msg');
        error2.classList.add('Error_Msg');
        error3.classList.add('Error_Msg');
        setTimeout( function () {
            error1.classList.remove('Error_Msg')
            error2.classList.remove('Error_Msg')
            error3.classList.remove('Error_Msg')
        }, 3000)
    }else{
        Result1 = true;
        Result2 = true;
        Result3 = true;
    }
    if (name === '') {
        Result1 = false;
        error1.classList.add('Error_Msg');
        setTimeout( function () {
            error1.classList.remove('Error_Msg')
        }, 3000)
    }else{
        Result1 = true;
    }
    if (mail === '' || !mail.includes('@')) {
        Result2 = false;
        error2.classList.add('Error_Msg');
        setTimeout( function () {
            error2.classList.remove('Error_Msg')
        }, 3000)
    }else{
        Result2 = true;
    }
    if (message === '') {
        Result3 = false;
        error3.classList.add('Error_Msg');
        setTimeout( function () {
            error3.classList.remove('Error_Msg')
        }, 3000)
    }else{
        Result3 = true;
    }
    if (Result1 === true && Result2 === true && Result3 === true){
        let poll = document.querySelector('.reason-poll');
        poll.classList.add('poll_scale');
    }
}
function ClearForm() {
let name = document.getElementById('name-box');
let mail = document.getElementById('mail-box');
let message = document.getElementById('message-box');

name.value = '';
mail.value = '';
message.value = '';
}

function Pole_Close() {
let poll = document.querySelector('.reason-poll');
poll.classList.remove('poll_scale');
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzClL1-584P0s2J9pAft7-tSdHjeRwrZizY0rsx7LhKNC25-WU-51pn9mA4s_l5aInF/exec'
const form = document.forms['submit-to-google-sheet'];
const form2 = document.forms['submit-to-google-sheet2'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

const dateField = document.getElementById('date');

function getFormattedDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
dateField.value = getFormattedDate();

form2.addEventListener('submit', e => {
    e.preventDefault()
    const formData = new FormData(form2);
    formData.append('date', getFormattedDate());
    fetch(scriptURL, { method: 'POST', body: new FormData(form2)})
    .then(response => alert('Success!', response))
    .catch(error => alert('Error!', error.message))
    ClearForm();
})

function SideMenu() {
    let menuElements = document.querySelectorAll('.side-menu-div, .side-menu-img, .side-menu-a1, .side-menu-a2, .side-menu-a3, .side-menu-a4');

    menuElements.forEach(element => {
        element.style.visibility = 'visible';
    });

    document.querySelector('.hamburger-menu').style.visibility = 'hidden';
    document.querySelector('.side-menu-div').style.width = '40%';
}

function SideMenuClose() {
    let menuElements = document.querySelectorAll('.side-menu-div, .side-menu-img, .side-menu-a1, .side-menu-a2, .side-menu-a3, .side-menu-a4');

    menuElements.forEach(element => {
        element.style.visibility = 'hidden';
    });

    document.querySelector('.side-menu-div').style.width = '0px';
    setTimeout(function () {
        document.querySelector('.hamburger-menu').style.visibility = 'visible';
    }, 200)
}


function NameAppear() {

    let nameList = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']

    let NameElement = document.querySelector('.name_appear'); 
    setTimeout(() => { 
        nameList.forEach((element,index)=>{
            if (NameElement.innerHTML === '') {
                setTimeout(() => {
                    NameElement.innerHTML += element;
                }, 100 * index);
            }else if (NameElement.innerHTML != '') {
                NameElement.innerHTML = '';
                setTimeout(() => {
                    NameElement.innerHTML += element;
                }, 100 * index);
            }
        })
    }, 1000)
}


function TechPercentage(buttonClass, textClass, height, percentage) {
    let buttonElements = document.getElementsByClassName(buttonClass);
    let textElements = document.getElementsByClassName(textClass);
    
    for (let j = 0; j < buttonElements.length; j++) {
        buttonElements[j].style.visibility = 'visible';
        buttonElements[j].style.height = height+'px';
    }
    for (let h = 0; h < textElements.length; h++) {
        textElements[h].style.visibility = 'visible';
    }

    for (let i = 1; i <= percentage; i++) {
        setTimeout(() => {
            for (let k = 0; k < textElements.length; k++) {
                textElements[k].innerHTML = i + '%';
            }
        }, 10 * i);
    }
}


function TechPercentageRemove(buttonClass, textClass) {
    let buttonElements = document.getElementsByClassName(buttonClass);
    let textElements = document.getElementsByClassName(textClass);
    
    for (let j = 0; j < buttonElements.length; j++) {
        buttonElements[j].style.visibility = 'hidden';
        buttonElements[j].style.height = '0px'
    }
    
    for (let i = 80; i >= 0; i--) {
        setTimeout(() => {
            for (let k = 0; k < textElements.length; k++) {
                textElements[k].innerHTML = i + '%';
            }
        }, 10 * i);
    }
    for (let h = 0; h < textElements.length; h++) {
        setTimeout(() => {
            textElements[h].style.visibility = 'hidden';
        }, 10 * (80 + h));
    }
}

function DirectContact(Element) {
    let element = document.getElementById(Element).innerHTML;
    let text = document.querySelector('.direct-contact-title');

    navigator.clipboard.writeText(element);

    text.innerHTML = 'Text Copied: ' + element

    setTimeout(() => {
        text.innerHTML = 'Click on Text to copy.'
    }, 2000)
}

let directButton = document.querySelector('.direct-contact-btn');
let directDiv = document.querySelector('.direct-contact-div')

directButton.addEventListener('click', () => {
    directDiv.classList.toggle('direct-scale')
    if (directButton.innerHTML === 'Direct Contact') {
        directButton.innerHTML = '<img src="images/wrong-icon.png">'
    }else{
        directButton.innerHTML = 'Direct Contact'
    }
})