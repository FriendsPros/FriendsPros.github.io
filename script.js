console.log("hellow page git");
function dov(){
    var lop = [0,1,2,3,4,5];
    for (let index = 0; index < lop.length; index++) {
        const element = lop[index];
        console.log(element);
        addtimer(index);
        setTimeout(function(){
            if(index == lop.length-1){
            dov();
        }
    },1000);
    console.log(index);

}
}
function addtimer(params) {
    document.getElementById("status").innerHTML = params;
}
window.onload = function(){
    dov();
}