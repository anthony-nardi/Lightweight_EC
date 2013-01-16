var ec = (function () {

  var list = [],
      returnObject = {};

  var uid = (function () {
	
    var counter = 0;

    return function () {

      return counter++;
	
	};

  }());

  var addComponent = function (component) {

	for (property in component) {

      if (!component.hasOwnProperty(property)) continue;
	
	  this[property] = component[property];

	}

	return this;

  };

  var removeComponent = function (component) {

    for (property in component) {

	  if (!component.hasOwnProperty(property) || !this.hasOwnProperty(property)) continue;

	  delete this[property];

	}

	return this;

  };

  var createEntity = function () {

    var entity = function () {};

	entity.prototype.addComponent = addComponent;
	entity.prototype.removeComponent = removeComponent;

	return function () {

	  var e = Object.create(entity.prototype);

	  e.id = uid();
	  list[e.id] = e;

	  return e;

	};

  };

  returnObject = function () { return createEntity() };

  returnObject.list = list;

  return returnObject;

}());