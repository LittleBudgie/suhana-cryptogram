function get_hint() {
  document.getElementById("hint").style.color = "white";
}

function check_answer() {
  if (document.getElementById("one-one").value == 'N' && document.getElementById("one-two").value == 'O')
  {
    if (document.getElementById("two-one").value == 'O' && document.getElementById("two-two").value == 'N' && document.getElementById("two-three").value == 'E')
    {
      if (document.getElementById("three-one").value == 'S' && document.getElementById("three-two").value == 'H' && document.getElementById("three-three").value == 'A' && document.getElementById("three-four").value == 'L' && document.getElementById("three-five").value == 'L')
      {
        if (document.getElementById("four-one").value == 'T' && document.getElementById("four-two").value == 'A' && document.getElementById("four-three").value == 'K' && document.getElementById("four-four").value == 'E')
        {
          if (document.getElementById("five-one").value == 'U' && document.getElementById("five-two").value == 'N' && document.getElementById("five-three").value == 'F' && document.getElementById("five-four").value == 'A' && document.getElementById("five-five").value == 'I'&& document.getElementById("five-six").value == 'R')
          {
            if (document.getElementById("six-one").value == 'A' && document.getElementById("six-two").value == 'D' && document.getElementById("six-three").value == 'V' && document.getElementById("six-four").value == 'A' && document.getElementById("six-five").value == 'N'&& document.getElementById("six-six").value == 'T' && document.getElementById("six-seven").value == 'A' && document.getElementById("six-eight").value == 'G' && document.getElementById("six-nine").value == 'E')
            {
              if (document.getElementById("seven-one").value == 'O' && document.getElementById("seven-two").value == 'F')
              {
                if (document.getElementById("eight-one").value == 'A' && document.getElementById("eight-two").value == 'N' && document.getElementById("eight-three").value == 'Y')
                {
                  if (document.getElementById("nine-one").value == 'O' && document.getElementById("nine-two").value == 'T' && document.getElementById("nine-three").value == 'H' && document.getElementById("nine-four").value == 'E' && document.getElementById("nine-five").value == 'R')
                      {
                        if (document.getElementById("ten-one").value == 'M' && document.getElementById("ten-two").value == 'E' && document.getElementById("ten-three").value == 'M' && document.getElementById("ten-four").value == 'B' && document.getElementById("ten-five").value == 'E' && document.getElementById("ten-six").value == 'R')
                        {
                          if (document.getElementById("eleven-one").value == 'O' && document.getElementById("eleven-two").value == 'F')
                          {
                            if (document.getElementById("twelve-one").value == 'T' && document.getElementById("twelve-two").value == 'H' && document.getElementById("twelve-three").value == 'E')
                            {
                              if (document.getElementById("thirteen-one").value == 'C' && document.getElementById("thirteen-two").value == 'A' && document.getElementById("thirteen-three").value == 'L' && document.getElementById("thirteen-four").value == 'T' && document.getElementById("thirteen-five").value == 'E' && document.getElementById("thirteen-six").value == 'C' && document.getElementById("thirteen-seven").value == 'H')
                              {
                                if (document.getElementById("fourteen-one").value == 'C' && document.getElementById("fourteen-two").value == 'O' && document.getElementById("fourteen-three").value == 'M' && document.getElementById("fourteen-four").value == 'M' && document.getElementById("fourteen-five").value == 'U' && document.getElementById("fourteen-six").value == 'N' && document.getElementById("fourteen-seven").value == 'I'&& document.getElementById("fourteen-eight").value == 'T' && document.getElementById("fourteen-nine").value == 'Y')
                                {
                                  alert("You got it right!");
                                  window.location.href = "puzzle2.html";
                                }
                              }
                            }
                          }
                        }
                      }
                }
              }
            }
          }
        }
      }
    }
  }
  else
  {
    alert("try again!");
  }
}