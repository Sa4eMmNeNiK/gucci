var doki = document.querySelector('#doki');
var box1 = document.querySelectorAll('.box1');

for(let i = 0; i < box1.length; i++) {
    box1[i].addEventListener('click', function(e){
        if(this.style.transform == 'rotateY(0deg)') this.style.transform = 'rotateY(180deg)';
        else this.style.transform = 'rotateY(0deg)';
    });
}


