`use strict`;
const form = document.getElementById('submit');
const search = document.getElementById('search-bar');
const resultName = document.getElementsByClassName('result');
const mealEl = document.getElementById('meal');

function searchMeal(event){
    event.preventDefault();
    const searchText = search.value;

    // if(searchText.trim()){fetch}

    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=`+ searchText)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        resultName.innerHTML = `<h2>Search result for ${searchText}</h2>`;
        
        if(data.meals===null){
            resultName.innerHTML = `<h2>No resul found for ${searchText}`; //not working??
            alert(`No Result Found for ${searchText}`);
        }
        else{
            mealEl.innerHTML= data.meals.map(
                (meal)=>`
                <div class = 'meal_display'>
                <img src = "${meal.strMealThumb}" alt="${meal.strMeal}" </img>
                
                    <div class="meal-info">
                    <h3>${meal.strMeal}</h3>
                    <a href="{${meal.strYoutube}}" target="blank">Open Recipe</a>
                    </div>                
                </div>
                `
            ).join(' ');
            }
            // console.log(data);
        });
    };

    form.addEventListener('submit', searchMeal);
    // mealEl.addEventListener('click', )



