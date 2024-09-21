const search =document.querySelector('.search-container')
const input = document.querySelector('.input');
const btn = document.querySelector('.btn'); 


const gallery = document.querySelectorAll('.gallery');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let globalValue = 1; 
function checkOutDisable() {
    if(globalValue===1) {
        prev.disabled = true; 
        next.disabled = false;
    } else if(globalValue>1 && globalValue <5 ) {
        prev.disabled = false; 
        next.disabled = false;
    } else if(globalValue === 5) {
        prev.disabled = false; 
        next.disabled = true;
    }
}

btn.addEventListener('click', ()=> {
    search.classList.toggle('active');
    globalValue = input.value;
    if(search.classList.contains('active')) {
        prev.disabled = true
        next.disabled = true
    } else{
        update();
        globalValue =1;
        gallery[globalValue-1].classList.add('onpage');
        checkOutDisable();
    }

   
});

input.addEventListener('click', (e)=> {
    e.preventDefault();
    update()
    gallery[input.value-1].classList.add('onpage');
})


next.addEventListener('click', ()=> {
    update(); 
    if(globalValue<5) {globalValue++;}
    if(globalValue<=5) {
        gallery[globalValue-1].classList.add('onpage');
    } 
    checkOutDisable()
     
    console.log("next" + globalValue);
    
}); 



prev.addEventListener('click', ()=> {
    update(); 
    if(globalValue>=1) {globalValue--; }
    if(globalValue>=1  ) {
        gallery[globalValue-1].classList.add('onpage');
    }
    checkOutDisable()
    console.log("prev" + globalValue);

})

function update() {
    gallery.forEach(element => {
        element.classList.remove('onpage');
    });
}



