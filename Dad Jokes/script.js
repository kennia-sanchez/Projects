const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener('click', generateJokes);

generateJokes();

function generateJokes() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    }

    fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke;
    })
}

