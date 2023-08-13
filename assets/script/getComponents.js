export function getComponents(component) {
    fetch(`assets/${component}.html`)
    .then(response => response.text())
    .then(com => {
        document.querySelector(`#${component}`).innerHTML = com
    })
    .catch(error => {console.log(error)})
}


