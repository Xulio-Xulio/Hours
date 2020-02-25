function load() {
    var msg = document.querySelector(`div#msg`)
    var photo = document.querySelector(`div#photo`) 
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `Now it's ${hour} hours` 
}
