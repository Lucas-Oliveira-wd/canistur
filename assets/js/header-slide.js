/*====================================================================================================
=====                                                                                          =======
=====               Este site foi feito por "Lucas Oliveira"                                   =======
=====               Telefone (Whatsapp): (82) 98878-5978                                       =======
=====               Instagram: @lucasoliveirawd                                                =======
=====               E-mail: lukasforever02@gmail.com                                           =======
=====                                                                                          =======
=====================================================================================================*/

const sbody = document.querySelector('body');  //constante que seleciona o body

document.querySelector('.hamburguer').addEventListener('click',function(){
  sbody.classList.toggle('show-menu')
})

var slclasses= [];
for(let i = 1; i <= 10; i++) {
    slclasses.push('show-sl'+i);
};

var sec = [];

function slideClean(){
    for(let i in slclasses){
        sbody.classList.remove(slclasses[i]);
        sec = [];
    }
}

function slideFix(){
        if(sbody.classList.contains(slclasses[0])){
            //removendo left e right do slide 1
            document.querySelector('.slide-wrapper:nth-child(1)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(1)').classList.remove('transl-left');
            //removendo left e adicionando right no slide 2
            document.querySelector('.slide-wrapper:nth-child(2)').classList.add('transl-right');
            document.querySelector('.slide-wrapper:nth-child(2)').classList.remove('transl-left');
            //removendo right e adicionando left no slide 8
            document.querySelector('.slide-wrapper:nth-child(8)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(8)').classList.add('transl-left');

        } else if (sbody.classList.contains(slclasses[1])) {
            //removendo left e right do slide 2
            document.querySelector('.slide-wrapper:nth-child(2)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(2)').classList.remove('transl-left');
            //removendo left e adicionando right no slide 3
            document.querySelector('.slide-wrapper:nth-child(3)').classList.add('transl-right');
            document.querySelector('.slide-wrapper:nth-child(3)').classList.remove('transl-left');
            //removendo right e adicionando left no slide 1
            document.querySelector('.slide-wrapper:nth-child(1)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(1)').classList.add('transl-left');
        }
        else if (sbody.classList.contains(slclasses[2])){
            //removendo left e right do slide 3
            document.querySelector('.slide-wrapper:nth-child(3)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(3)').classList.remove('transl-left');
            //removendo left e adicionando right no slide 4
            document.querySelector('.slide-wrapper:nth-child(4)').classList.add('transl-right');
            document.querySelector('.slide-wrapper:nth-child(4)').classList.remove('transl-left');
            //removendo right e adicionando left no slide 3
            document.querySelector('.slide-wrapper:nth-child(2)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(2)').classList.add('transl-left');
        }
        else if (sbody.classList.contains(slclasses[3])){
            //removendo left e right do slide 4
            document.querySelector('.slide-wrapper:nth-child(4)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(4)').classList.remove('transl-left');
            //removendo left e adicionando right no slide 5
            document.querySelector('.slide-wrapper:nth-child(5)').classList.add('transl-right');
            document.querySelector('.slide-wrapper:nth-child(5)').classList.remove('transl-left');
            //removendo right e adicionando left no slide 3
            document.querySelector('.slide-wrapper:nth-child(3)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(3)').classList.add('transl-left');
        }
        else if (sbody.classList.contains(slclasses[4])){
            //removendo left e right do slide 5
            document.querySelector('.slide-wrapper:nth-child(5)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(5)').classList.remove('transl-left');
            //removendo left e adicionando right no slide 6
            document.querySelector('.slide-wrapper:nth-child(6)').classList.add('transl-right');
            document.querySelector('.slide-wrapper:nth-child(6)').classList.remove('transl-left');
            //removendo right e adicionando left no slide 4
            document.querySelector('.slide-wrapper:nth-child(4)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(4)').classList.add('transl-left');
        }
        else if (sbody.classList.contains(slclasses[5])){
            //removendo left e right do slide 6
            document.querySelector('.slide-wrapper:nth-child(6)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(6)').classList.remove('transl-left');
            //removendo left e adicionando right no slide 7
            document.querySelector('.slide-wrapper:nth-child(7)').classList.add('transl-right');
            document.querySelector('.slide-wrapper:nth-child(7)').classList.remove('transl-left');
            //removendo right e adicionando left no slide 5
            document.querySelector('.slide-wrapper:nth-child(5)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(5)').classList.add('transl-left');
        }
        else if (sbody.classList.contains(slclasses[6])){
            //removendo left e right do slide 7
            document.querySelector('.slide-wrapper:nth-child(7)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(7)').classList.remove('transl-left');
            //removendo left e adicionando right no slide 8
            document.querySelector('.slide-wrapper:nth-child(8)').classList.add('transl-right');
            document.querySelector('.slide-wrapper:nth-child(8)').classList.remove('transl-left');
            //removendo right e adicionando left no slide 6
            document.querySelector('.slide-wrapper:nth-child(6)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(6)').classList.add('transl-left');
        }
        else if (sbody.classList.contains(slclasses[7])){
            //removendo left e right do slide 8
            document.querySelector('.slide-wrapper:nth-child(8)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(8)').classList.remove('transl-left');
            //removendo left e adicionando right no slide 1
            document.querySelector('.slide-wrapper:nth-child(1)').classList.add('transl-right');
            document.querySelector('.slide-wrapper:nth-child(1)').classList.remove('transl-left');
            //removendo right e adicionando left no slide 7
            document.querySelector('.slide-wrapper:nth-child(7)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(7)').classList.add('transl-left');
        }
        
        
    
}

function swapSlidRight(){
        if(sbody.classList.contains(slclasses[0]) === true){
            sbody.classList.remove(slclasses[0]);
            sbody.classList.add(slclasses[1]);
        } else if (sbody.classList.contains(slclasses[1]) === true){
            sbody.classList.remove(slclasses[1]);
            sbody.classList.add(slclasses[2]);
        } else if (sbody.classList.contains(slclasses[2]) === true){
            sbody.classList.remove(slclasses[2]);
            sbody.classList.add(slclasses[3]);
        } else if (sbody.classList.contains(slclasses[3]) === true){
            sbody.classList.remove(slclasses[3]);
            sbody.classList.add(slclasses[4]);
        } else if (sbody.classList.contains(slclasses[4]) === true){
            sbody.classList.remove(slclasses[4]);
            sbody.classList.add(slclasses[5]);
        } else if (sbody.classList.contains(slclasses[5]) === true){
            sbody.classList.remove(slclasses[5]);
            sbody.classList.add(slclasses[6]);
        } else if (sbody.classList.contains(slclasses[6]) === true){
            sbody.classList.remove(slclasses[6]);
            sbody.classList.add(slclasses[7]);
        } else if (sbody.classList.contains(slclasses[7]) === true){
            sbody.classList.remove(slclasses[7]);
            sbody.classList.add(slclasses[0]);
        }
        sec = [];
        slideFix();
}

function swapSlidLeft(){
        if(sbody.classList.contains(slclasses[0]) === true){
            sbody.classList.remove(slclasses[0]);
            sbody.classList.add(slclasses[7]);
        } else if (sbody.classList.contains(slclasses[1]) === true){
            sbody.classList.remove(slclasses[1]);
            sbody.classList.add(slclasses[0]);
        } else if (sbody.classList.contains(slclasses[2]) === true){
            sbody.classList.remove(slclasses[2]);
            sbody.classList.add(slclasses[1]);
        } else if (sbody.classList.contains(slclasses[3]) === true){
            sbody.classList.remove(slclasses[3]);
            sbody.classList.add(slclasses[2]);
        } else if (sbody.classList.contains(slclasses[4]) === true){
            sbody.classList.remove(slclasses[4]);
            sbody.classList.add(slclasses[3]);
        } else if (sbody.classList.contains(slclasses[5]) === true){
            sbody.classList.remove(slclasses[5]);
            sbody.classList.add(slclasses[4]);
        } else if (sbody.classList.contains(slclasses[6]) === true){
            sbody.classList.remove(slclasses[6]);
            sbody.classList.add(slclasses[5]);
        } else if (sbody.classList.contains(slclasses[7]) === true){
            sbody.classList.remove(slclasses[7]);
            sbody.classList.add(slclasses[6]);
        }
        sec = [];
        slideFix();
}

/*              PASSANDO O SLIDE ATRAVÉS DO MARCADOR                */
document.querySelector('.slide-sdentify-content:nth-child(1)').addEventListener('click',function(){
    slideClean();
    sbody.classList.add('show-sl1');
    slideFix()
});
document.querySelector('.slide-sdentify-content:nth-child(2)').addEventListener('click',function(){
    slideClean();
    sbody.classList.add('show-sl2');
    slideFix()
});
document.querySelector('.slide-sdentify-content:nth-child(3)').addEventListener('click',function(){
    slideClean();
    sbody.classList.add('show-sl3');
    slideFix()
});
document.querySelector('.slide-sdentify-content:nth-child(4)').addEventListener('click',function(){
    slideClean();
    sbody.classList.add('show-sl4');
    slideFix()
});
document.querySelector('.slide-sdentify-content:nth-child(5)').addEventListener('click',function(){
    slideClean();
    sbody.classList.add('show-sl5');
    slideFix()
});
document.querySelector('.slide-sdentify-content:nth-child(6)').addEventListener('click',function(){
    slideClean();
    sbody.classList.add('show-sl6');
    slideFix()
});
document.querySelector('.slide-sdentify-content:nth-child(7)').addEventListener('click',function(){
    slideClean();
    sbody.classList.add('show-sl7');
    slideFix()
});
document.querySelector('.slide-sdentify-content:nth-child(8)').addEventListener('click',function(){
    slideClean();
    sbody.classList.add('show-sl8');
    slideFix()
});

function slideAuto(){
    if(sec.length < 4) { 
    sec.push('a');
    } else{
        swapSlidRight();
    }
}

setInterval(slideAuto,1000);

/* window.alert('Atenção! Este site está em desenvolvimento. Portanto, algumas funcionalidades podem não estar prontas. Agradecemos a sua visita!') */

(function ($) {

    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
  
    $('.back-to-top').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
})