
  function myFunction() {
    let x = document.getElementById("menubarra");
    if (x.className === "barratop") {
      x.className += " responsive";
    } else {
      x.className = "barratop";
    }
  }
  function personajes() {
    let y = document.getElementById("sub1");
    if (y.className === "per") {
      y.className += " responsive";
    } else {
      y.className = "per";
    }
  }
  function episodios() {
    let z = document.getElementById("sub2");
    if (z.className === "epi") {
      z.className += " responsive";
    } else {
      z.className = "epi";
    }
  }
  $(window).scroll(function(){
    if($(window).scrollTop()>50){
      $('.irarriba').addClass('nueva-clase');
    } else{
      $('.irarriba').removeClass('nueva-clase')
    }
  });