// Rock Paper Scissors



M1
const rps = (p1, p2) => {
    if(p1 == "scissors" && p2 == "paper" ||
      p1 == "rock" && p2 == "scissors" || p1 == "paper" && p2 == "rock")
      return "Player 1 won!"
    
      else if(p1 == "scissors" && p2 == "rock" || p1 == "rock" && p2 == "paper" ||
             p1 == "paper" && p2 == "scissors" )
      return "Player 2 won!"
    else return "Draw!"
  };


  //M2
  const rps1 = (p1,p2) => {
    return p1 == "scissors" && p2 == "paper" || 
    p1 == "rock" && p2 == "scissors" || 
    p1 == "paper" && p2 == "rock" ? "Player 1 won!" : p1 == "scissors" && p2 == "rock" || 
    p1 == "rock" && p2 == "paper" ||
     p1 == "paper" && p2 == "scissors" ? "Player 2 won!" : "Draw!"
  }