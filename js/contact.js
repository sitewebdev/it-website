/*jshint esversion: 6 */
let contact;
let contactConfirmation=$('.form-contact-confirmation');

const validateFormContact = (idOrClassEment, idButton) => {
    validateFormulaire(idOrClassEment) ? sendMail(idOrClassEment) : '';
}
function sendMail(idForm) {
    contact = {
        email: $('#input-contact-email').val(),
        name: $('#input-contact-name').val(),
        societe: $('#input-contact-societe').val(),
        telephone: $('#phone').val()?`(+${iti.getSelectedCountryData().dialCode}) `+$('#phone').val() :'',
        subject: $('#input-contact-sujet').val(),
        message: $('#textarea-contact-message').val()
    }
    const fd = new FormData()
    fd.append('pieceJointe', document.getElementById('input-contact-piece-jointe').files[0])
    fd.append('contact',JSON.stringify(contact))
    fetch(`${server.host_node}:${server.port_node}/api/contact-send`, {
        method: 'POST',
        body: fd
    })
        .then((response) => {
            if (!response.ok)
            {
                throw new Error(response)
            }
            return response.json();
        })
        .then((data) => {
            if(data)
            {
                contactConfirmation.show();
                contactConfirmation.text(`Votre message a été envoyé.`);
                resetForm(idForm)
                setTimeout(function () {
                    contactConfirmation.hide()
                }, 4500)
            }
        })
        .catch((error) => {
            contactConfirmation.show();
            contactConfirmation.css('color','red')
            contactConfirmation.text(`Erreur lors de l'envoi.`);
            setTimeout(function () {
                contactConfirmation.hide();
                contactConfirmation.css('color','green')
            }, 4500)
        });
}
