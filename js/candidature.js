/*jshint esversion: 6 */
let nom = $('.inp-form-postuler-nom')
let email = $('.inp-form-postuler-email')
let phone = $('.inp-form-postuler-phone')
let disponibilite = $('.inp-form-postuler-disponibilite')
let poste = $('.inp-form-postuler-poste')
let mobilite = $('.inp-form-postuler-mobilite')
let cv = $('.inp-form-postuler-cv')
let letteMotivation = $('.inp-form-postuler-lm')
let message = $('.inp-form-postuler-message')
let confirmationMessage = $('.form-postuler-confirmation');
let prenom=$('.inp-form-postuler-prenom')
const validateFormCandidature = (idOrClassEment, idButton) => {
    validateFormulaire(idOrClassEment) ? sendCandidature(idOrClassEment) : '';
}

const sendCandidature = (idForm) => {
    const blob = new Blob([JSON.stringify({
        nom: nom.val() ? nom.val() : '',
        prenom:prenom.val()?prenom.val():'',
        email: email.val() ? email.val() : '',
        poste: poste.val() ? poste.val().replace(/[/\\?%*:|"<>]/g, "_")  : poste.text() ? poste.text().toLowerCase().replace(/[/\\?%*:|"<>]/g, "_") : '',
        telephone: phone.val() ? phone.val() : '',
        message: message.val() ? message.val() : '',
        datePostulation: new Date()
    })], {
        type: "application/json;charset=utf-8"
    });
    const fd = new FormData()
    fd.append('cv', cv.get(0).files[0])
    fd.append('candidature', blob)
    fd.append('lm', letteMotivation.get(0).files[0])
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `${server.url_prefix}/rms/api/public/saveAng`,
        "method": "POST",
        "processData": false,
        "contentType": false,
        "data": fd
    }
    $.ajax(settings).done(function (response) {
        if (confirmationMessage) {
            confirmationMessage.show();
            confirmationMessage.text(`Votre candidature a été evoyée à l'équipe RH pour vérification.`);
            resetForm(idForm)
            setTimeout(function () {
                confirmationMessage.hide()
            }, 4500)
        }
        if (document.getElementById("post-candidate-overlay")) {
            openPostCandidate();
        }
    }).fail(function (){
        confirmationMessage.show();
        confirmationMessage.css('color','red');
        confirmationMessage.text(`Votre candidature non envoyée.`);
        setTimeout(function () {
            confirmationMessage.hide();
            confirmationMessage.css('color','green');
        }, 5000)
    });
}