const btnSub = document.querySelector('.rating-card__submit')
const card_ratingCard = document.querySelector('.rating-card')
const card_thankYou = document.querySelector('.thank-you')
const score = document.querySelector('.thank-you__score')


btnSub.addEventListener("click", function() {

    const selectedScore = document.querySelector('input[name="score"]:checked')

    if (selectedScore) {
        score.textContent = selectedScore.value

        card_ratingCard.hidden = true
        card_thankYou.hidden = false
    }
})