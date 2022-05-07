class View {
  $left = document.querySelector('.view__left');
  $center = document.querySelector('.view__center img');
  $right = document.querySelector('.view__right');
  $controls = document.querySelector('.controls');
  $success = document.querySelector('.top-bar__success--value');
  $failure = document.querySelector('.top-bar__failure--value');
  $timer = document.querySelector('.top-bar__timer');
  statusImg = {
      quetion: 'img/quetion.png', 
      success: 'img/success.png', 
      failure: 'img/failure.png'
  }

  maxImgIndex = 5;

  getImageNode (img){
    return `<img class="view__candy" src="img/candy-${img.index}.png" style="transform: rotate(${img.rotate}deg)" />`;
  }

  constructor (){
    this.mount();
  }
  mount (){
    this.$controls.addEventListener('click', e=>{
      if(e.target.tagName!=='IMG') return;
      this.callback(e.target.dataset.value);
    })
  }
  controlsHandler (callback){
    this.callback = callback;
  }
  outputLeft (data){
    this.$left.innerHTML = '';
    data.forEach(imgData=>{
        this.$left.innerHTML += this.getImageNode(imgData);
    })
    
  }
  outputCenter (status){
    this.$center.src = this.statusImg[status];
  }
  outputRight (data){
    this.$right.innerHTML = '';
    data.forEach(imgData=>{
        this.$right.innerHTML += this.getImageNode(imgData);
    })
  }
  outputSuccess (n){
    this.$success.innerHTML = n;
  }
  outputFailure(n){
    this.$failure.innerHTML = n;
  }
  outputTimer (t){
    this.$timer.innerHTML = t;
  }
}

export default View;