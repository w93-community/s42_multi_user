// Query System Concept (by Domenic)
// to do: aDD SEMICOLONS
// to be ran with /a/boot
let params = (new URL(document.location)).searchParams;
let pass = params.get("pass"); //windows93.net?pass="value"
var sys_pass = "demo" //testing purposes
if pass = !sys_pass {
bootSetup();
$boot.BIOS.innerHTML = "Incorrect Password"
}else{
$alert("login correct");
}
