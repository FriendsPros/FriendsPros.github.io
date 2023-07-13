console.log("hellow page git");
function dov(){
    var lop = [0,1,2,3,4,5];
    for (let index = 0; index < lop.length; index++) {
        const element = lop[index];
        console.log(element);
        addtimer(index);
        setTimeout(function(){
            if(index == lop.length){
            dov();
        }
    },1000);

}
}
function addtimer(params) {
    document.querySelectorAll("#status").text = params;
}
window.onload = function(){
    dov();
}