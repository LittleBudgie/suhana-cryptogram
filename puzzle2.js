function get_hint() {
  document.getElementById("hint").style.color = "white";
}

function check_answer() {
  if (document.getElementById("one-one").value == 'R' && document.getElementById("one-two").value == 'E' && document.getElementById("one-three").value == 'S' && document.getElementById("one-four").value == 'N' && document.getElementById("one-five").value == 'I' && document.getElementById("one-six").value == 'C' && document.getElementById("one-seven").value == 'K')
  {
    if (document.getElementById("two-one").value == 'S' && document.getElementById("two-two").value == 'U' && document.getElementById("two-three").value == 'S' && document.getElementById("two-four").value == 'T' && document.getElementById("two-five").value == 'A' && document.getElementById("two-six").value == 'I' && document.getElementById("two-seven").value == 'N' &&  document.getElementById("two-eight").value == 'A' && document.getElementById("two-nine").value == 'B' && document.getElementById("two-ten").value == 'I' && document.getElementById("two-eleven").value == 'L' && document.getElementById("two-twelve").value == 'I' && document.getElementById("two-thirteen").value == 'T' && document.getElementById("two-fourteen").value == 'Y')
    {
      if (document.getElementById("three-one").value == 'C' && document.getElementById("three-two").value == 'E' && document.getElementById("three-three").value == 'N' && document.getElementById("three-four").value == 'T' && document.getElementById("three-five").value == 'E' && document.getElementById("three-six").value == 'R')
      {
        alert("You got it right!");
        window.location.href = "puzzle3.html";
      }
      else
      {
        alert("try again!");
      }
    }
    else
    {
      alert("try again!");
    }
  }
  else
  {
    alert("try again!");
  }
}
