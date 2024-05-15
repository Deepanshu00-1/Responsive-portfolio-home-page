"Use strict";

const sunIcon = document.querySelector('.Sun');
const moonIcon = document.querySelector('.Moon');


document.getElementById('moon').addEventListener('click', function(){

    document.querySelector('body').classList.toggle('darkMode');

});

document.getElementById('bar').addEventListener('click',function(){
    document.querySelector('.responsiveNav').classList.toggle('rnav');
})

document.getElementById('close').addEventListener('click', function(){
    document.querySelector('.responsiveNav').classList.toggle('rnav');
})


// document.querySelector('.main').style.backgroundColor = 'rgb(19, 18, 18)';
    // document.querySelector('.nav-part2 ul').style.color = 'white';
    // document.querySelector('.info p').style.color = 'white';
    // document.querySelector('.info h1').style.color = 'white';
    // document.querySelector('.mylogo').style.box-shadow == '4px 15px 10px white';
    // document.querySelector('.info span').text-shadow == '4px 7px 10px 10px white';
    // document.querySelector('.social i').text-shadow == '10px 10px 20px white';




// document.getElementById('moon').addEventListener('click', function(){
//     document.querySelector('.main').style.backgroundColor = 'white';
//     document.querySelector('.nav-part2 ul').style.color = 'black';
//     document.querySelector('.info p').style.color = 'black';
//     document.querySelector('.info h1').style.color = 'black';
//     document.querySelector('.mylogo').style.box-shadow == 'none';
// })