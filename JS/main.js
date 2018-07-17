
// Initialise Parse

Parse.initialize(
  "bxr71QksTuJsPlLRodiehCBmfPtrKIzSsuu2YtId",
  "AMzZx8qW1pw9STOOjf625wkDau1vzddW0svKd7Dq"
);
Parse.serverURL = 'https://parseapi.back4app.com';

// Functions

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


