//Before we get started implementing our new methods, we need to create an object to contain them. 
//This object will represent our library containing all the functionality we add to it.
//Create a new variable called _ that is initialized to an empty object.

//We’ve written test files for each task in this project. 
//Let’s run the first test suite to ensure your lodash object was initialized correctly.
//To run a file using node, we type the node command in a command line followed by the name of the file. 
//For example, to run the main file we are working on, we would run node _.js.
let _ = {
    // The first method we will implement is .clamp(). 
    //Add a method to our _ object called clamp.
    //Add three parameters to this method: number, lower, and upper.
    clamp(number,lower,upper) {
        //Within the method, create a variable called lowerClampedValue that is set equal 
        //to the return value of Math.max() called with number and lower.
        let lowerClampedValue = Math.max(number,lower);
        //Create a variable called clampedValue that is set equal 
        //to the return value of Math.min() called with lowerClampedValue and upper.
        let clampedValue = Math.min(lowerClampedValue,upper);
        //Return clampedValue as our final value from the method.
        return clampedValue;
    },
    //The next number method we will implement is .inRange(). 
    //Add a method to our _ object called inRange.
    //Add three parameters to this method: number, start, and end.
    inRange(number,startValue,endValue) {
        //Within the method, create an if statement that checks to see if end is undefined.
        if(!endValue) {
            //Within the if statement block, set end equal to start. Then set start equal to 0.
            endValue = startValue;
            startValue = 0;
        };
        //After the previous if statement, add another if statement. 
        //This if statement should check whether start is bigger than end.
        if (startValue > endValue) {
            //Within the if statement block, swap the two start and end values. 
            //Create a variable called temp that is set to the current end value. 
            let temp = endValue;
            //Then set end equal to start. Finally, set start equal to temp.
            endValue = startValue;
            startValue = temp;
        };
        //After our second if statement, create a variable called isInRange and set it equal to 
        //a boolean expression that checks if start is smaller than or equal to number and 
        //if number is smaller than end.
        let isInRange = number >= startValue && number < endValue 
        //Finally, return the value of isInRange from the method.
            return isInRange;
    },
    //The first string method we will implement is .words(). 
    //Add a method to our _ object called words.
    //Add one parameter to this method: string.
    words(string) {
        //Within the method, create a variable called words and set its value equal to 
        //string split on space characters ' ' using the .split() method.
        let newArray = string.split(' ');
        //Return the value of words from the method.
        return newArray;
    },
    //The next string method we will implement is .pad().
    //Add the .pad() method to the lodash object.
    pad(string,finalLength) {
        //Check to make sure the target length is longer than the current string length. 
        //If not, return the unpadded version of the string.
        if (string.length >= finalLength) {
            return string;
        }
        //Find the amount of padding to add to the start of the string by finding the difference 
        //between the target length and the string length, dividing by two, 
        //and rounding down the resulting number. 
        //We round down so that any uneven padding gets added to the end of the string, not the beginning, 
        //as specified in the instructions.
        let startPadding = Math.floor((finalLength - string.length) / 2);
        //Find the amount of padding to add to the end of the string by subtracting the string length 
        //and the starting padding length (calculated above) from the target length.
        let endPadding = finalLength - string.length - startPadding;
        //Generate the padded string by adding the amount of starting padding and 
        //ending padding calculated above to each side of the current string.
        let paddedString = ' '.repeat(startPadding) + string + ' '.repeat(endPadding);
        //Return the padded version of the string.
        return paddedString;
    },
    // The first object method we will implement is .has().
    //.has() takes two arguments: an object and a key
    has(object,key) {
        //Access the current value at the specified key in the object.
        //Check to see if the value at that key is undefined.
        //Return false if the value is undefined and true if not.
        //Within the method, create a variable called hasValue and set its value equal to 
        //the result of checking to see if the current value of object at key does not equal undefined.
       let hasValue = object[key] !== undefined ? true : false;
       //Return the value of hasValue from the method.
       return hasValue;
    },
    //Add a method to our _ object called invert.
    //Add one parameter to this method: object.
    invert(object) {
        //Within the method, create a variable called invertedObject and set its value equal to an empty object.
        let invertedObject = {};
        //Using a for ... in loop, iterate through each key in object.
        for (let key in object) {
            //Within the loop, create a variable called originalValue and set it equal to 
            //the value at the current key in object.
            let originalValue = object[key];
            //Still within the loop, set the value at originalValue on invertedObject to be the current key.
            invertedObject = {originalValue : key}
        }
        //Finally, outside of the loop, return the value of invertedObject from the method.
        return invertedObject;
    },
    //The final object method we will implement is .findKey().
    //Add a method to our _ object called findKey.
    //Add two parameters to this method: object and predicate. We will name our predicate function parameter 
    //predicate since this is the name used in the Lodash documentation.
    findKey(object,predicate) {
        //Within the method, use a for ... in loop to iterate through each key in object.
        for (let key in object) {
            //Within the loop, create a variable called value and set it equal to the value at the current key in object.
            let value = object[key];
            //Still within the loop, create another variable called predicateReturnValue and set it equal 
            //to the result of calling predicate with value.
            let predicateReturnValue = predicate(value);
            //Finally, still within the loop, use an if statement to check to see if predicateReturnValue is truthy. 
            //If it is, return the current key from the method.
            if (predicateReturnValue) {
                return key;
            }
        }
        //Outside of the loop, return undefined to address all cases where no truthy values were returned from predicate.
        undefined;
        return undefined;
    },
    //The first array method we will implement is .drop().
    //Add the .drop() method to the lodash object.
    drop(array,number) {
        //Check to see if the number of items to drop was set. If not, set the number equal to 1.
        if(!number) {
            number = 1;
        }
        //Create a new copy of the original array with the specified number of elements dropped from the beginning of the array. 
        //We will use the array .slice() method to accomplish this.
        let newArray = array.slice(number);
        //Return the modified copy of the array from the method.
        return newArray;
    },
    //Add a method to our _ object called dropWhile.
    //Add two parameters to this method: array and predicate.
    dropWhile(array,predicate) {
        //Within the method, create a new variable called dropNumber and set its value equal 
        //to the return value of a call to findIndex on array.
        //Pass an anonymous callback function to findIndex that takes two arguments: element and index.
        let dropNumber = array.findIndex((element,index) => {
            //Within the callback function, return the negated return value of predicate called with element, 
            //index, and array. We negate the value (use !) since we are looking to drop elements until 
            //the predicate returns a falsy value. However, .findIndex() is looking for the first truthy value. 
            //So, we make every truthy value falsy and vice versa to get the value we are looking for.
            return !predicate(element,index,array)
        });
        //After the entire dropNumber declaration, create a new variable called droppedArray and set its value to 
        //the return value of this.drop() called with dropNumber. 
        //We are using this since .drop() is a method on the _ object which is the current object we are working from, and therefore the current value of this.
        let droppedArray = this.drop(array,dropNumber);
        //Return droppedArray from the method.
        return droppedArray;
    },
    //Add a method to our _ object called chunk.
    //Add two parameters to this method: array and size.
    chunk(array,size) {
        //Within the method, write an if statement that checks to see if size is undefined.
        if (!size) {
            //Within the if statement block, set size equal to 1.
            size = 1;
        };
        //After the if statement, create a variable called arrayChunks and initialize it to an empty array.
        let arrayChunks = [];
        //Write a for loop that loops through array and has a counter that increments by size each turn of the loop.
        for (let i = 0; i < array.length; i = i + size) {
            //Within the for loop, create a variable called arrayChunk and set it equal to the chunk 
            //of the array going from the current loop index to the current loop index plus size. 
            //You an use .slice() to accomplish this.
            chunkedArray = array.slice(i, i+size);
            //Still within the for loop, add arrayChunk to the end of arrayChunks. You can use .push() to accomplish this.
            arrayChunks.push(chunkedArray);
        };
        //Finally, outside of the for loop, return arrayChunks from the method.
        return arrayChunks;
    }
};





// Do not write or modify code below this line.
module.exports = _;