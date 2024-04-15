import { Resend } from 'resend';

const resend = new Resend('re_XRYTCgvU_PcXybr1pBuDX7pQ68L2eEygx');

const name = 'Marus'
const telephone = '123456789'
const email = 'maxizero@gmail.com'
const message = 'Hola, quisiera contratar uno de sus servicios'

resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: `Nuevo mensaje enviado a través del formulario de Tripartita`,
    html: `<p>Hola, este es un nuevo contacto desde el formulario de Tripartita</p>
            <h3>Datos:</h3>
            <p>Nombre: ${name}<br>Teléfono: ${telephone}<br>Mail de contacto: ${email}</p>
            <h3>Mensaje:</h3>
            <p>${message}</strong>!</p>`
});

// document.querySelector("form").addEventListener("submit", e => {
//     e.preventDefault()
    
//     const { name, telephone, email, message} = e.target
    
//     console.log(name.value, telephone.value, email.value, message.value)

//     resend.emails.send({
//         from: 'onboarding@resend.dev',
//         to: email.value,
//         subject: `Soy ${name.value}`,
//         html: `<p>${message.value}</strong>!</p>`
//     });
    
// })

