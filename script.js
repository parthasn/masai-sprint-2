function indexToIndex1(){
    window.location.href = "file:///C:/Users/avin1103/projects/masai/sprint-2/index1.html"
}
function index1ToIndex2(){
    window.location.href = "file:///C:/Users/avin1103/projects/masai/sprint-2/index2.html"
}
function index2ToIndex3(){
    window.location.href = "file:///C:/Users/avin1103/projects/masai/sprint-2/index3.html"
}
var totalCalories = 0;
function addToTotalCalories(){
    var caloriesGained = Number(document.getElementById("breakfastCal").value) + Number(document.getElementById("lunchCal").value)
                    + Number(document.getElementById("dinnerCal").value);
    var caloriesBurnt = Number(document.getElementById("calIntake").value);
   

    var caloriesConsumed = document.createElement('h3');
    caloriesConsumed.textContent = "Total Calories Consumed : " + caloriesGained;
    caloriesConsumed.style.fontSize = '50px';
    caloriesConsumed.style.margin = '20px';
    caloriesConsumed.style.color = '#039BE5';
    document.getElementById('result').appendChild(caloriesConsumed)

    var caloriesUsed = document.createElement('h3');
    caloriesUsed.textContent = "Total Calories Burnt : " + caloriesBurnt;
    caloriesUsed.style.fontSize = '50px';
    caloriesUsed.style.margin = '20px';
    caloriesUsed.style.color = '#039BE5';
    document.getElementById('result').appendChild(caloriesUsed);


    if(caloriesGained > caloriesBurnt){
        caloriesDifference = "Calories Excess : " +(caloriesGained - caloriesBurnt) + "Cal"
    }
    else{
        caloriesDifference = "Calories Deficit : " +(caloriesBurnt - caloriesGained) + "Cal"
    }
    var differenceInCalories = document.createElement('h3');
    differenceInCalories.textContent = caloriesDifference;
    differenceInCalories.style.fontSize = '50px';
    differenceInCalories.style.margin = '20px';
    differenceInCalories.style.color = '#039BE5';
    document.getElementById('result').appendChild(differenceInCalories);

    if(caloriesGained > caloriesBurnt){
        fatChange = "Fat Gained : " + ((caloriesGained - caloriesBurnt)/7000) + "KG"
    }
    else {
        fatChange = "Fat Lost : " + ((caloriesBurnt - caloriesGained)/7000) + "KG"
    }
    var fatDifference = document.createElement('h3');
    fatDifference.textDocument = fatChange;
    fatDifference.style.fontSize = '50px';
    fatDifference.style.margin = '20px';
    fatDifference.style.color = '#039BE5';
    document.getElementById('result').appendChild(fatDifference);

}
