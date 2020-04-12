
// create grid system

// lines A -> T
// columns 1 -> 8

let battlefield = document.querySelector(".battlefield");


const startingLetterAsciiCode = "A".charCodeAt();
const endingLetterAsciiCode = "T".charCodeAt();
for(let i = startingLetterAsciiCode-1; i<=endingLetterAsciiCode; i++) { 

    for(let j=0; j<10;j++) {

        let element = document.createElement("div");
        if (i == startingLetterAsciiCode-1 && j == 0) {
            
        } else if(i === startingLetterAsciiCode-1) {
            const field = j;
            element.classList.add(`head`);
            element.innerHTML = field;
        } else if (j === 0) {
            const field = String.fromCharCode(i);
            element.classList.add(`head`);
            element.innerHTML = field;
        } else {

            if(j<4 && i < startingLetterAsciiCode + 8) {
                element.classList.add(`disabled`);
            } else if (j< 9 && i > endingLetterAsciiCode - 2 ) {
                element.classList.add(`disabled`);
            } else if (j > 1 && j < 9 && i == endingLetterAsciiCode - 2) {
                element.classList.add(`disabled`);
            } else {

                let line = j;
                let column = i+1-startingLetterAsciiCode;
                const field = `
                    <span class="checkmark"></span>`;
                element.classList.add(`field-x${line}-y${column}`);
                element.innerHTML = field;
            }
        }

        battlefield.appendChild(element);
    }
}



document.querySelectorAll(".checkmark").forEach(field => {
    field.addEventListener("click", function() {
        let currentPlayer = document.querySelector('input[name="player"]:checked').value;
        if(currentPlayer) {
            if(field.classList.contains("checkmark--checked")) {
                if (field.classList.contains("checkmark--touche")) {
                    field.className = '';
                    field.classList.add("checkmark");
                } else {
                    field.classList.add("checkmark--touche");
                }
            } else {
                field.classList.add("checkmark--checked");
                field.classList.add("checkmark--"+currentPlayer);
            }
        } else {
            alert("Please select a player");
        }
    });
});

