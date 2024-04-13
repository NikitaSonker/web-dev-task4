// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Define sample movie data
  const trendingMovies = [
    { title: "Godzilla", image: "1.jpg", link: "#" },
      { title: "Kingdom of the Planet of the Apes", image: "2.jpg", link: "#" },
      { title: "The Beekeeper", image: "3.jpg", link: "#" }
      // Add more movies as needed
  ];

  // Function to display movies
  function displayMovies(data, containerId) {
      const container = document.getElementById(containerId);
      data.forEach(movie => {
          const movieDiv = document.createElement('div');
          movieDiv.classList.add('movie');

          const image = document.createElement('img');
          image.src = movie.image;
          image.alt = movie.title;

          const title = document.createElement('h3');
          title.textContent = movie.title;

          const link = document.createElement('a');
          link.href = movie.link;
          link.textContent = "View Details";

          movieDiv.appendChild(image);
          movieDiv.appendChild(title);
          movieDiv.appendChild(link);

          container.appendChild(movieDiv);
      });
  }

  // Display trending movies
  displayMovies(trendingMovies, 'trending-movies');
});
