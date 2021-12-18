"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var User = /*#__PURE__*/function () {
  //Constructor
  function User(id, username, firstname, lastname, email, password) {
    (0, _classCallCheck2["default"])(this, User);
    (0, _defineProperty2["default"])(this, "id", -1);
    (0, _defineProperty2["default"])(this, "username", "");
    (0, _defineProperty2["default"])(this, "firstname", "");
    (0, _defineProperty2["default"])(this, "lastname", "");
    (0, _defineProperty2["default"])(this, "email", "");
    (0, _defineProperty2["default"])(this, "password", "");
    this.id = id;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
  } //Getters


  (0, _createClass2["default"])(User, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: //Setters
    function set(id) {
      this.id = id;
    }
  }, {
    key: "Username",
    get: function get() {
      return this.username;
    },
    set: function set(username) {
      this.username = username;
    }
  }, {
    key: "Firstname",
    get: function get() {
      return this.firstname;
    },
    set: function set(firstname) {
      this.firstname = firstname;
    }
  }, {
    key: "Lastname",
    get: function get() {
      return this.lastname;
    },
    set: function set(lastname) {
      this.lastname = lastname;
    }
  }, {
    key: "Email",
    get: function get() {
      return this.email;
    },
    set: function set(email) {
      this.email = email;
    }
  }, {
    key: "Password",
    get: function get() {
      return this.password;
    },
    set: function set(password) {
      this.password = password;
    }
  }]);
  return User;
}();

exports.User = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbHMvVXNlci50cyJdLCJuYW1lcyI6WyJVc2VyIiwiaWQiLCJ1c2VybmFtZSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJwYXNzd29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBQWFBLEk7QUFPVDtBQUNBLGdCQUNJQyxFQURKLEVBRUlDLFFBRkosRUFHSUMsU0FISixFQUlJQyxRQUpKLEVBS0lDLEtBTEosRUFNSUMsUUFOSixFQU9DO0FBQUE7QUFBQSxpREFkb0IsQ0FBQyxDQWNyQjtBQUFBLHVEQWIwQixFQWExQjtBQUFBLHdEQVoyQixFQVkzQjtBQUFBLHVEQVgwQixFQVcxQjtBQUFBLG9EQVZ1QixFQVV2QjtBQUFBLHVEQVQwQixFQVMxQjtBQUNHLFNBQUtMLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0gsRyxDQUNEOzs7OztTQUNBLGVBQWU7QUFDWCxhQUFPLEtBQUtMLEVBQVo7QUFDSCxLO1NBZ0JEO0FBQ0EsaUJBQU9BLEVBQVAsRUFBaUI7QUFDYixXQUFLQSxFQUFMLEdBQVVBLEVBQVY7QUFDSDs7O1NBbEJELGVBQXFCO0FBQ2pCLGFBQU8sS0FBS0MsUUFBWjtBQUNILEs7U0FpQkQsYUFBYUEsUUFBYixFQUE2QjtBQUN6QixXQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNIOzs7U0FsQkQsZUFBc0I7QUFDbEIsYUFBTyxLQUFLQyxTQUFaO0FBQ0gsSztTQWlCRCxhQUFjQSxTQUFkLEVBQStCO0FBQzNCLFdBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0g7OztTQWxCRCxlQUFxQjtBQUNqQixhQUFPLEtBQUtDLFFBQVo7QUFDSCxLO1NBaUJELGFBQWFBLFFBQWIsRUFBNkI7QUFDekIsV0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDs7O1NBbEJELGVBQWtCO0FBQ2QsYUFBTyxLQUFLQyxLQUFaO0FBQ0gsSztTQWlCRCxhQUFVQSxLQUFWLEVBQXVCO0FBQ25CLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNIOzs7U0FsQkQsZUFBcUI7QUFDakIsYUFBTyxLQUFLQyxRQUFaO0FBQ0gsSztTQWlCRCxhQUFhQSxRQUFiLEVBQTZCO0FBQ3pCLFdBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVXNlcntcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSB1c2VybmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgZmlyc3RuYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBsYXN0bmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgZW1haWw6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHBhc3N3b3JkOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLy9Db25zdHJ1Y3RvclxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGZpcnN0bmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGxhc3RuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgZW1haWw6IHN0cmluZyxcclxuICAgICAgICBwYXNzd29yZDogc3RyaW5nXHJcbiAgICApe1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICAgICAgdGhpcy5maXJzdG5hbWUgPSBmaXJzdG5hbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0bmFtZSA9IGxhc3RuYW1lO1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICB9XHJcbiAgICAvL0dldHRlcnNcclxuICAgIGdldCBJZCgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuICAgIGdldCBVc2VybmFtZSgpOnN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VybmFtZTtcclxuICAgIH1cclxuICAgIGdldCBGaXJzdG5hbWUoKTpzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3RuYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0IExhc3RuYW1lKCk6c3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RuYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0IEVtYWlsKCk6c3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVtYWlsO1xyXG4gICAgfVxyXG4gICAgZ2V0IFBhc3N3b3JkKCk6c3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhc3N3b3JkO1xyXG4gICAgfVxyXG4gICAgLy9TZXR0ZXJzXHJcbiAgICBzZXQgSWQoaWQ6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgVXNlcm5hbWUodXNlcm5hbWU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICB9XHJcbiAgICBzZXQgRmlyc3RuYW1lKGZpcnN0bmFtZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuZmlyc3RuYW1lID0gZmlyc3RuYW1lO1xyXG4gICAgfVxyXG4gICAgc2V0IExhc3RuYW1lKGxhc3RuYW1lOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5sYXN0bmFtZSA9IGxhc3RuYW1lO1xyXG4gICAgfVxyXG4gICAgc2V0IEVtYWlsKGVtYWlsOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xyXG4gICAgfVxyXG4gICAgc2V0IFBhc3N3b3JkKHBhc3N3b3JkOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgfVxyXG59Il19