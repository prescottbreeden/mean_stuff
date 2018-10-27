function maxMinAvg(arr) {
  let max = arr[0]
  let min = arr[0]
  let avg = arr[0]
  let sum = 0
  arr.map(ele => {
    sum += ele
    if (ele > max) {
      max = ele
    }
    if (ele < min) {
      min = ele
    }
  })
  avg = sum/arr.length
  console.log(max, min, avg)
}


function ternary_version(arr) {
  let max = arr[0], min = arr[0], avg = arr[0], sum = 0
  arr.map(ele => {
    ele > max ? max = ele : max = max
    ele < min ? min = ele : min = min
    sum += ele
  })
  avg = sum/arr.length
  console.log(max, min, avg)
}


// ------------------------ //
//    vars and call stack
// ------------------------ //

arr = [1,2,3,4,5]
maxMinAvg(arr)
ternary_version(arr)
