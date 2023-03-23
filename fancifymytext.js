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
function mooButton(){
  TextID.style.textTransform="uppercase"
  let str=textarea.value.split(".");
  let str2=str.join("-Moo");
  TextID.value=str2;
}
