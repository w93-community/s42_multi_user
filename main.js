// Query System Concept (by Domenic)
// to do: aDD SEMICOLONS
// to be ran with /a/boot
let params = (new URL(document.location)).searchParams;
let pass = params.get("pass"); //windows93.net?pass="value"
var sys-pass = "demo" //testing purposes
if pass = !sys-pass {
bootSetup();
$boot.BIOS.innerHTML = "Incorrect Password " + pass +" !"
}else{
$alert("login correct");
}
