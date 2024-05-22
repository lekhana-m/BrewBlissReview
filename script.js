document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = star.getAttribute('data-value');
            updateStars(selectedRating);
        });

        star.addEventListener('mouseover', () => {
            updateStars(star.getAttribute('data-value'));
        });

        star.addEventListener('mouseout', () => {
            updateStars(selectedRating);
        });
    });

    function updateStars(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    document.getElementById('submitReview').addEventListener('click', () => {
        const reviewText = document.getElementById('review').value;
        alert(`Rating: ${selectedRating}\nReview: ${reviewText}`);
        // You can add functionality here to send the review to the server
    });
});
