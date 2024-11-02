function myFunction() {
    let x = document.getElementById("menubarra");
    if (x.className === "barratop") {
      x.className += " responsive";
    } else {
      x.className = "barratop";
    }
  }
  