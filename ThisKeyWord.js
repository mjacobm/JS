// 'This' keyword explaided
// if the funtion in part of an object its called method
// method -> refers to object
// funtion -> refers to global (window, global)

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
}
video.play(); //Refers to object as videos is a object.

video.stop= function()
{
    console.log(this);
}
video.stop(); //Refers to object as its video is a object

function playVideo()
{
    console.log(this);
}
playVideo(); //Refers to Window as we are calling without object.

function Video(title)
{
    this.title = title;
    console.log(this);
}
const v = new Video('b'); // Refers to object.

const images = {
    title: 'IMG',
    tags: ['a','b','c'],
    showTag() {
        this.tags.forEach(function(tag){
            console.log(this.title,tag)
        },this);
    }
}

images.showTag();


