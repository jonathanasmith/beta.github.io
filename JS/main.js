// Initialise Parse

Parse.initialize(
  "bxr71QksTuJsPlLRodiehCBmfPtrKIzSsuu2YtId",
  "AMzZx8qW1pw9STOOjf625wkDau1vzddW0svKd7Dq"
);
Parse.serverURL = 'https://parseapi.back4app.com';

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
