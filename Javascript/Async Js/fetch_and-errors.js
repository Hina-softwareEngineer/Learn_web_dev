var url="https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url,{
  body:JSON.stringify({
    name:'blue',
    login:'bluecat',
  }),
  method:'POST' })
.then(function(response){
  return (response.json());
})
  .then(function(data){
    console.log(data.bpi.EUR.rate);
    console.log(data.status)
})

// fetch(url) .then(function(response){
//   return (response.json());
// })
//   .then(function(data){
//     console.log(data.bpi.EUR.rate);
//     console.log(data.status)
// });

//------------------------------//

var btn = document.querySelector("button");
btn.addEventListener("click", function(){
  var url = 'https://api.github.com/users/coltasdas';
  fetch(url)
  .then(handleErrors)
  .then(function(request){
    console.log("EVERYTHING IS FINE!");
    console.log(request);
  })
  .catch(function(error){
    console.log(error);
  });
});

function handleErrors (request){
  if(!request.ok) {
    throw Error(request.status);
  }
  return request;
}