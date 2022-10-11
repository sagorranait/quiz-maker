export async function getQuizSubjects(){
    const response = await fetch('https://openapi.programming-hero.com/api/quiz');

    if (!response.ok) {
        throw new Error('Failed to fetch posts.');
    }

    return response.json();
}

export async function getSingleQuiz(id) {
    const response = await fetch('https://openapi.programming-hero.com/api/quiz/' + id);

    if (!response.ok) {
      throw new Error('Failed to fetch post.');
    }
    
    return response.json();
  }