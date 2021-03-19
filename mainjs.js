
var passTeg = ["Nikita", "Amir", "Slava", "Vadim"];
var postOffice = ['152515', '221936', 'CRMK', 'KC11'];

var confirmButton = document.querySelector(".confirmButton");
var password = document.querySelector(".passInp");
var tegOffice = document.querySelector(".tegInp");
confirmButton.onclick = function(){
    if (postOffice.includes(password.value) && passTeg.includes(tegOffice.value)){
        alert('Привет Студент!');
        window.location.replace('file:///D:/web/index2.html')
} else if (password.value == '' || tegOffice.value == null || tegOffice.value == '' || password.value == null){
    alert('Error 404');
} else {
    alert('Не правильно!');
    password.classList.add('redInp');
    tegOffice.classList.add('redInp');
    }
}

