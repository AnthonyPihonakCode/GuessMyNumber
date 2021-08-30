// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 19;
// document.querySelector('.guess').value = 23;
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

console.log(number);

document.querySelector('.check').addEventListener('click', function(){
    // console.log(document.querySelector('.guess').value)
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    if(!guess){
        document.querySelector('.message').textContent = 'no number';
    }else if(guess === number){
        document.querySelector('.message').textContent = 'You Win!';
        document.querySelector('body').style.backgroundColor = 'blue';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = number;

        if(score > highScore){
            highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        }
    
        
    }else if(guess !== number){
        if(score > 1){
            document.querySelector('.message').textContent 
            = guess > number ? 'Too High' : 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'You Lose';
        document.querySelector('.score').textContent = 0;
    }
 
}})
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
console.log('.again')
})