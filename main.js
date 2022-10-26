function dropDown() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    document.getElementById("demo").innerHTML = y;
}
getText("https://pokeapi.co/api/v2/pokemon/");


