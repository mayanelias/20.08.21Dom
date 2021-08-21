//!1//
// function shop(){
//  var button=document.getElementById("but");
//  var input=document.getElementById("input");
//  var ul=document.getElementById("ul");
//  var array=[];
//  button.addEventListener("click",function(){ 
//     if (input.value != "") {
//         if (array.length == 0) {
//             ul.innerHTML = `<h1>Shopping list</h1>`
//             array.push(input.value);
//         }
//         else {
//             for (var i = 0; i < array.length; i++) {
//                 if (array[i] == input.value) {
//                     return;
//                 }
//             }
//             array.push(input.value);
//         }
//         ul.innerHTML += `<li>${input.value}</li>`;
//     }   
// });
//  }
// shop();    
//!2//
// function sumNumbers(){
//  var button=document.getElementById("but");
//  var num1=document.getElementById("num1");
//  var num2=document.getElementById("num2");
//  button.addEventListener("click",function(){
// console.log(Number((num1.value)+(Number(num2.value))));
//  });
// };
// sumNumbers(num1+num2);
//!3//
// function changeBackground(){
//     var div=document.getElementById("myDiv");
//     div.addEventListener("click",function(){

// div.style.background="red"
//     });
// }
// changeBackground();
//!4//
// function pToRandomNumber(){
//     var p=document.getElementById("p");
//     p.addEventListener("click",function(){
// p.innerText=Math.floor(Math.random(0)*10000);
//     });
// }
// pToRandomNumber();
//!5//
// var store = [{
//     name: "book",
//     image: ["C:\Users\97254\Desktop\my site\משימות בית\20.8.21Dom\pictures\הורדה.jpg"]
// },
// {
//     name: "picture",
//     image: ["C:\Users\97254\Desktop\my site\משימות בית\20.8.21Dom\pictures\2.jpg"]
// },
// {
//     name: "couch",
//     image: ["C:\Users\97254\Desktop\my site\משימות בית\20.8.21Dom\pictures\3.jpg"]
// },
// {
// }]
// var div = document.getElementById("div");
// for (var i = 0; i < store.length; i++) {
//     div.innerHTML += `<h1>${store[i].name} </h1>`;
//     for (var j = 0; j < store[i].image.length; j++) {
//         div.innerHTML += `<img src= ${store[i].image[j]}>`;
//     }
// }
//!6//
// function arrayNumbers(){
//     var button=document.getElementById("but");
//     var input=document.getElementById("input");
//     var p= document.getElementById("p");
//     button.addEventListener("click",function(){
//     for(let i=0;i<array.length;i++){
//         if(array[i]==input.value)
//         console.log(p.innerText+=input.value);
//     }
//     else {array[i].push(input.value)}    
// }); 
// }
// var array=[1,2,3,4,5]
// arrayNumbers();
//!7//
// function pToDate(){
//     var p=document.getElementById("myP");
//     var myDate =new Date();
//     p.addEventListener("click",function(){
// p.innerText= myDate
//     });
// }
// pToDate();
//!8//
// function pToHour(){
//         var p=document.getElementById("p");
//         var myDate =new Date();
//         p.addEventListener("click",function(){
//     p.innerText= myDate.getHours();
//         });
//     }
//     pToHour();
//!9//
// function sumMyAge(){
//  var button=document.getElementById("but");
//  var input=document.getElementById("input");
//  var myDate=new Date();
//  button.addEventListener("click",function(){
// console.log(myDate.getFullYear()-(input.value));
//  });
// };
// sumMyAge();
//!10//
// function arrayNumbers(){
//     var button=document.getElementById("but");
//     var input=document.getElementById("input");
//     var p= document.getElementById("p");
//     button.addEventListener("click",function(){
//     for(let i=0;i<array.length;i++){
//         if(array[i]==input.value)
//         console.log(p.innerText+=input.value);
//     } 
// });   
// }
// var array=[1,2,3,4,5]
// arrayNumbers();
//!11//
// function pFirstLastName(){
//     var p1=document.getElementById("name");
//     var p2=document.getElementById("lastName");
//     var input=document.getElementById("input");
//     var button=document.getElementById("but")
//     button.addEventListener("click",function(){
// p1.innerText+=input.value.substr(0,input.value.indexOf(" "));
//     });
//     button.addEventListener("click",function(){
//         p2.innerText+=input.value.substr(input.value.indexOf(" "))+1;
//     });    
// }
// pFirstLastName()
//!12//
// function lengthOfString(){
//     var input1=document.getElementById("input1");
//     var input2=document.getElementById("input2");
//     var button=document.getElementById("but");
//     var div1=document.getElementById("div1");
//     var div2=document.getElementById("div2");
//     button.addEventListener("click",function(){
// div1.innerText+=input1.value.length
//     });
//     button.addEventListener("click",function(){
//         div2.innerText+=input2.value.length;
//     });    
// }
// lengthOfString()
//!13//
// function person(){
//     var name=document.getElementById("input1");
//     var age=document.getElementById("input2");
//     var email=document.getElementById("input3");
//     var p=document.getElementById("p");
//     var button=document.getElementById("but")
//     button.addEventListener("click",function(){
//     p.innerText+=(`name:${name.value} age:${age.value} email:${email.value}`) 
//     });
//     }
//     person();