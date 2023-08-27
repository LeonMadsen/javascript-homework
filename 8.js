let users = new Map();
users.set("spartak", "1");
users.set("zenit", "2");
users.set("man u", "3");
users.set("BATE", "4");
for (let user of users.keys()){
console.log(user + " is " + users.get(user));
}