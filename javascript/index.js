function updateTime() {
    let losAngelesElement = document.querySelector("#los-angeles")
    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date")
        let losAngelesTimeElement = losAngelesElement.querySelector(".time")
        let losAngelesTime = moment().tz("America/Los_Angeles")

        losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY")
        losAngelesTimeElement.innerHTML = losAngelesTime.format(
          "h:mm:ss [<small>]A[</small]"
        )
    }
    let romeElement = document.querySelector("#rome")
    if (romeElement) {
      let romeDateElement = romeElement.querySelector(".date")
      let romeTimeElement = romeElement.querySelector(".time")
      let romeTime = moment().tz("Europe/Rome")

      romeDateElement.innerHTML = romeTime.format("MMMM Do YYYY")
      romeTimeElement.innerHTML = romeTime.format(
        "h:mm:ss [<small>]A[</small>]"
      )
    }
    let tokyoElement = document.querySelector("#tokyo")
    if (tokyoElement) {
      let tokyoDateElement = tokyoElement.querySelector(".date")
      let tokyoTimeElement = tokyoElement.querySelector(".time")
      let tokyoTime = moment().tz("Asia/Tokyo")

      tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY")
      tokyoTimeElement.innerHTML = tokyoTime.format(
        "h:mm:ss [<small>]A[</small>]"
      )
    }
}
  
function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">
          ${cityTime.format("h:mm:ss [<small>]A[</small>]")}
        </div>
      </div>
      <div class="back"> Back to <a href="/">all cities</a></div>`
    let body = document.querySelector("body");
    let cityAmPm = cityTime.format("A").toLowerCase()
    body.className = ""
    body.classList.add(cityAmPm)
}

function setBackground() {
    let body = document.querySelector("body")
    let losAngelesTime = moment().tz("America/Los_Angeles")
    let losAngelesAmPm = losAngelesTime.format("A").toLowerCase()
    body.className = ""
    body.classList.add(losAngelesAmPm)
}

updateTime();

setBackground();

setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);