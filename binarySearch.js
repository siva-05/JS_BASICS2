let binarySearch=(arr,val,low,high)=>{
let mid=Math.floor((low+high)/2);
if(arr[mid]===val)
return mid;
else if(arr[mid]<val)
return binarySearch(arr,val,mid+1,high);
else
return binarySearch(arr,val,low,mid-1);

}

const arr=[1,2,3,4,5,6];
val=3
let ans=binarySearch(arr,val,0,arr.length-1);
console.log(ans);