function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}
const url1 = 'http://localhost:8991/randomnumbers';
console.log(url1);

var random1, random2;



function myFunction(){
    fetch('http://localhost:8991/randomnumbers')
    .then( response => response.json() )
    .then( data => {
        document.getElementById("para").innerHTML = `<h1>Two Random Numbers are : ${data.num1} And ${data.num2}</h1>`;

    })
}


//function myFunction(){
//    fetch('http://localhost:8991/randomnumbers')
//    .then( response => response.json() )
//    .then( data => {
//        document.getElementById("para").innerHTML = `<h1>Two Random Numbers are : ${data.num1} And ${data.num2}</h1>
////                                                    <form action="/add">
////                                                    <label for="username">Username:</label>
////                                                    <input type="text" id="username" name="username"><br><br>
////                                                    <label for="you_entered">Your Result :</label>
////                                                    <input type="text" id="you_entered" name="you_entered"><br>
////                                                    <label for="num1">Num1 :</label>
////                                                    <input type="text" id="num1" name="num1"><br>
////                                                     <label for="num2">Num2 :</label>
////                                                      <input type="text" id="num2" name="num2"><br>
////                                                      //Num1 : <h1 id="num1"> ${data.num1} </h1>
////                                                      //Num2 : <h1 id="num2"> ${data.num2} </h1>
////
////                                                      <input type="submit" value="Submit" onsubmit="submit()">
////                                                    </form>
//                                                    //<button id="updateResult" onClick="checkResult()" formaction="/add">Check</button>`;
//    })
//}

//function submit(data) {
//
//    post(url, requestBody)
//    .then(res => )
//}

function updateResult(){
    fetch('http://localhost:8991/stats')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}
