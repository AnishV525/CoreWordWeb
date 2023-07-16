const scriptURL = 'https://script.google.com/macros/s/AKfycbzV7_UgyiDAd21q0Y50SYeAjnRVq_tQUNkUgLZfnuxDt-aAkSQPoh_g0BDK2TidjMzYRQ/exec';
const form = document.forms['contact-form'];
const msg = document.getElementById('msg');

const ContactForm = () => {
    return (   
        form.addEventListener('submit', e => {
            e.preventDefault();
    
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
    
                    msg.innerHTML = "Thanks for your message"
                    setTimeout(function () {
                        msg.innerHTML = ''
                    }, 3000)
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message))
        })

    );
};


export default ContactForm;