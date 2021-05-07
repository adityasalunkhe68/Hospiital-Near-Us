var search; 
onEvent("button","click",function (){
  search = getText("text_input1")
var google = "https://www.google.com/maps/search/hospital+near+me";
open(google);
})
