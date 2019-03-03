function binarySearch(arr, val) {
  let start = 0
  let end = arr.length-1
  let mid = Math.floor(arr.length/2)
  if (arr[start] === val) { return true }
  while(start < end) {
    mid = end-start/2 
    if (arr[mid] > val) {
    end = mid - 1 
    }
    if (arr[mid] < val) {
      start = mid + 1
    }
    if (arr[mid] === val) {
      return true
    }
  }
  return false
}


// ----------------- //
//     call stack
// ----------------- //

console.log(binarySearch([1,2,3,4,5], 1))
