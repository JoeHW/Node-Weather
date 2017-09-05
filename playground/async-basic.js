// console.log('starting app');
//
// setTimeout(() => {console.log('timeout function')}, 2000);
// setTimeout (() => {console.log('second callback')}, 0);
//
// console.log('finishing app');
let getUser = (id, callback) => {
  let user = {
     id: id,
     name: "Benny"
     }
  setTimeout(() => {
 callback(user)}, 3000);
};


 getUser(35, (userObj)=>{
   console.log(userObj)
 });
