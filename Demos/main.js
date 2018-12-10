// perfect squares between 1-100

for (var i = 1; i <= 10; i++) {
    var h2 = docuemnt.createElement("h2")
    h2.textContent = i * i;
    h2.classList.add("foo","bar","baz")
    h2.classList.remove("foo","bar","baz")
    document.body.appendChild(h2)
}