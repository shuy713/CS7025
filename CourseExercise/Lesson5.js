// Multi-dimensional Arrays Practice
let multiArray = [
    [0, 1, 2, 31, [2, 3, 4, 51, [1, 2, 3, 4, 5]]]
  ];
  
  console.log("Element m[0][2]:", multiArray[0][2]); // Output: 2
  console.log("Element m[0][4][4][3]:", multiArray[0][4][4][3]); // Output: 4
  

  let q = [1, [1, 2, 2], [0, [2, 1], 9, 5], [1, 12, 3], 1, 13];
  console.log("Element q[2][1][1]:", q[2][1][1]); // Output: 1
  
  let arr1 = [1, 2, 3];
  let shallowCopy1 = [...arr1];
  
  arr1.push(4);
  
  console.log("Original array after push:", arr1); // Output: [1, 2, 3, 4]
  console.log("Shallow copy remains unchanged:", shallowCopy1); // Output: [1, 2, 3]
  

  let arr2 = [1, 2, [3, 4]];
  let shallowCopy2 = [...arr2];
  
  arr2[2][0] = 4;
  
  console.log("Original array after modifying nested element:", arr2); // Output: [1, 2, [4, 4]]
  console.log("Shallow copy reflects the nested change:", shallowCopy2); // Output: [1, 2, [4, 4]]
  

  // Resizable Arrays Practice
  let days = ["Mo", "Tu", "We", "Th", "Fr", "Sa"];
  
  console.log("Initial length of days:", days.length); // Output: 6
  
  days.push("Su");
  
  console.log("Updated length of days:", days.length); // Output: 7
  
  console.log("Days array after adding a day:", days); // Output: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]