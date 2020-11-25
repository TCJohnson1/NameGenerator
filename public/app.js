const makeName = (resultDiv) => {
      fetch('http://localhost:3001/random_name')
      .then(response => response.json())
      .then(result => {
            resultDiv.classList.add('alert', 'alert-success')
            resultDiv.innerHTML = `<h2>${result.first_name}</h2>`
      })
}