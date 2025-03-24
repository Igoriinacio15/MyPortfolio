(function(){
    emailjs.init("c0a6b_fKt_HZve9Q9"); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm("service_ebuut8k", "template_k27pj79", this)
    .then(function(response) {
        alert("Mensagem enviada com sucesso!");
    }, function(error) {
        alert("Erro ao enviar mensagem, tente novamente.");
    });
});
