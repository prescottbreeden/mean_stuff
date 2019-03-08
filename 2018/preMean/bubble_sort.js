function bubbleSort(arr) {
  let sorted = false

  while (!sorted) {
    sorted = true
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        sorted = false
      }
    }
  }
  return arr
}


arr = [5,4,3,2,1]
arr = bubbleSort(arr)
console.log(arr)
