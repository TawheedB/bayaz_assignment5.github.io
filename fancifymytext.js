function function_change(){
  document.getElementById("TextID").style.fontSize="2em";
  if(document.getElementById('fancyButton').checked==true){

      document.getElementById("TextID").style.fontWeight="bold";
      document.getElementById("TextID").style.color="blue";
      document.getElementById("TextID").style.textDecoration="underline";

  }
  if(document.getElementById('boringButton').checked==true){

      document.getElementById("TextID").style.fontWeight="normal";
      document.getElementById("TextID").style.color="black";
      document.getElementById("TextID").style.textDecoration="none";

  }
}
function mooButoon(){
var lower=document.getElementById("text_id").value;
var uppercase=lower.toUpperCase();
var mooText=uppercase.split(".");
endMoo=mooText.join("-Moo");
document.getElementById("TextID").value=endMoo;
}
