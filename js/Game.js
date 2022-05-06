class Game {

  constructor (view){
    this.__view = view;
    this.leftValue = 0;
    this.rightValue = 0;
    this.startRound();
  }
  startRound (){
    this.leftValue = this.getRandom (1, 10); 
    this.rightValue = this.getRandom (1, 10);

    this.__view.outputLeft( this.leftValue );
    this.__view.outputCenter(0);
    this.__view.outputRight( this.rightValue );
  }
  getRandom (min, max){
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  success (n){
    alert('Правильно')
    this.__view.outputCenter(n)
    setTimeout(()=>{
      this.startRound();
    }, 1000)
  }
  failure (){
    alert('НЕ правильно')
  }
  checkAnswer (value){
    switch (value){
      case '<':
        (this.leftValue<this.rightValue)?this.success(1):this.failure();
        break;
      case '=':
        (this.leftValue===this.rightValue)?this.success(2):this.failure();
        break;
      case '>':
        (this.leftValue>this.rightValue)?this.success(3):this.failure();
        break;

    }
  }
}

export default Game;