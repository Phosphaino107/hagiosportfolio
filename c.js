const imgs = document.querySelectorAll('.header ul img');
const prev = document.querySelector('.controlprev');
const nxt = document.querySelector('.controlnext');

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';

    }
    imgs[n].style.display = 'block';

}
changeSlide();

 prev.addEventListener('click', (e)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
 })


 nxt.addEventListener('click', (e)=>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
 })
//  const scrollCont = document.querySelectorAll('.prods');
//  for (const item of scrollCont)
//     item.addEventListener('wheel', (evt)=>{
//         evt.preventDefault();
//         item.scrollLeft += evt.deltaY;
//     })
                                              
 