"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Family = /** @class */ (function () {
    function Family(n, a, e, b) {
        if (n === void 0) { n = ''; }
        if (a === void 0) { a = 0; }
        if (e === void 0) { e = ''; }
        if (b === void 0) { b = false; }
        this.name = n;
        this.age = a;
        this.email = e;
        this.bestfriend = b;
    }
    Family.prototype.about = function () {
        return "Family: name = " + this.name + ", age = " + this.age +
            ", email = " + this.email + ", bestfriend? = " + this.bestfriend;
    };
    return Family;
}());
exports.Family = Family;
