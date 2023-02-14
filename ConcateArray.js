let concat = (...arr) => {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++){
        a.push(arr[i][j]);
      }
      
    }return a;
  }
  
  console.log(concat([1, 8, 3], [4, 5], [10, 7]));