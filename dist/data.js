document.getElementById("registration").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    let name = document.getElementById("fname").value;
    let age = document.getElementById("age").value;
    let income = document.getElementById("income").value;
    console.log ({name, age, income})
    filter ({name, age, income})

  });


  const filter = (data) => {
    if(data.name.length >= 10
        && data.age >=25
        && data.income >= 100000 &&
        data.income <= 1000000) { Database.set("myData", data);
        location.reload()}
    }