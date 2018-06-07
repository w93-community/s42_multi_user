//multi-user concept
function loginUser(username){
le._path.home = "/a/users/" + username + "/"
le._path.desktop = "/a/users/" + username + "/desktop/"
// le._settings = JSON.parse($store.getRaw("/a/users/" + username + "/settings.json"))
}
function createUser(username){
  localforage.setItem('users/default/settings.json', 'hello world')
  localforage.setItem('users/default/desktop/welcome.txt', 'This is the desktop for your user, whatever you put into here will only be for this user')
}
//DEMO CODE
createUser("default") // create default user
loginUser("default") // login as user
