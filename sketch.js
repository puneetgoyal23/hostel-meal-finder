const button = document.getElementById("searchBtn");
const input = document.getElementById("ingredientInput");
const container = document.getElementById("mealContainer");
const loading = document.getElementById("loading");

button.addEventListener("click", async () => {
  const ingredient = input.value;

  loading.style.display = "block";
  container.innerHTML = "";

  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient
  );

  const data = await response.json();

  loading.style.display = "none";

  if (data.meals === null) {
    container.innerHTML = "<p>No meals found</p>";
    return;
  }

  data.meals.forEach((meal) => {
    container.innerHTML += `
      <div class="meal-card">
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
      </div>
    `;
  });
});