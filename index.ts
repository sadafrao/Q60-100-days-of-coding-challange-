// Q60
// CREATE A qiuck self setup profile for a user that can tell you the user name and age
let userinfo = (function(){
    let name = "Sami";
    let age = 23;
    return {
        displayinfo : function(){
console.log(`name: ${name} , age: ${age}`)
        }

    };
})();
userinfo.displayinfo();