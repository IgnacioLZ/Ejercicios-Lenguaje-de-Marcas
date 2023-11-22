/*****************************************/
/*
/*
/*
/*
/*****************************************/

function show(element){
    document.getElementById(element).style.visibility="visible";
    /*extrae un elemnto (Bats) y cambia algo en su estilo (en este caso la visibilidad) */
}
function hide(element){
    document.getElementById(element).style.visibility="hidden";
    /*extrae un elemnto (Bats) y cambia algo en su estilo (en este caso la visibilidad) */
}
function sound(element){
    document.getElementById(element).play();
}
function silence(element){
    document.getElementById(element).pause();
}