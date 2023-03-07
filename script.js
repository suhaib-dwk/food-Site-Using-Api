
const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.querySelector(".meal-details-content");

const recipeCloseBtn = document.getElementById('recipe-close-btn');

// const getMealList = async searchText => {
//     const res = await fetch("./data.json");
//     const states = await res.json();

//     console.log(states)
// }

searchBtn.addEventListener('click', getMealList);




function getMealList() {
    const search = document.getElementById("search-input").value.trim();
    fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                        <div class="meal-item" data-id = "${meal.idMeal}">
                            <div class="meal-img">
                                <img src="${meal.strMealThumb}" alt="food">
                            </div>
                            <div class="meal-name">
                                <h3>${meal.strMeal}</h3>
                                <a href="#" class="recipe-btn">Get Recipe</a>
                            </div>
                        </div>
                    `;
                });
            }

            mealList.innerHTML = html;
        })
}