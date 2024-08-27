document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.card');
    const ratingState = document.querySelector('.rating-state');
    const ratingButtons = document.querySelectorAll('.rating-button');
    const submitButton = document.getElementById('submit-feedback');
    const ratingResult = document.getElementById('rating-result');
    
    let selectedRating = 0;

    // Puanlama butonlarına tıklama olayı ekle
    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedRating = button.textContent;
            ratingButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Submit butonuna tıklama olayı ekle
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (selectedRating > 0) {
            // Seçilen puanı göster
            ratingResult.textContent = `You selected ${selectedRating} out of 5`;
            
            // Ana ekranı gizle ve teşekkür ekranını göster
            container.style.display = 'none';
            ratingState.style.display = 'block';
        } else {
            alert('Lütfen bir puan seçin.');
        }
    });
});
