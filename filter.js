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
        <input type="texte" class="w-25 form-control" placeholder="Recherche" name="input-search" id="input-search" />
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
        const lis = document.querySelectorAll("#role li a");
        lis.forEach(li => {
          li.addEventListener("click", () => {
            let value = li.innerText;
            const btn = document.querySelector("#role-btn");
            btn.textContent = value;
            table(value);
          })
        });
      }

export const searchUser = () => {
        const inputSearch = document.querySelector("#input-search");
        inputSearch.addEventListener("input", () => {
          let searchValue = inputSearch.value;
          table(searchValue);
        })
}