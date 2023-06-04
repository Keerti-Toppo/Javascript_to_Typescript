var Name = /** @class */ (function () {
    function Name(fname, lname) {
        this.first_name = fname;
        this.last_name = lname;
    }
    Name.prototype.getName = function () {
        var fullname = this.first_name + this.last_name;
        return fullname;
    };
    return Name;
}());
var author_name;
//# sourceMappingURL=serve.js.map