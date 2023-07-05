

const rewriteData = (data) => {
    // select table
    
    let table= document.getElementById("table")
    
    
    // Average income
    let totalIncome = 0
    let incomeArray = Database.get("myData").map(function(item){
        return item.income
    })
    incomeArray.forEach(function (number) {
        totalIncome += Number(number);
    });
    let averageIncome = totalIncome/incomeArray.length


    //average Age
    let totalAge = 0
    let ageArray = Database.get("myData").map(function(item){
        return item.age
    })
    ageArray.forEach(function (number) {
        totalAge += Number(number);
    });
    let averageAge = totalAge/ageArray.length
    
    
    //select  Div and append it to the body
    let newDiv = document.getElementById("resume")
    let resume = document.createElement("h1")
    resume.classList.add("text-l", "ml-5")
    resume.textContent= `Rata rata pendaftar memiliki uang sangu sebesar ${averageIncome.toFixed(2)} dengan rata rata umur ${averageAge.toFixed(2)}`
    newDiv.replaceChildren(resume)
    



   
    //mapping and create newrow
    
    const newRow =data.map(function (item){
        // create row
        let newRow = document.createElement("tr")
        newRow.classList.add("grid","grid-cols-3","text-center")
        // create data cell and add to newly created row 
        let nameCell = document.createElement("td")
        nameCell.setAttribute("id","name")
        nameCell.classList.add("border")
        nameCell.textContent = item.name
        newRow.appendChild(nameCell)
    
        let ageCell = document.createElement("td")
        ageCell.setAttribute("id","age")
        ageCell.classList.add("border")
        ageCell.textContent = item.age
        newRow.appendChild(ageCell)
    
        let incomeCell = document.createElement("td")
        incomeCell.setAttribute("id","income")
        incomeCell.classList.add("border")
        incomeCell.textContent = item.income
        newRow.appendChild(incomeCell)
        

        
        
        return newRow
    })
    

    //replace old row with new one
    table.replaceChildren(...newRow)
    
}



const fetchDataFromLocalStorage = ()=> {
    // get data from local storage
    let data = Database.get("myData")
    

    // Check data 

    if (data?.length) {
        
        console.log("ini datanya",data) 
        rewriteData(data)

    } else {
        console.log("Data not found in Local Storage");
    }
}





fetchDataFromLocalStorage()
// dataArray.forEach(fetchDataFromLocalStorage)
window.addEventListener("storage", fetchDataFromLocalStorage);



