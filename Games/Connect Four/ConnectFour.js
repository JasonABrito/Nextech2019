let currentPlayer = "red";

const column = document.querySelectorAll(".column");

for (let i = 0; i < column.length; i++) {
   const column = column[i];
   column.onclick = function () {
       if (column.childElementCount === 6) {
           return;
       }
       const checker = document.createElement("div");
       checker.classList.add("checker", currentPlayer);
       column.appendChild(checker);

       if (currentPlayer === "red") {
           currentPlayer = "black";
       } else {
           currentPlayer = "red";
       }
   }
}
console.log(currentPlayer)