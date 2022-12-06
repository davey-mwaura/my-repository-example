const init = () => {
    fetch('http://localhost:3000/movies', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }
  
  document.addEventListener('DOMContentLoaded', init)