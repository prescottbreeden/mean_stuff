/*
 * THIS references the OBJECT that is executing the current function
 *
 * If a function is part of an object - called a method
 * so if a function is a method -> this references the object
 *
 * if function is not part of an object -> references window/global
 *
*/
const video = {
  title: 'a',
  play() {
    console.log(this); // object
  }
}

video.stop = function() {
  console.log(this); // object
}

// video.stop()

// console.log('\n\n===================================\n\n')

function playVideo() {
  console.log(this); // global
}

// playVideo();


function Video(title) {
  this.title = title;
  console.log(this);
}
// console.log('\n\n===================================\n')

// Video('bob');
// console.log('\n--------------------------------\n')
// const v = new Video('a');


// console.log('\n\n===================================\n\n')

const video2 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(tag);
      console.log(this);
    });
  },
  showTags2() {
    this.tags.forEach(tag => {
      console.log(this);
    })
  }
};

// video2.showTags();
// video2.showTags2();

// console.log('\n\n===================================\n\n')

// const cat = {
//   name: 'Mittens',
//   meow: function() {
//     console.log('meow');
//     console.log(this)
//   }
// }

// cat.meow();

// console.log('\n\n===================================\n\n')

// function meow() {
//   var sound = 'purr';
//   this.name = 'Mittens'
//   // console.log(this)
//   this.noise = function() {
//     return sound;
//   }
// }

// let kitteh = new meow();
// console.log(kitteh.sound);
// console.log(kitteh.noise());


// console.log('\n\n===================================\n\n')

// let someFunc = (name) => {
//   this.name = name;
//   console.log('this in someFunc', this);
//   console.log('someFunc prototype', this.__proto__)
//   console.log('someFunc inherited from', this.__proto__.__proto__)
// }

// // someFunc('bob');

// Object.prototype.meow = function() {
//   console.log('meow...');
// }

// let arr = [];
// arr.meow();
// someFunc.meow();
