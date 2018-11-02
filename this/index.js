const video = {
  title: 'a',
  play() {
    console.log(this);
  }
}

video.stop = function() {
  console.log(this);
}

video.stop()

console.log('\n\n===================================\n\n')

function playVideo() {
  console.log(this);
}

playVideo();


function Video(title) {
  this.title = title;
  console.log(this);
}
console.log('\n\n===================================\n\n')
const v = new Video('a');


console.log('\n\n===================================\n\n')

const video2 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(tag);
      // console.log(this);
    });
  },
  showTags2() {
    this.tags.forEach(tag => {
      console.log(this);
    })
  }
};

video2.showTags();
video2.showTags2();

console.log('\n\n===================================\n\n')

const cat = {
  name: 'Mittens',
  meow: function() {
    console.log(this)
  }
}

cat.meow();

console.log('\n\n===================================\n\n')

function meow() {
  console.log(this)
}

meow()

console.log('\n\n===================================\n\n')

let bob = () => {
  console.log(this);
  console.log(this.__proto__)
  console.log(this.__proto__.__proto__)
}

bob();
