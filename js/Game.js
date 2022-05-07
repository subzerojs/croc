class Game {
  leftValue = 0;
  rightValue = 0;
  minCandies = 1;
  maxCandies = 15;
  successCounter = 0;
  failureCounter = 0;
  maxTime = 7;
  interval = null;
  constructor (view){
    this.__view = view;
    this.reset();
  }
  resetRound (){
    this.resetTimer();
    this.leftValue = this.generateCandies();
    this.rightValue = this.generateCandies(); 
    this.__view.outputLeft( this.leftValue );
    this.__view.outputCenter('quetion');
    this.__view.outputRight( this.rightValue );
  }
  resetRoundWithTimeout (){
    clearInterval(this.interval);
    setTimeout(()=>{
      this.resetRound();
    }, 1000)
  }
  reset (){
    this.successCounter = 0;
    this.failureCounter = 0;
    this.__view.outputSuccess(0);
    this.__view.outputFailure(0);
    this.resetRound();
  }
  resetTimer (){
    this.time = this.maxTime;
    this.__view.outputTimer(this.time);
    this.interval = setInterval(()=>{
        this.__view.outputTimer(--this.time);
        if(this.time!==0) return;
        clearInterval(this.interval);
        this.failure();
    }, 1000)
    
  }
  getRandom (min, max){
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  generateCandies (){
    const max = this.getRandom (this.minCandies, this.maxCandies); 
    const candies = [];
    for(let i=0;i<max;i++){
      const obj = {
        index: this.getRandom(0, 5),
        rotate: this.getRandom(0, 180)
      }
      candies.push(obj);
    }
    return candies;
  }
  success (){
    this.__view.outputSuccess(++this.successCounter);
    this.__view.outputCenter('success');
    this.resetRoundWithTimeout();
  }
  failure (){
    this.__view.outputFailure(++this.failureCounter);
    this.__view.outputCenter('failure');
    this.resetRoundWithTimeout();
  }
  checkAnswer (value){
    switch (value){
      case '<':
        (this.leftValue<this.rightValue)?this.success():this.failure();
        break;
      case '=':
        (this.leftValue===this.rightValue)?this.success():this.failure();
        break;
      case '>':
        (this.leftValue>this.rightValue)?this.success():this.failure();
        break;
    }
  }
}

export default Game;

/**
 *
document.getElementById('myAudioTagID').play();

//play audio with out html audio tag
var myAudio = new Audio('my_great_song.mp3');
myAudio.play();
 */