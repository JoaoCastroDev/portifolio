document.getElementById('downloadCV').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'CVJoao2024.pdf'; // Substitua pelo URL do seu arquivo PDF
    link.download = 'CV2024.pdf'; // Nome que o arquivo terá quando baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
