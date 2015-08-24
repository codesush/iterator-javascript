# Synopsis

Create a simple iterator class using Javascript. The iterator requirements are: 

  - A constructor that takes an array
  - It has the following methods:
    - hasNext()
    - next()
    - current()
    - tag()
    - reverse()

###### hasNext()
This method will return true if the iterator can iterate any further, else return false.

###### next()
This method will move the iterator one spot to the right and return new value.

###### current()
This method will return the current value that is pointed by the iterator.

###### tag()
This method will return a function. When tag is invoked it will store the current value and return a function. When this returned function is invoked anytime, the tag value that was set will be returned.

###### reverse()
This method will reverse the array. The current value will stay is the same even after the array is reversed.
Eg:-
 ```sh
    1 2 3 4 5 6     => current value: 4 
    6 5 4 3 2 1     => current value: 4
```

### Usage
Run the index.html to use the iterator. Questions 2 is included in the index.html and loads the array from the first div with the class ".section".

The question 3 is included in the question-3.html.

### Tests
Could not get to writing unit tests for the iterator on time.
