// Code your solution here
function findMatching (arr,s){
  arr= arr.filter(v => {
    return v.toLowerCase() === s.toLowerCase();
  })
  return arr;
}
function fuzzyMatch(arr,s){
   arr= arr.filter(function(v){
    return v.toLowerCase().indexOf(s.toLowerCase()) === 0;
  })
  return arr;
}
function matchName(arr,s) {
  arr = arr.filter(function(v){
    return v['name'] === s });
    return arr;
}
