import table from "./table";

export const filter = () => {
  return `
    <div class="d-flex gap-3">
      <div class="dropdown">
        <button class="btn border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="role-btn">
          Tous les rôles
        </button>
        <ul class="dropdown-menu" id="role">
          <li><a class="dropdown-item" href="#">Tous les rôles</a></li>
          <li><a class="dropdown-item" href="#">Admin</a></li>
          <li><a class="dropdown-item" href="#">User</a></li>
        </ul>
      </div>
      <input type="text" class="w-25 form-control" placeholder="Recherche" name="input-search" id="input-search" />
      <div class="dropdown">
        <button class="btn border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          5 par page
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">10 par page</a></li>
          <li><a class="dropdown-item" href="#">15 par page</a></li>
        </ul>
      </div>
    </div>` 
};

export const filterBtn = () => {
  const roleButton = document.querySelector("#role-btn");
  const roleItems = document.querySelectorAll("#role li a");
  const searchInput = document.querySelector("#input-search");

  roleItems.forEach(item => {
    item.addEventListener("click", () => {
      let roleValue = item.innerText;
      roleButton.textContent = roleValue;
      table(roleValue, searchInput.value);
    });
  });
}

export const searchUser = () => {
  const searchInput = document.querySelector("#input-search");
  const roleButton = document.querySelector("#role-btn");

  searchInput.addEventListener("input", () => {
    let searchValue = searchInput.value;
    table(roleButton.textContent, searchValue);
  });
}
