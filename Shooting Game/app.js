var jet = document.getElementById("jet");
var jet2 = document.getElementById("jet2");
var board = document.getElementById("board");

window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
  if (e.key == "ArrowLeft" && left > 0) {
    jet.style.left = left - 10 + "px";
  }
  //460  =>  board width - jet width
  else if (e.key == "ArrowRight" && left <= 460) {
    jet.style.left = left + 10 + "px";
  }

  if (e.key == "ArrowUp" || e.keyCode == 32) {
    //32 is for space key
    var bullet = document.createElement("div");
    bullet.classList.add("bullets");
    board.appendChild(bullet);

    var movebullet = setInterval(() => {

           {
            //Scoreboard
            document.getElementById("points").innerHTML =
              parseInt(document.getElementById("points").innerHTML) + 1;
          }

      var bulletbottom = parseInt(
        window.getComputedStyle(bullet).getPropertyValue("bottom")
      );

      //Stops the bullet from moving outside the gamebox
      if (bulletbottom >= 500) {
        clearInterval(movebullet);
      }

      bullet.style.left = left + "px"; //bullet should always be placed at the top of my jet..!
      bullet.style.bottom = bulletbottom + 3 + "px";

      //HealthBar
      let health1 = document.getElementById("health1")
        health1.value -= 0.05;
    });
  }
});

//----------------------------------------PLAYER-2-----------------------------------------------------------


window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(jet2).getPropertyValue("left"));
  if (e.keyCode == 65 && left > 0) {
    jet2.style.left = left - 10 + "px";
  }
  //460  =>  board width - jet2 width
  else if (e.keyCode == 68 && left <= 460) {
    jet2.style.left = left + 10 + "px";
  }

  if (e.keyCode == 87) {
    //87 is for space key
    var bullet = document.createElement("div");
    bullet.classList.add("bullets2");
    board.appendChild(bullet);

    var movebullet = setInterval(() => {
           {
            //Scoreboard
            document.getElementById("points").innerHTML =
              parseInt(document.getElementById("points").innerHTML) + 1;
          }
        
      var bullettop = parseInt(
        window.getComputedStyle(bullet).getPropertyValue("top")
      );

      //Stops the bullet from moving outside the gamebox
      if (bullettop >= 500) {
        clearInterval(movebullet);
      }

      bullet.style.left = left + "px"; //bullet should always be placed at the top of my jet2..!
      bullet.style.top = bullettop + 3 + "px";

      //HealthBar
      let health2 = document.getElementById("health2");
            health2.value -= 0.05;

    });
  }
});



