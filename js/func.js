
console.log("PRóbny console.log")

proba = (e) => {
    e.preventDefault();
    document.getElementById("text").innerHTML = document.getElementById("input").value;
}

document.getElementById("btn").addEventListener("click",proba)