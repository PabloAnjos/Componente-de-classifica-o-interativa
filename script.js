const buttonsNumbers = document.querySelectorAll('.button-avaliation');



// Redirecionando usuario para pagina de agradecimento ao clicar no botao

function submitReview() {
    window.location.href = 'assessment.html';

}


 // Adiciona o evento de clique a todos os botões

    buttonsNumbers.forEach(button => {
    button.addEventListener('click', () => {

        // Muda a cor de fundo apenas do botão clicado
        button.style.backgroundColor = 'white'; 
        button.style.color = 'black';

    });
});




    








