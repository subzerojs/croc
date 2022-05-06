import View from './View.js';
import Game from './Game.js';

window.onload = function (){
  const view = new View()
  const game = new Game(view)
  view.controlsHandler(value=>{
          game.checkAnswer(value);
  })
}