const form = document.querySelector(".form");
const table = document.querySelector(".table");
const tbody = table.querySelector("tbody");

function handleSubmit(e) {
  e.preventDefault();

  const fname = form.fname;
  const lname = form.lname;
  const age = form.age;
  const gender = form.gender;
  const nationality = form.nationality;
  const hobbies = form.hobbies;
  const description = form.description;

  let myHobbies = [];

  for (let i = 0; i < hobbies.length; i++) {
    if (hobbies[i].checked) {
      myHobbies.push(hobbies[i].value);
    }
  }


  const usuario = {
    fname: fname.value,
    lname: lname.value,
    age: age.value,
    gender: gender.value,
    nationality: nationality.value,
    hobbies: myHobbies,
    description: description.value
  };


  console.log(usuario);


  tbody.innerHTML += `
    <tr>
      <td>${usuario.fname}</td>
      <td>${usuario.lname}</td>
      <td>${usuario.age}</td>
      <td>${usuario.gender}</td>
      <td>${usuario.hobbies.join(", ")}</td>
      <td>${usuario.nationality}</td>
    </tr>
  `;


  form.reset();
}

form.addEventListener("submit", handleSubmit);