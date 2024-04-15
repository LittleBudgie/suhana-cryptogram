function get_hint() {
  document.getElementById("hint").style.color = "white";
}

function check_answer() {
  if (document.getElementById("one-one").value == 'R' && document.getElementById("one-two").value == 'E' && document.getElementById("one-three").value == 'D')
  {
    if (document.getElementById("two-one").value == 'D' && document.getElementById("two-two").value == 'O' && document.getElementById("two-three").value == 'O' && document.getElementById("two-four").value == 'R')
    {
      if (document.getElementById("three-one").value == 'C' && document.getElementById("three-two").value == 'A' && document.getElementById("three-three").value == 'F' && document.getElementById("three-four").value == 'E')
      {
        alert("You got it right!");
        window.location.href = "index.html";
      }
    }
  }
  else
  {
    alert("try again!");
  }
}
