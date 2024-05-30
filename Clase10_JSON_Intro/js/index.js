const jsonData = `
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
`;

datos = {
  nombre: "Alan",
  pais: "México",
  año: 2024,
};

console.log(datos);

console.log(JSON.stringify(datos));

//Recorrer el JSON e insertar en el listado del html los nombres de los miembros
function recorrerMiembros() {
  //escribe la lógica

  let miembros = document.getElementById("miembros");

  const data = JSON.parse(jsonData);
  console.log(data);

  if (data.members) {
    data.members.forEach(member => {
      const memberElement = document.createElement('p');
      memberElement.textContent = member.name;
      miembros.appendChild(memberElement);
    });
  }
}

recorrerMiembros();
