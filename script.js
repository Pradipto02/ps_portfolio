var typed = new Typed('.para .type-js', {
    strings: ['<p>Web Designing.</p>', '<p>Machine Learning.</p>','<p>Deep Learning.</p>'],
    smartBackspace: true, // Default value
    loop:true,
    showCursor: true,
    backSpeed: 20,
    typeSpeed: 30,
  });
  const scrollTo=(element)=>{
     window.scroll({
      behavior:"smooth",
      left: 0,
      top: element.offsetTop
     });
  }
  document.querySelector(".button-about .btn").addEventListener("click",function(){
    scrollTo(document.querySelector(".second"));
  });