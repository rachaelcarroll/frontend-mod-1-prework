/*
node section4/exercises/tweet.js

In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numLikes = numberOfLikes;
    this.comments = comments;
}
  addComment() {
  this.comments.push(" ");
}
  addLike() {
  this.numLikes ++;
  }
}
var vainStatement = new Tweet("Trump", "I should be President", "11:01 PM December 31, 2020", 345, ["You are the worst", "MAGA", "BIDEN 2020"])
vainStatement.addComment();
console.log(vainStatement);

var workoutTip = new Tweet("Paleomg", "New leg workout to try", "10:31 AM December 1, 2018", 4351, ["Thank You!", "This is great!", "Follow me back!"])
workoutTip.addLike();
console.log(workoutTip);
