// import { objectArray } from './backend';
// import './backend.js';
// import './bootstrap.css';
import './styles.css';


let allCards = {
  card01: false,
  card02: false,
  card03: false,
  card04: false,
};

var counter = 0;

function flip() {
  if (counter %2 === 0){
    $('.front').slideDown(2000);
    $('.back').slideUp(2000);
  }
}


$(document).ready(function() {
  $('.card').click(function(){
    counter+=1;
    const ids = $(this).attr('id');
    const keys = Object.keys(allCards);

    var toggle = keys.forEach((key) => {
      if (key == ids) {
        if (allCards[key] === true) {
          return;
        }
        else {
          allCards[key]= !allCards[key];
          $(this).children().children('.front').slideToggle();
          $(this).children().children('.back').slideToggle();
          $(this).children().toggleClass("flipped");


        }
        // console.log("YAY"+key+ids+index);
      }
      else {
        // console.log("BOO");
      }
    });

    flip();


    $(".responseA").text(ids);
    $(".responseB").text(keys);

    console.log(allCards);


  });
});
