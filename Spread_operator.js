const arr1=["Apple","Banana","Mango","Pineapple"];
console.log(arr1);
console.log(...arr1);

arr2=arr1;
console.log(arr2);
arr1.pop();
arr1.push("Watermelon","Papaya","Litchi");
console.log(arr1 == arr2);
console.log(arr2);
console.log(arr2.sort());
console.log(arr1);
console.log(arr1.slice(1,5));