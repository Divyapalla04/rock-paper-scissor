function play(player) {
    const choices = ['rock', 'paper', 'scissors'];
    const computer = choices[Math.floor(Math.random() * 3)];
  
    document.getElementById('player-choice').textContent = `Your Choice: ${capitalize(player)}`;
    document.getElementById('computer-choice').textContent = `Computer's Choice: ${capitalize(computer)}`;
  
    let result = '';
  
    if (player === computer) {
      result = "It's a Draw!";
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      result = 'You Win!';
    } else {
      result = 'Computer Wins!';
    }
  
    document.getElementById('winner').textContent = `Result: ${result}`;
  }
  
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  