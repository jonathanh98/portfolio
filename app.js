const scaleFactor = 1/20
let constrasttoggle = false
let isModalOpen = false 

function togglecontrast(){
    constrasttoggle = !constrasttoggle
    if(constrasttoggle){
      document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove('dark-theme')
    }
    
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
      .sendForm(
        "service_xhn5026",
        "template_4vil4te",
        event.target,
        "UTNTzC9i6PwExBafV"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on higginsjonathan398@gmail.com"
        );
      });
  }
  function toggleModal(){
    
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove('modal--open')
    }
    isModalOpen = true;
    // toggle modal
    document.body.classList += " modal--open";
  }

  function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
  
    for (let i = 0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
    }
  }