console.log("the pig")

document.querySelector("#page-header").addEventListener("click",function(){
  document.getElementById("output-target").innerHTML = "You clicked on the header section"

})
document.querySelector("ul").addEventListener("click",function(){
  document.getElementById("output-target").innerHTML = "You clicked on the ul section"
})
document.querySelector("article").addEventListener("click", function(){
  document.getElementById("output-target").innerHTML = "You clicked on the article section"
})
document.querySelector("#keypress-input").addEventListener("click", function(){
  document.getElementById("output-target").innerHTML = "You clicked on the input section"
})
document.querySelector("#guinea-pig").addEventListener("click", function(){
  document.getElementById("output-target").innerHTML = "You clicked on the leave me alone section"
})
document.querySelector("button").addEventListener("click", function(){
  document.getElementById("output-target").innerHTML = "You clicked on the button section"
})

document.querySelector("h1").addEventListener("mouseover", function(){
  document.querySelector("#output-target").innerHTML = "You moved your mouse over the header";
})
document.querySelector("h1").addEventListener("mouseleave", function(){
  document.querySelector("#output-target").innerHTML = "You left me";
})
document.querySelector("#keypress-input").addEventListener("keyup", function(){
  document.getElementById("output-target").innerHTML = document.getElementById("keypress-input").value
})
document.querySelector("#add-color").addEventListener("click", function(){
  document.querySelector("#guinea-pig").style.color ="blue"
})
document.querySelector("#make-large").addEventListener("click", function(){
  document.querySelector("#guinea-pig").style.fontSize = "2em"
})
document.querySelector("#add-border").addEventListener("click", function(){
  document.querySelector("#guinea-pig").style.border = "1px solid red"
})
document.querySelector("#add-rounding").addEventListener("click", function(){
  document.querySelector("#guinea-pig").style.border = "1px solid red"
  document.querySelector("#guinea-pig").style.borderRadius = " 100%"
})
document.querySelector("section:first-child").classList.add("boldHeader")
document.querySelector("section:last-child").classList.add("italicHeader")
document.querySelectorAll("button").forEach(function (element) {element.classList.add("blockLevel")})
