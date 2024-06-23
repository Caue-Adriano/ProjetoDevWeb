const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const searchBtn = document.getElementById("search-btn");
const modalContent = document.getElementsByClassName("modal-content");
const msgError = document.getElementById("error-msg");


searchBtn.addEventListener("click", () => {
    let inpWord = document.getElementById("search-word").value;
    let exampleChoice = document.getElementById("example-choice-yes").checked;
    
    if(exampleChoice == true) {

        fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            result.innerHTML = `
            <div class="result-word">
                <h1>${inpWord}</h1>
                <button id="close-result">&times;</button>
            </div>
            <div class="result-word-meaning">
                <h2>Meaning:</h2>
                <p>${data[0].meanings[0].definitions[0].definition}</p>
            </div>
            <div class="result-example">
                <h2>Example:</h2>
                <p>${data[0].meanings[0].definitions[0].example || "Example not found"}</p>
            </div>
            `;
            result.style.display = "block";
            msgError.style.display = "none";
            modal.style.display = "none";
            const closeBtn = document.getElementById("close-result").addEventListener("click", function() {
                result.style.display = "none";
                console.log("click")
                });
        })
        .catch (() => {
            msgError.style.display = "block";
        });

    } else {

        fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            result.innerHTML = `
            <div class="result-word">
                <h1>${inpWord}</h1>
                <button id="close-result">&times;</button>
            </div>
            <div class="result-word-meaning">
                <h2>Meaning:</h2>
                <p>${data[0].meanings[0].definitions[0].definition}</p>
            </div>
            `;
            result.style.display = "block";
            msgError.style.display = "none";
            modal.style.display = "none";
            const closeBtn = document.getElementById("close-result").addEventListener("click", function() {
                result.style.display = "none";
                console.log("click")
                });
        })
        .catch (() => {
            msgError.style.display = "block";
        });

    }
})



