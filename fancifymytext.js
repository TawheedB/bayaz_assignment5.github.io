function moo()
{
  var text=document.getElementById("TextID").value;
  var uppercase_text=text.toUpperCase();
  var split_text=uppercase_text.split(".");
  suffixed_text=split_text.join("-Moo");
  document.getElementById("TextID").value=suffixed_text;

}
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
