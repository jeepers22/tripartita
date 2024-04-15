import { Resend } from 'resend';

const resend = new Resend('re_XRYTCgvU_PcXybr1pBuDX7pQ68L2eEygx');

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault()

    const { name, telephone, email, message} = e.target
    console.log(name.value, telephone.value, email.value, message.value)

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'maxizero@gmail.com',
        subject: `Nuevo mensaje enviado a través del formulario de Tripartita`,
        html: `<p>Hola, este es un nuevo contacto desde el formulario de Tripartita</p>
                <h3>Datos:</h3>
                <p>Nombre: ${name.value}<br>Teléfono: ${telephone.value}<br>Mail de contacto: ${email.value}</p>
                <h3>Mensaje:</h3>
                <p>${message.value}</strong>!</p>`
    });
})
