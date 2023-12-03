function redirectToQuestions() {
    var difficulty = document.getElementById('difficulty').value;
    var url = '';

    if (difficulty === 'easy') {
        url = 'https://forms.office.com/e/eVT9DyW6a5';
    } else if (difficulty === 'medium') {
        url = 'https://forms.office.com/e/m0Buzn0aCS';
    } else if (difficulty === 'hard') {
        url = 'https://forms.office.com/e/FmshFhqhRR';
    }

    window.location.href = url;
}
