document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const toggleButton = document.getElementById('toggleButton');
    const toggleLink = toggleButton.querySelector('a');
  
    // ngecek bakal di sum julah porotofolio-itembya
    if (portfolioItems.length <= 8) {
      toggleButton.style.display = 'none';
    }
  
    toggleButton.addEventListener('click', function() {
      content.classList.toggle('expanded');
      
      if (content.classList.contains('expanded')) {
        toggleLink.textContent = 'Show Less';
      } else {
        toggleLink.textContent = 'Show More';
      }
    });
  });
  
  function validateForm() {
    let isValid=true;
    // masukin inputnya dari doc html
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    //pembuatan syarat
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    
    if (name === '') {
        alert('Please enter your name.');
        isValid= false;
    }
    if (email === '') {
        alert('Please enter your email.');
        isValid= false;
    }
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        isValid= false;
    }

    //sukses satisfy semuanya
    
    return isValid;
}
function submitForm(event) {
  // membat kondisi hanya di event itu saja
  event.preventDefault();

  // panggil fungsi validate form
  if (validateForm()) {
    
    const myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
    myModal.show();
  }
}







//fungsi untuk yag dapet onclick fugsi ini akan dapat sound aneh 
function playRandomSound() {
 
//kumpulan suara
    var sounds = [
        '1.wav',
        '2.wav',
        '3.wav',
        '4.wav',
        '5.wav',
    ];

    
    // judi suara
    var randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    

    var audio = new Audio(randomSound);
    audio.play();

}



// ini untuk parallax efek

document.addEventListener('scroll', function() {
    const parallax1 = document.querySelector('.parallax1');
    const parallax2 = document.querySelector('.parallax2');
    const parallax3 = document.querySelector('.parallax3');
    const scrollPosition = window.scrollY;

    // y kebawah minus direksinya 
    parallax1.style.backgroundPositionY = `${scrollPosition * -0.05}px`; // + kalo plus ke skrol bawah malah tambah ats
    parallax2.style.backgroundPositionY = `${scrollPosition * -0.2}px`; 
    parallax3.style.backgroundPositionY = `${scrollPosition * -0.7}px`; 
});
