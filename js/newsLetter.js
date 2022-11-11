/*jshint esversion: 6 */
// const newLetteInput = $('.news-letter-input');
const newsLetterEmail = $('.bloc-news-letter-main input').first();
const newsLetteConfirmation = $('.news-letter-confirmation');

newsLetterEmail.on('input', () => {
    if (newsLetterEmail.val() != '') {
        newsLetteConfirmation.text('')
        newsLetteConfirmation.hide();
    } else {
        newsLetteConfirmation.text('Email est requis.')
        newsLetteConfirmation.show();
        newsLetteConfirmation.css('color', 'red')
    }
})

$('.bloc-news-letter-main button').first().on('click', () => {
    if (newsLetterEmail.val() == '') {
        newsLetteConfirmation.css('color', 'red')
        newsLetteConfirmation.text('Email est requis.')
        newsLetteConfirmation.show();
    } else {
        if (validateEmail(newsLetterEmail.val())) {
            fetch(`${server.host_node}:${server.port_node}/api/news-letter/subscribe`, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email: newsLetterEmail.val()})
            })
                .then((response) => {
                        if (!response.ok) {
                            throw new Error(response)
                        }
                        return response.json();
                    }
                )
                .then((data) => {
                    newsLetteConfirmation.show();
                    newsLetterEmail.val('')
                    if (data.status == 400) {
                        if (data.message == 'Contact already exist') {
                            newsLetteConfirmation.css('color', '#00FF00')
                            newsLetteConfirmation.text('Merci! Vous êtes déja inscrits.')
                        } else {
                            newsLetteConfirmation.css('color', 'red')
                            newsLetteConfirmation.text('Inscription Impossible avec cet email.')
                        }
                    } else {
                        newsLetteConfirmation.text(data.message)
                        newsLetteConfirmation.css('color', '#00FF00')
                    }
                    setTimeout(function () {
                        newsLetteConfirmation.hide();
                    }, 2500)
                })
                .catch((error) => {
                    newsLetteConfirmation.text('Inscription échouée.')
                    newsLetteConfirmation.css('color', 'red')
                    newsLetteConfirmation.show();
                    setTimeout(function () {
                        newsLetteConfirmation.hide();
                    }, 2500)
                })
        } else {
            newsLetteConfirmation.text('Adresse email invalide.')
            newsLetteConfirmation.css('color', 'red')
            newsLetteConfirmation.show();
        }
    }
})

function onSubscribe() {
    console.log(newsLetterEmail.val())
}