fetch('../../footer.html')
  .then(response => response.text())
  .then(html => {
    const footer = document.createElement('footer');
    footer.innerHTML = html;
    document.body.appendChild(footer);
  })
  .catch(error => console.error(error));