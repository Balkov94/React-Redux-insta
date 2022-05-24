export let users = [
     {

          userID:1,
          mobile: "0889",
          name:"ime familia1",
          username: "first",
          password: 123,
          posts:[],
          followers:[],
          following:[2,3,4,5,6,7,8,9,10],
          profPicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuYSHG0_bUUHWf_CNNdIgovMMcAxkTx1R4Q&usqp=CAU"

     },
     {
          userID:2,
          mobile: "0889",
          name:"ime familia2",
          username: "second",
          password: 123,
          posts:[],
          followers:[],
          following:[],
          profPicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzTuLO5z8ZmnvqNSMdaaYkTKvphKORCS7YA&usqp=CAU"
     },
     {
          userID:3,
          mobile: "0889",
          name:"ime familia3",
          username: "3",
          password: 123,
          posts:[],
          followers:[],
          following:[],
          profPicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzTuLO5z8ZmnvqNSMdaaYkTKvphKORCS7YA&usqp=CAU"
     },   {
          userID:4,
          mobile: "0889",
          name:"ime familia4",
          username: "4",
          password: 123,
          posts:[],
          followers:[],
          following:[],
          profPicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzTuLO5z8ZmnvqNSMdaaYkTKvphKORCS7YA&usqp=CAU"
     },   {
          userID:5,
          mobile: "0889",
          name:"ime familia5",
          username: "5",
          password: 123,
          posts:[],
          followers:[],
          following:[],
          profPicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzTuLO5z8ZmnvqNSMdaaYkTKvphKORCS7YA&usqp=CAU"
     },
     {
          userID:6,
          mobile: "0889",
          name:"ime familia6",
          username: "6",
          password: 123,
          posts:[],
          followers:[],
          following:[],
          profPicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzTuLO5z8ZmnvqNSMdaaYkTKvphKORCS7YA&usqp=CAU"
     },
     {
          userID:7,
          mobile: "0889",
          name:"ime familia7",
          username: "7",
          password: 123,
          posts:[],
          followers:[],
          following:[],
          profPicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzTuLO5z8ZmnvqNSMdaaYkTKvphKORCS7YA&usqp=CAU"
     },
     {
          userID:8,
          mobile: "0889",
          name:"ime familia8",
          username: "8",
          password: 123,
          posts:[],
          followers:[],
          following:[],
          profPicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzTuLO5z8ZmnvqNSMdaaYkTKvphKORCS7YA&usqp=CAU"
     },
     {
          userID:9,
          mobile: "0889",
          name:"ime familia2",
          username: "9",
          password: 123,
          posts:[],
          followers:[],
          following:[],
          profPicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzTuLO5z8ZmnvqNSMdaaYkTKvphKORCS7YA&usqp=CAU"
     },
     {
          userID:10,
          mobile: "0889",
          name:"ime familia10",
          username: "10",
          password: 123,
          posts:[],
          followers:[],
          following:[],
          profPicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzTuLO5z8ZmnvqNSMdaaYkTKvphKORCS7YA&usqp=CAU"
     }
];

export function getUsers(){
     return new Promise((resolve,reject)=>{
          resolve(users);
     });
}

