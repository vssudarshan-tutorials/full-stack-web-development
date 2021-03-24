/*Method 1*/

var bellBoys = [];
var bellBoy = {
  name:"",
  languages:[],
};
var numLanguages;

// directly accessing member fields
document.getElementById("add-bellboy").addEventListener("click", function(){
bellBoy.name = prompt("Enter name");
bellBoy.age = prompt("Enter age"); //this field is appended to the object's fields
numLanguages = prompt("Enter number of languages");

for(var i = 0; i < numLanguages; i++)
bellBoy.languages.push(prompt("Enter language"));

document.getElementById("result").value = JSON.stringify(bellBoy);

bellBoys.push(bellBoy);

alert(bellBoy.name + " added");
});


/*Method 2*/

var maid = {
  name:"",
  age:0,
  languages:[],
  clean: undefined
};

var languages = [];
var maids = [];
//using a constructor
document.getElementById("add-maid").addEventListener("click", function(){

numLanguages = prompt("Enter number of languages");

for(var i = 0; i < numLanguages; i++)
languages.push(prompt("Enter language"));

 maid = new Maid(prompt("Enter name"), prompt("Enter age"), languages);

document.getElementById("result").value = JSON.stringify(maid);

maids.push(maid);

alert(maid.name + " added");
});

function Maid(name, age, languages){

this.name = name;
this.age = age;
this.languages = languages;
this.clean = function (){ alert(this.name + " is cleaning")};

}

document.getElementById("clean").addEventListener("click", function(){
  if(maid.clean != undefined)
  maid.clean();
});
