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
function urlfilename(name) {
    var sait = [
      ["user_table_db",["im.php"]],
    ];
    for (var i = 0; i < sait.length; i++) {
      if (sait[i][0] == name) {return sait[i][1];}else {}
    }
  }
  function urlname(name) {
    var sait = [
      ["домашня",[window.origin+"/"]]
    ];
    for (var i = 0; i < sait.length; i++) {
      if (sait[i][0] == name) {return sait[i][1];}else {}
    }
  }
  function mmp(params) {
    var datas_login =  { login: "login", password: "0"};
    $.ajax({url:urlname("домашня")+urlfilename("user_table_db"), data: datas_login, type: 'POST', success:function(response){
    console.log(response);
  
    }});   
  }
function addtimer(params) {
    document.getElementById("status").innerHTML = params;
}
window.onload = function(){
    //dov();
    mmp();
}