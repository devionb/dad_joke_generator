const joke_element = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click',generate_joke);

generate_joke();

async function generate_joke(){
    // call the joke generator API
    const joke_result = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json' 
        }
    });

    const joke = await joke_result.json();

    console.log(joke);
    // set the new joke
    joke_element.innerHTML = joke.joke;

}