var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FirstUser = /** @class */ (function () {
    function FirstUser() {
        this.numeroCarica = 0;
        this.numeroChiamate = 0;
    }
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.numeroCarica += unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        var costoChiamata = 0.20 * minutiDurata;
        if (this.numeroCarica >= costoChiamata) {
            this.numeroCarica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("You don't have enough balance to make the call.");
        }
    };
    FirstUser.prototype.numero404 = function () {
        return this.numeroCarica;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
var SecondUser = /** @class */ (function (_super) {
    __extends(SecondUser, _super);
    function SecondUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SecondUser;
}(FirstUser));
var ThirdUser = /** @class */ (function (_super) {
    __extends(ThirdUser, _super);
    function ThirdUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ThirdUser;
}(FirstUser));
var user1 = new FirstUser();
user1.ricarica(50);
user1.chiamata(2.5);
user1.chiamata(10);
user1.chiamata(5);
var user2 = new SecondUser();
user2.ricarica(20);
user2.chiamata(3);
user2.chiamata(25);
user2.chiamata(1);
var user3 = new ThirdUser();
user3.ricarica(10);
user3.chiamata(1);
user3.chiamata(0.3);
user3.chiamata(7);
displayUserInfo(user1);
displayUserInfo(user2);
displayUserInfo(user3);
function displayUserInfo(user) {
    console.log("User balance: " + user.numero404());
    console.log("Number of calls made: " + user.getNumeroChiamate());
    user.azzeraChiamate();
    console.log("After calls: " + user.getNumeroChiamate());
    console.log();
}
