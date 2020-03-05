function load() {
    var msg = document.querySelector(`div#msg`)
    var photo = document.querySelector(`#photo`) 
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `<p> Now it's ${hour} hours <p/>` 
    
    if (hour >= 0 && hour < 12) {
        photo.src = `day.jpg`
        document.body.style.background = `#e2cd9f`
        msg.innerHTML += `<strong/>Good Morning<strong/>`
    } else if (hour >= 12 && hour < 18) {
        photo.src = `afternoon.jpg`
        document.body.style.background = `#b9846f`
        msg.innerHTML += `<strong/>Good Afternoon<strong/>`
    } else {
        photo.src = `night.jpg`
        document.body.style.background = `#515154`
        msg.innerHTML += `<strong/>Good Evening<strong/>`
    }
}
