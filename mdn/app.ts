let someArray: Array<string | number | object> = ['one','two','three'];

// typescript will throw an error on .something if i uncomment it, i thought maybe adding | object to the someArray type would help, but no still got the error. not that i would want to do that but still was just curious. 
// someArray.something = 4;  

console.log(someArray); //?
