var input1=document.querySelector("#txt-area");
console.log(input1);
var btn=document.querySelector("#btn-tranlaste");
var output1=document.querySelector("#txt-outpt-area");
var url="https://api.funtranslations.com/translate/minion.json"
function men_api1(text){
   return url+ "?text="+text;
}
function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong with server! try again after sometime")
}
function transalte(){
   var in_text=input1.value;
   console.log(in_text);
   var men_api=men_api1(in_text);
   fetch(men_api)
    .then(response=>response.json())
    .then(json=>{
        var trans_text=json.contents.translated;
        output1.innerHTML=trans_text;
    })
};
btn.addEventListener("click",transalte);