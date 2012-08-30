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

		var entity = {};

		entity.addComponent = addComponent;
		entity.removeComponent = removeComponent;
		entity.id = uid();
		list[entity.id] = entity;

		return entity;

	};

	returnObject = function () { return createEntity() };

	returnObject.list = list;

	return returnObject;

}());