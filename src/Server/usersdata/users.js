export let users = [
     {
          mobile: "0889",
          name:"ina familia",
          username: "first",
          password: 123,
     },
     {
          mobile: "0889",
          name:"ina2 familia2",
          username: "second",
          password: 123,
     }
];

export function getUsers(){
     return new Promise((resolve,reject)=>{
          resolve(users);
     });
}

