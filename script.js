function load() {
    var msg = document.querySelector(`div#msg`)
    var photo = document.querySelector(`div#photo`) 
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `Now it's ${hour} hours <p>` 
    
    if (hour >= 0 && hour < 12) {
        img.scr = `day.jpg`
        document.body.style.background = `#e2cd9f`
        msg.innerHTML += `<strong/>Good Morning<strong/>`
    } else if (hour >= 0 && hour < 12) {
        img.scr = `afternoon.jpg`
        document.body.style.background = `#b9846f`
        msg.innerHTML += `<strong/>Good Afternoon<strong/>`
    } else {
        img.scr = `night.jpg`
        document.body.style.background = `#515154`
        msg.innerHTML += `<strong/>Good Evening<strong/>`
    }
}
