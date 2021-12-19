/* code.js by David Garcia, 2021 */

// variable declarations
let i = 0;
let x = 0;

// method() for starting the timer
function BnStart() {
    // x is the flag to know button has been turned on
    // start when x is 0, has been stopped or reset already
    if (x === 0) {
        x += 1;
        //setInterval() method calls begin every 100 milliseconds
        z = setInterval(begin, 100);
        function begin() {
            // increments i every 100m milliseconds
            //disables start button & enables stop button
            document.getElementById("timeElapsed").innerHTML = i;
            document.getElementById("StartButton").disabled = true;
            document.getElementById("StopButton").disabled = false;
            i++;
        }
    }
};

// method for stopping the timer
function BnStop() {
    // x is the flag, so when its 1 then it means timer has already started.
    if (x === 1) {
        x -= 1;
        // clearInterval() method cancels begin() method
        clearInterval(z);
        //enables start button and disables stop button
        document.getElementById("StartButton").disabled = false;
        document.getElementById("StopButton").disabled = true;
    }
};

//method for resetting the timer
function BnReset() {
    clearInterval(z);
    //clears out vars
    i = 0;
    x = 0;
    // sets value back to zero and enables start & stop buttons
    document.getElementById("timeElapsed").innerHTML = 0;
    document.getElementById("StartButton").disabled = false;
    document.getElementById("StopButton").disabled = false;
};