function indexToIndex1(){
    window.location.href = "file:///C:/Users/avin1103/projects/masai/masai-sprint-2/sprint-2/index1.html"
}
function index1ToIndex2(){
    window.location.href = "file:///C:/Users/avin1103/projects/masai/masai-sprint-2/sprint-2/index2.html"
}
function index2ToIndex3(){
    window.location.href = "file:///C:/Users/avin1103/projects/masai/masai-sprint-2/sprint-2/index3.html"
}

var showResults = document.getElementById("showButton")
showResults.addEventListener("click", addDetails)

function addDetails() {
    event.preventDefault()
    var breakfastCal = document.getElementById("breakfastCal").value
    var lunchCal = document.getElementById("lunchCal").value
    var dinnerCal = document.getElementById("dinnerCal").value

    var exerciseCal = document.getElementById("calIntake").value

    renderDOM(breakfastCal,lunchCal,dinnerCal,exerciseCal)

}   

function renderDOM(breakfastCal,lunchCal,dinnerCal,exerciseCal){
    var row = document.createElement("tr")

    var caloriesConsumed = document.createElement('td')
    caloriesConsumed.textContent = Number(breakfastCal) + Number(lunchCal) + Number(dinnerCal)

    var caloriesBurnt = document.createElement('td')
    caloriesBurnt.textContent = Number(exerciseCal)

    var differenceInCalories = document.createElement('td')
    if(caloriesConsumed.textContent > caloriesBurnt.textContent){
        caloriesDifference = (caloriesConsumed.textContent - caloriesBurnt.textContent) + " (Excess)"
    }
    else if (caloriesConsumed.textContent === caloriesBurnt.textContent){
        caloriesDifference = "None"
    }
    else{
        caloriesDifference = (caloriesBurnt.textContent - caloriesConsumed.textContent) + " (Lost)"
    }
    differenceInCalories.textContent = caloriesDifference

    var fatDifference = document.createElement('td')
    if(caloriesConsumed.textContent > caloriesBurnt.textContent){
        fatChange = ((caloriesConsumed.textContent - caloriesBurnt.textContent)/7000) + " (Gained)"
    }
    else if (caloriesConsumed.textContent === caloriesBurnt.textContent){
        fatChange = "None"
    }
    else {
        fatChange = ((caloriesBurnt.textContent - caloriesConsumed.textContent)/7000) + " (Lost)"
    }
    fatDifference.textContent = fatChange

    row.append(caloriesConsumed, caloriesBurnt, differenceInCalories, fatDifference)

    var tBody = document.getElementById("results")
    tBody.append(row)

}



