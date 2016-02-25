var Car = function(loc){
	var obj = {loc: loc};
	extend(obj, Car.methods);
	return obj;
}

Car.methods ={
	move: function (){
		this.loc++;
	}
};


// better syntax (look up won't great a copy, goes through - Prototypal classes )

var Car = function(loc){
	var obj = Object.create(Car.methods);
	obj = {loc: loc};
	return obj;
}

Car.methods ={
	move: function (){
		this.loc++;
	}
};

// even better and it is convention (methods would be also fine ) but its stored at __proto___

var Car = function(loc){
	var obj = Object.create(Car.prototype);
	obj = {loc: loc};
	return obj;
}

Car.prototype.move = function (){
		this.loc++;
	}
};


var amy = Car(1);
amy.move();


// pseudoclassical with addition of new in var  

var Car = function(loc){
	this.loc = loc;
}

Car.prototype.move = function (){
		this.loc++;
	}
};


var amy = new Car(1);
amy.move();


/// pseudoclasicall subclasses

var Car= function(loc){
	this.loc=loc;
};

Car.prototype.move = function(){
	this.loc++;
}


var zed = new Car(3);
zed.move();

var amy = new Van(9);
amy.move();
amy.grab();






