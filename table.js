import { ligne } from './ligne'

const table = (value, searchValue) => {

console.log(searchValue);
console.log(value);

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
  { name: "Jeanne", email: "Jeanne@gmail.com", admin: false },
  { name: "Alice", email: "alice@gmail.com", admin: true },
  { name: "Bob", email: "bob@gmail.com", admin: false },
  { name: "Charlie", email: "charlie@gmail.com", admin: true },
  { name: "Diana", email: "diana@gmail.com", admin: false },
  { name: "Edward", email: "edward@gmail.com", admin: true },
  { name: "Fiona", email: "fiona@gmail.com", admin: false },
  { name: "George", email: "george@gmail.com", admin: true },
  { name: "Hannah", email: "hannah@gmail.com", admin: false },
  { name: "Ian", email: "ian@gmail.com", admin: true },
  { name: "Julia", email: "julia@gmail.com", admin: false }
];


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
    <!-- ---------a modifier----------- -->
    ${ 
  (function() {
      if (value !== undefined) {
        return users
          .filter((user) => value === user.admin)
          .map((user) => ` ${ligne(user)}`)
          .join("");
    } if (searchValue) {
      return users
        .filter((user) => user.name.toLowerCase().startsWith(searchValue.toLowerCase()))
        .map((user) => ` ${ligne(user)}`)
        .join("");
    } if (value === undefined && searchValue === undefined) {
      return users
        .map((user) => ` ${ligne(user)}`)
        .join("");
    }
  })()
}
<!-- ----------------------- -->
  </tbody>
</table>`
};

export default table;