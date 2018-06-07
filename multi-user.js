//multi-user concept

//insert code that creates user directory with default user
function loginUser(username){
le._path.home = "/a/users/" + username + "/"
le._path.desktop = "/a/users/" + username + "/desktop/"
//  le._path.skin = "/a/users/" + username + "/skin/"
// uncomment above line once/if custom skins for users were implemented
// IMPORTANT: insert code for settings.json, since i cant figure that out
  console.log($store.getRaw('users/default/boot/boot.js'))
eval($store.getRaw('users/default/boot/boot.js')) // boot code attempt, probably doesnt work
}

//DEMO CODE
loginUser("default") // /a/users/default/ should exist, WITH all other directories mentioned in the function
