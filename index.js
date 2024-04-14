// Q60
// CREATE A qiuck self setup profile for a user that can tell you the user name and age
var userinfo = (function () {
    var name = "Sami";
    var age = 23;
    return {
        displayinfo: function () {
            console.log("name: ".concat(name, " , age: ").concat(age));
        }
    };
})();
userinfo.displayinfo();
