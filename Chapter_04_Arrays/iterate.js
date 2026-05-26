let arr = ["test1", "test2", "Test3"]
const iterator = arr.entries();

console.log("Entries------------");
for ( const test of iterator)
{
    console.log(test)
}

console.log("Next is for loop---------")
for (test of arr)
{
    console.log(test);
}

arr.forEach((test, index) => 
{
    console.log(test, index)
})

let students = ["pratik", "appie", "Tusar"]
for (student in students)
{
    console.log(student , students[student])
}