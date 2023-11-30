const Searchdata = [
  "asher",
  "avery",
  "aiden",
  "aria",
  "angel",
  "adrian",
  "atlas",
  "archer",
  "brooks",
  "beau",
  "brooklyn",
  "blake",
  "bentley",
  "beckett",
  "beckham",
  "beckham",
  "carter",
  "cooper",
  "cameron",
  "christian,",
  "charlie",
  "carson",
  "dylan",
  "damian",
  "dakot",
  "dallas",
  "delaney",
  "drew",
  "gigna",
  "lina",
  "opacity",
  "unnati",
  "vandan",
  "dhrumil",
  "vishva",
  "jenisha",
  "varsha",
  "vrinda",
  "urmi",
  "urvi",
  "zinal",
  "kokila",
  "chetan",
  "midula",
  "naintara",
  "ishika",
  "fenil",
  "sakshi",
];

function search() {
  //   div.remove();
  document.getElementById("conatiner").innerHTML = "";
  let value = document.getElementById("input").value;
  console.log(value);
  const searchResult = Searchdata.filter((name) => {
    console.log(name + "name");
    if (name.toLowerCase().includes(value)) {
      return true;
    } else {
      return false;
    }
  });
  console.log(searchResult);

  searchResult.forEach((result) => {
    let div = document.createElement("div");
    div.classList.add("add");
    let p = document.createElement("p");
    div.appendChild(p);
    p.classList.add("list");
    p.textContent = result;
    let hr = document.createElement("hr");
    div.appendChild(hr);
    document.getElementById("conatiner").appendChild(div);
  });
}
let obje = [
  {
    name: "unnati",
    number: 1,
  },
  {
    name: "vandan",
    number: 2,
  },
];
function newsearch() {
  let u = "";
  let result = obje.filter((nam) => {
    // console.log(nam);
    u = nam.name;
    let value = document.getElementById("inputb").value;
    // console.log(u);
    if (u.toLowerCase().includes(value.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result);
}
