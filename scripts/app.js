
// Iterator class constructor
function Iterator(){
	this.position = 0;	// position(property) - Current position in the list
	this.listSize = 0;
	this.data = [];
	this.append = append;
	this.tag = tag;
	this.prev = prev;	// prev(function) - Moves the iterator one spot before and returns the new value.
	this.next = next;	// next(function) - Moves the iterator one spot and returns the new value.
	this.hasNext = hasNext;    // hasNext(function) - Returns true if not the end of list, else returns false
	this.current = current;    // current(function) - Returns the current value in the list
	this.reverse = reverse;    // reverse(function) - Reverses the list
	this.length = length;	
}

// append(function)
// Let's you append an array to the data array
function append(elements){
	Array.prototype.push.apply(this.data, elements);
	this.listSize = this.data.length;
}


// length(function)
// Returns the size of the list
function length(){
	return this.listSize;
}

// next(function)
// Returns the new value in the list by moving the iterator one position to the right
// The position needle is incremented by 1
function next(){
	if(this.position < this.listSize - 1){
		return this.data[++this.position];
	}
	else{
		return "No data after this.";
	}
}

// prev(function)
// Returns the new value in the list by moving the iterator one position to the left
// The position is decremented by 1
function prev(){
	if(this.position > 0){
		return this.data[--this.position];
	}
	else{
		return "You are on the first index in the list.";
	}
}

// hasNext(function)
// Returns True if not at the end of the list, else returns False
function hasNext(){
	return this.position < (this.listSize - 1);
}

// current(function)
// Returns the current value in the list
function current() {
	return this.data[this.position];
}

// tag(function)
// Sets a tag on the list with the current value and returns a function
// Returns the value that was set using closure when the returned function is invoked
function tag() {
	var currentTag = this.current();
	return function(){
			return currentTag;
		};
}

// reverse(function)
// Reverses the list array
// The current value stays the same that was before the list was reversed
function reverse(){
	var currentValue = this.data[this.position];
	this.data.reverse();
	//get the index where currentValue is
	//set the current pointer to this index

	this.position = this.data.indexOf(currentValue);
	return this.data;
}


//Select the first element with the class "section"
var importList = document.querySelectorAll(".section")[0].innerHTML;

//Clean the HTML data into an array
var cleanList = importList.trim().split(" ");

//Initialize a new List Iterator
var dataList = new Iterator();

//Load the cleaned array into the data list
dataList.append(cleanList);