import { ligne } from './ligne'

const table = (value, searchValue) => {

  switch (value) {
    case "Admin":
      value = true; 
      break;
    case "User":
      value = false;
      break;

    default:
      value = undefined;
      break;
  }
  const users = [
    { name: "Jon", email: "jon@gmail.com", admin: true },
    { name: "Jeanne", email: "Jeanne@gmail.com", admin: false }
  ]

  document.querySelector("#table").innerHTML = `
    <table class="table border my-3">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">E-mail</th>
      <th scope="col">Rôle</th>
    </tr>
  </thead>
  <tbody>
    ${value !== undefined ? 
      users
        .filter((user) => value === user.admin)
        .map((user) => {
          return ` ${ligne(user)}`;
        }).join("") 
      : 
      users
        .map((user) => { 
          return ` ${ligne(user)}`;
        }).join("") }
  </tbody>
</table>`
};

export default table;