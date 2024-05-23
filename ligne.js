export const ligne = (user) => {
    return `
    <tr>
      <th>${user.name}</th>
      <td>${user.email}</td>
      <td>${user.admin ? "admin" : "user"}</td>
    </tr>
    `
};