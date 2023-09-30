console.log("Script Started");

const requestURL = "https://api.github.com/users/adarshrangare";

const req = new XMLHttpRequest();

console.log(req);

req.open("GET",requestURL);



// console.log(req.readyState)
req.onreadystatechange = function(){
    if(req.readyState==4){

     data = JSON.parse(this.responseText);
    console.log(data.name);
   const image = document.createElement("img");
   image.setAttribute("src",data.avatar_url);
    document.querySelector(".image").appendChild(image);
    document.getElementById("fullname").innerHTML = data.name;
    document.querySelector("#location").textContent += data.location;
    document.querySelector("#bio").innerText = data.bio;
    }
}
req.send();


