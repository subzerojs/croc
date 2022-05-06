class View {
  $left = document.querySelector('.view__left')
  $center = document.querySelector('.view__center img')
  $right = document.querySelector('.view__right')
  controls = document.querySelector('.controls')
  centerValue = [
      'img/quetion.png', 
      'img/control-left.png', 
      'img/control-center.png',
      'img/control-right.png'
  ]

  constructor (){
    this.mount();
  }
  mount (){
    this.controls.addEventListener('click', e=>{
      if(e.target.tagName!=='IMG') return;
      this.callback(e.target.dataset.value);
    })
  }
  controlsHandler (callback){
    this.callback = callback;
  }
  outputLeft (data){
    this.$left.innerHTML = data
  }
  outputCenter (n){
    this.$center.src = this.centerValue[n];
  }
  outputRight (data){
    this.$right.innerHTML = data
  }
}

export default View;