function promiseToClean() {
    var me = "promiseToClean";
    let promiseToCleanTheRoom = new Promise(function(resolve,reject) {
        let isClean = false;    // Promise will only work with true/false states

        if (isClean) {
            resolve( 'clean');
            document.getElementById("id_outcome").innerHTML = "CLEAN :)";
        }
        else {
            reject( 'dirty');
            document.getElementById("id_outcome").innerHTML = "dirty :(";
        }
    });
    var outcome;   // will not work if declared at top of promiseToClean
    promiseToCleanTheRoom.then(function(result){
        outcome='PROMISE RESOLVED';  // scope of this var local to this "then" clause
    console.log(outcome);
    document.getElementById("id_internal").innerHTML = outcome;
    }).catch(function(result) {
        outcome='CATCH got hit';   // scope of this var local to this "catch" clause
    console.log(outcome);          // @@uitzoeken: console.log alleen voor node.js zichtbaar?
    document.getElementById("id_internal").innerHTML = outcome;
    });
}
