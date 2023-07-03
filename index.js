let timerElement = document.getElementById("timer")
let spinnerElement = document.getElementById("speedTypingTest")
let quoteDisplayElement = document.getElementById("quoteDisplay")
let quoteInputElement = document.getElementById("quoteInput")
let resultElement = document.getElementById("result")
let submitButtonElement = document.getElementById("submitBtn")
let resetButtonElement = document.getElementById("resetBtn")
let id = 0

function displayQuotation() {
    quoteDisplayElement.textContent = ""
    spinnerElement.classList.remove("d-none")
    let url = "https://apis.ccbp.in/random-quote"
    let options = {
        method: "GET"
    }
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            spinnerElement.classList.add("d-none")
            let {
                content
            } = jsonData
            quoteDisplayElement.textContent = content
            let counter = 0
            id = setInterval(function() {
                timerElement.textContent = counter
                counter++
            }, 1000)

        })
}
displayQuotation()
resetButtonElement.addEventListener("click", function() {
    displayQuotation()
    clearInterval(id)
    quoteInputElement.value = ""
    quoteDisplayElement.textContent = ""
    resultElement.textContent = ""
})

quoteInputElement.addEventListener("change", function(event) {

})
submitButtonElement.addEventListener("click", function() {
    if (quoteDisplayElement.textContent !== quoteInputElement.value) {
        resultElement.textContent = "You typed incorrect sentence"
    } else if (quoteDisplayElement.textContent === quoteInputElement.value) {
        resultElement.textContent = "You typed in " + timerElement.textContent + " seconds"
        clearInterval(id)
    }
})