// Initialise Parse


function startParse(){
  Parse.initialize(
  "bxr71QksTuJsPlLRodiehCBmfPtrKIzSsuu2YtId",
  "AMzZx8qW1pw9STOOjf625wkDau1vzddW0svKd7Dq"
  );

  Parse.serverURL = 'https://parseapi.back4app.com';
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function updateUser(x,y,z) {

  Parse.Cloud.run('updateUser', {
      AccessToken: x,
      ObjectName: y,
      ObjectValue: z
  }, {
    success: function(result) { 
    },
    error: function(error){  
    }
  });
}

// Settings Functions *********************************************************************

function notificationsOn(){
  var accessToken = localStorage.getItem("accessToken");
  updateUser(accessToken,"notifications",true);
  document.getElementById("notifications2").style.display = "none";
  document.getElementById("notifications1").style.display = "inline";
}

function notificationsOff(){
  var accessToken = localStorage.getItem("accessToken");
  updateUser(accessToken,"notifications",false);
  document.getElementById("notifications1").style.display = "none";
  document.getElementById("notifications2").style.display = "inline";
}

function preferencesOn(){
  var accessToken = localStorage.getItem("accessToken");
  updateUser(accessToken,"updates",true);
  document.getElementById("preferences2").style.display = "none";
  document.getElementById("preferences1").style.display = "inline";
}

function preferencesOff(){
  var accessToken = localStorage.getItem("accessToken");
  updateUser(accessToken,"updates",false);
  document.getElementById("preferences1").style.display = "none";
  document.getElementById("preferences2").style.display = "inline";
}

function disconnect(){
  
  if (confirm("Are you sure? Disconnecting will completely remove your Kick.run achievements to date.")) {
    var accessToken = localStorage.getItem("accessToken");
    updateUser(accessToken,"activeUser",false) 
    location.reload();
  } else {
    return false;
  }
}

function reconnect(){
    var accessToken = localStorage.getItem("accessToken");
    updateUser(accessToken,"activeUser",true)
    document.getElementById("deleteNotice").style.display = "none";
}

function linkTo(x){
  window.location.href = x;

}


// Cart Functions *********************************************************************

function productFlow(x){
  document.getElementById("frontPage").style.display = "none";
  document.getElementById("productFlow").style.display = "block";
  localStorage.setItem("T", x+",");
}

function storeLocal(x,y){
  localStorage.setItem(x, y);
}

function removeLocal(x,y,z){
  localStorage.removeItem(x);
  localStorage.removeItem(y);
  localStorage.removeItem(z);
}

function addToCart(){

var cart = getCookie("cart");

var T = localStorage.getItem("T");
var M = localStorage.getItem("M");
var G = localStorage.getItem("G");
var S = localStorage.getItem("S");

var cart = cart+":"+T+G+S+M

document.cookie = "cart="+cart+";max-age=2678400; path=/"
}

function hideShowBlock(x,y){
  document.getElementById(x).style.display = "none";
  document.getElementById(y).style.display = "block";
}

function hideShowFlex(x,y){
  document.getElementById(x).style.display = "none";
  document.getElementById(y).style.display = "flex";
}

function hideShowInline(x,y){
  document.getElementById(x).style.display = "none";
  document.getElementById(y).style.display = "inline";
}

function  navigate(x) {
  window.location.href = x;
}

