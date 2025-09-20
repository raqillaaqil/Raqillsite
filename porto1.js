function validateForm() {
  var name = document.forms["contactForm"]["name"].value.trim();
  var email = document.forms["contactForm"]["email"].value.trim();
  var message = document.forms["contactForm"]["message"].value.trim();
  if (name === "") {
    alert("Please enter your name.");
    return false;
  }
  if (email === "") {
    alert("Please enter your email.");
    return false;
  }
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    alert("Please enter a valid email address.");
    return false;
  }
  if (message === "") {
    alert("Please enter your message.");
    return false;
  }
  alert("Thank you for contacting me, " + name + "! I will get back to you soon.");
  document.forms["contactForm"].reset();
  return false; // prevent actual form submission for demo
}

const counters = document.querySelectorAll('.count');
const speed = 200; // semakin kecil = semakin cepat

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 15);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});






