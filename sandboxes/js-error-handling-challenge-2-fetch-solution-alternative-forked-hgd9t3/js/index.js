console.clear();

const userElement = document.querySelector(".user");
const errorElement = document.querySelector(".error");

async function loadUser(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    errorElement.textContent = error.message;
    userElement.innerHTML = "No user data available.";
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    try {
      const user = await loadUser(event.target.dataset.url);
      userElement.innerHTML = `
        <h2>${user.first_name} ${user.last_name}</h2>
        <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
    } catch (error) {
      console.error(error);
    }
  }),
);
