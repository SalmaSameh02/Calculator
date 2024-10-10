let btn=document.querySelectorAll(".btn");


// Loop through each btn and add the event listener
btn.forEach(function(btn) {
    btn.addEventListener("click", function() {
        if (reset === 1) {
            clear();
            reset = 0;
            console.log("pressed");
        }
        document.getElementById("screen").innerHTML += btn.innerHTML;
        console.log(btn.innerHTML);
    });
});

const ops = document.querySelectorAll(".op");
ops.forEach(function(op) {
    op.addEventListener("click", function() {
        if (reset === 1) {
            clear();
            reset = 0;
            console.log("pressed");
        }
        document.getElementById("screen").innerHTML += op.innerHTML;
    });
});

function clear() {
    document.getElementById("screen").innerHTML = "";
}

var reset = 0;

document.getElementById("clear").addEventListener("click", clear);

document.getElementById("equal").addEventListener("click", function() {
    var result = eval(document.getElementById("screen").innerHTML);
    if (result === Infinity ||result=== undefined) {
        reset = 1;
        console.log("will reset");
    } else {
        reset = 0;
        console.log("will not reset");
    }
    document.getElementById("screen").innerHTML = result;
});;