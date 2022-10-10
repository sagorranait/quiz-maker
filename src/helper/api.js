export async function getQuiz(){
    const response = await fetch('https://openapi.programming-hero.com/api/quiz');

    if (!response.ok) {
        throw new Error('Failed to fetch posts.');
    }

    return response.json();
}