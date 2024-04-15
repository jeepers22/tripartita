// const btn = document.getElementById('button');

document.querySelector('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

//    btn.value = 'Sending...';

   const serviceID = 'service_7l0kw8a';
   const templateID = 'template_26nlnqe';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    //   btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
    //   btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});