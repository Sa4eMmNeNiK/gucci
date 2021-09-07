// const box = document.querySelector('.contentTabs');
// const tabs = document.querySelectorAll('.tabs');
// const content = document.querySelectorAll('.img');

// box.onclick = function(e){
//     console.log(e.target.dataset.tab);
//     tabs.forEach(item => item.classList.remove('active') );
//     e.target.classList.add('active');
//     content.forEach(item => item.classList.remove('active'));
//     content[e.target.dataset.tab].classList.add('active');
// }


let bagger = document.querySelector('.bagger');
bagger.onclick = function(){
    for(let a = 1; a>0; ++a){
        console.log(a + this.bagger);
    }
};

