//multi-user concept

//insert code that creates user directory with default user
function loginUser(username){
le._path.home = "/a/users/" + username + "/"
le._path.desktop = "/a/users/" + username + "/desktop/"
//  le._path.skin = "/a/users/" + username + "/skin/"
// uncomment above line once/if custom skins for users were implemented
// IMPORTANT: insert code for settings.json, since i cant figure that out
  localforage.getItem('/a/users/' + username + '/boot/boot.js').then(function(okthen){
    eval(okthen) //ok yes this is unsafe, but i will change it later
    //ok so this boot idea doesnt work yet
  })
}

//DEMO CODE
loginUser("default") // /a/users/default/ should exist, WITH all other directories mentioned in the function
