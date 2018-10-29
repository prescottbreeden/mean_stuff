function getStuffFromDatabase(resolve, reject) {
  var data = "whee"
  setTimeout(function() {
    data = [{name: 'Chuck Norris'}, {name: 'Bugs Bunny'}, {name: 'Wile E Coyote'}]
    resolve(data);
  }, 1000)
}

function requestDataFromDatabase() {
  console.log('running')
  var data = new Promise(function(resolve, reject) {
    getStuffFromDatabase(resolve, reject)
  })
  data.then(function(data) {
    console.log(data, "Asynchronous")
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name)
    }
  })
    .then(() => {
      console.log('balls')
    })
    .then(() => {
      console.log('are')
    })
    .then(() => {
      console.log('bouncy')
    })
  data.catch(function() {
    console.log('failure')
  })
}

requestDataFromDatabase()

