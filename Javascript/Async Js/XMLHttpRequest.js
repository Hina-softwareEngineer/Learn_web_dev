var xhr=new XMLHttpRequest();

xhr.onreadystatechange=function(){
  if (xhr.readyState==4 && xhr.status==200){
    console.log(xhr.responseText);
  }
  // console.log("ready state is ",xhr.readyState);
};

xhr.open('GET',"https://api.github.com/zen");
xhr.send();

//-----------------------------------//