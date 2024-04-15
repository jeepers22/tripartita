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
        from: formObject.email,
        to: "maxizero@gmail.com",
        name: formObject.name,
        telephone: formObject.tephone,
        subject: "Mail de pruebas de Tripartita",
        text: formObject.message,
    }

    const transport = nodemailer.createTransport(config)

    const info = await transport.sendMail(mensaje)
    console.log(info)
}

enviarMail()