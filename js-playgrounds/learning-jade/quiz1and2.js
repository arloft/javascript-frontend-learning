var someVar = 1;
var someObject = {
    someVar: 2,
    someMethod: function() {
        var someVar = 3;
        alert(this.someVar);
        setTimeout(function() {
            alert(this.SomeVar);
        }, 10);
    }
};
