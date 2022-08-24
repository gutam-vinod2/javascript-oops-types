class person {
constructor (name,id) {
this.name = name;
this.id = id;
}
add_address (add){
this.add = add;
}
getdetails(){
    console.log((this.name) + "this is id" + (this.id) + "city is" + (this.add));
}

}

let person1 = new person ('vinod', 23,);
person1.getdetails();
person1.add_address("mumbai");
console.log(person1);