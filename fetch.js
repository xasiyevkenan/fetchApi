const fetchDogApi = async () => {
  try {
    const response = await fetch(
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
      {
        method: "GET",
        header: {
          "Content-Type": "application/json",
          "x-api-key": "DEMO-API-KEY",
        },
        redirect: "follow",
      }
    );

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
};

fetchDogApi();

const fetchJokeApi = () => {
  fetch("https://v2.jokeapi.dev/joke/Any", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

fetchJokeApi();

const fetchFootballDataApi = async () => {
  try {
    const response = await fetch("https://api.football-data.org/v4/matches", {
      method: "GET",
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error", error);
  }
};

fetchFootballDataApi();

const fetchDeckOfCardsApi = () => {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

fetchDeckOfCardsApi();

const fetchCatApi = async () => {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "DEMO-API-KEY",
        },
        redirect: "follow",
      }
    );

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error", error);
  }
};

fetchCatApi();

const fetchRandomUserApi = () => {
  fetch("https://randomuser.me/api/", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

fetchRandomUserApi();

const fetchRestCountriesApi = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/1", {
      method: "GET",
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
};

fetchRestCountriesApi();

const fetchPokemonApi = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

fetchPokemonApi();

const fetchBoredApi = async () => {
  try {
    const response = await fetch("https://www.boredapi.com/api/activity/", {
      method: "GET",
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
};

fetchBoredApi();
