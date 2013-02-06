Lightweight_EC
==============

A light-weight entity-component framework.

# Overview

***

The concept of Entity-Component frameworks is to break up models into pieces of self contained functionality and state to alleviate the need of understanding complex hierarchies. You can think of entities as unique identifiers and components as compartmentalized, fully functioning simplistic models. 

For example, a game developer wishes to create a player object.  Some main functions a player object must have are position, render method, event handling, etc. The position component may be as simple as an x, y, and angle of rotation. The interesting thing about this framework is the ability to utilize prototypical inheritance and the mixin pattern.  It's possible to create a base player object and then create instances of players each having functional variations.  Here is how you would do this:

###Example

***
```javascript
var position = {
  'x':0,
  'y':0
};

var events = {
  'on' : function (name, callback) {//do stuff},
  'off': function (name) {//do stuff},
  'fire':function (name) {//do stuff}
};

var renderPlayer = {
  'render': function () {//draw player}
};

var player = ec().addComponent(position).addComponent(events).addComponent(renderPlayer);  
//create base player object which inherits null, then adds the functionality of all 3 components we have defined.

var jumpingPlayer = ec(player);
//instantiate an instance of the basse player object

jumpingPlayer.jump = function () {//jump}; //augment entity with specialized own props
```
Obviously, you can chain the inheritance indefinitely and arbitrarily augement the entity with any objects you'd like.
