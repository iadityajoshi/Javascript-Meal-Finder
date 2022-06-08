`use strict`;
const form = document.getElementById('submit');
const search = document.getElementById('search-bar');
const resultName = document.getElementsByClassName('result');
const mealEl = document.getElementById('meal');
alert('Try searching for keywords you want like veg, Cheescake, curry, rice etc...');

function searchMeal(event){
    event.preventDefault();
    const searchText = search.value;

    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=`+ searchText)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        resultName[0].TextContent = `Search results for ${searchText}`; 
        
        if(data.meals===null){
            resultName[0].innerHTML = `<h2>No resul found for ${searchText}`; 
            alert(`No Result Found for ${searchText}`);
        }
        else{
            mealEl.innerHTML= data.meals.map(
                (meal)=>`
                <div class = 'meal_display'>                
                    <div class="meal-info">
                    <a href="${meal.strYoutube}" target="blank"> 
                    <img src = "${meal.strMealThumb}" alt="${meal.strMeal}">
                    </a>
                    <h3>${meal.strMeal}</h3>
                    </div>                
                </div>
                `
            ).join(' ');         
            }
        });
    };

    form.addEventListener('submit', searchMeal);
