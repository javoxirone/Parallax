let cloud = document.querySelectorAll('.cloud')
let boat = document.querySelector('.boat')
let fantasy = document.querySelector('.fantasy')
let h1 = document.querySelector('.header__title')

let txt = h1.innerHTML
h1.innerHTML = ''

function str(i = 0) {
  h1.innerHTML += txt[i]
  i++
  
  if (i < txt.length) {
    setTimeout(() => {
      str(i)
    }, 200);
  }
  
}

str()

window.addEventListener('scroll', () => {
  // console.log(this.scrollY);
  let windowY = this.scrollY
  
  fantasy.style.objectPosition = `0 ${windowY / 10}%`
  
  cloud.forEach(clouds => {
    // console.log(clouds);
    
    const speed = clouds.getAttribute('data-speed')
    
    clouds.style.transform = `translateX(${windowY * speed}px)`
    
  })
  
  const boatSpeed = boat.getAttribute('data-speed')
  
  boat.style.transform = `translateX(${windowY * boatSpeed}px)`
  
})


// parallax start

let parallaxBox = document.querySelector('.parallax__box')
let layer = document.querySelectorAll('.layer')

parallaxBox.addEventListener('mousemove', (e) => {
  // console.log(e.pageX);
  
  layer.forEach(layers => {
    
    const speed = layers.getAttribute('data-speed')
    
    const x = (window.innerWidth - e.pageX * speed) / 100
    const y = (window.innerHeight - e.pageY * speed) / 100
    
    layers.style.transform = `translate(${x}px, ${y}px)`
    
  })
  
})

// console.log(window.innerHeight);

// parallax end


// timer start

let timerNum = document.querySelectorAll('.timer__num')
let timer = document.querySelector('.timer')

// console.log(timer.offsetTop); /* 1938 */
// console.log(timer.clientHeight); /* 350 */
// console.log(timer.offsetTop - timer.clientHeight * 2);

window.addEventListener('scroll', function onScroll() {
  // console.log(pageYOffset); /* 1319 */
  
  if (pageYOffset >= (timer.offsetTop - timer.clientHeight * 2)) {
    for (let i = 0; i < timerNum.length; i++) {
  
      const count = +timerNum[i].getAttribute('data-timer')
      timerNum[i].innerHTML = 0
      
      function scrollCount(k = 0) {
        timerNum[i].innerHTML = k
        k++
        
        if (k <= count) {
          setTimeout(() => {
            scrollCount(k)
          }, 20);
        }
        
      }
      scrollCount()
    }
    
    this.removeEventListener('scroll', onScroll)
  }
  
})

// timer end