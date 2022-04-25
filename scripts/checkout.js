// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let paise=JSON.parse(localStorage.getItem("amount"))||0;
document.getElementById("wallet").innerText=paise;

function myFunc(){
    if(paise>=100){
        let p = paise - 100;
        localStorage.setItem("amount",JSON.stringify(paise));
        alert("Booking successful!");
    }else{
        alert("Insufficient Balance!")
    }
}


let dataArr = JSON.parse(localStorage.getItem("movie"))||[];
console.log(dataArr)
let mainDiv = document.getElementById("movie");

dataArr.map(function(e,i){
    let main = document.createElement("div");

    let image = document.createElement("img")
    image.src=e.Poster;
    
    let title = document.createElement("p");
    title.innerText=e.Title;

    main.append(image,title);
    mainDiv.append(main)

})
