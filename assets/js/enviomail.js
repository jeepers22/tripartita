const nodemailer = require("nodemailer")

enviarMail = async () => {
    const config = {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: "maxizero@gmail.com",
            pass: "rymw tbso ilps vgke",
        },
    }

    const mensaje = {
        from: "maxitolalala@gmail.com",
        to: "maxizero@gmail.com",
        subject: "Mail de pruebas de Tripartita",
        text: "Este es un correo del formulario de pruebas y estoy cansado",
    }

    const transport = nodemailer.createTransport(config)

    const info = await transport.sendMail(mensaje)
    console.log(info)
}

enviarMail()
// export { enviarMail }  PROBAR ESTO
