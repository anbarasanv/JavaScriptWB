//Simple promise

/*
PromisetoCleanRoom = new Promise((resolve,reject)=>{
  isClean = false;
  if(isClean){
    return resolve('Clean')
  }
  else{
    return reject('NotClean')
  }
});

PromisetoCleanRoom.then((response) => {
  console.log('The room has been '+ response)
}).catch((response) => {
  console.log('The room has been '+ response)
});
*/

//Indvidual promises

let CleanTheRoom = function (){
  return new Promise((resolve,reject) => {
     resolve('Room has been cleaned\n')
    
  });
};

let ClearGarbage = function(res){
  return new Promise((resolve,reject)=>{
     resolve(res+'Garbage has been cleared\n')
  });
};

let GetRevard = function(res){
  return new Promise((resolve, reject) => {
     resolve(res+'Got the Ice Cream\n')
  });
};


CleanTheRoom().then((message)=>{
  return ClearGarbage(message)
}).then((message) => {
  return GetRevard(message)
}).then((message)=>{
  console.log('Job has been done\n'+message)
})


// To run the all the promises parallel 
/*
Promise.all([CleanTheRoom(),ClearGarbage(),GetRevard])
.then(()=>{
  console.log('Finished!')}
);
*/
// To get any one of them success 

/*
Promise.race([CleanTheRoom(),ClearGarbage(),GetRevard])
.then((res)=>{
  console.log(res+'Finished!')}
);
*/

