document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de reserva e de link na lista
    const reserveButtons = document.querySelectorAll('.reserve-button');
    const linkButtons = document.querySelectorAll('.link-button');

    // Função para abrir o link em uma nova aba
    linkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const link = button.getAttribute('data-link');
            if (link) {
                window.open(link, '_blank'); // Abre o link em uma nova aba
            } else {
                alert('Link não encontrado!');
            }
        });
    });

    // Função para reservar ou desfazer reserva de um item
    reserveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const listItem = button.closest('li');
            const isReserved = listItem.classList.contains('reserved');

            if (!isReserved) {
                if (confirm(`Você tem certeza que deseja reservar o item "${listItem.querySelector('span').textContent}"?`)) {
                    listItem.classList.add('reserved');
                    button.textContent = 'Desfazer reserva';
                }
            } else {
                if (confirm(`Você tem certeza que deseja desfazer a reserva do item "${listItem.querySelector('span').textContent}"?`)) {
                    listItem.classList.remove('reserved');
                    button.textContent = 'Reservar';
                }
            }
        });
    });
});
function informarPresente() {
    const phoneNumber = '5531971340757'; // Substitua pelo seu número de telefone no formato internacional (ex: 5511999999999)
    const message = 'Olá, gostaria de informar o presente que vou dar:';
    const whatsappURL = `https://wa.me/5531971340757?text=Ol%C3%A1%20Raissa%20e%20Breno%2C%20o%20meu%20presente%20%C3%A9%3A%20`;
    window.open(whatsappURL, '_blank');
}
