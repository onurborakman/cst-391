"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Note = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Note = /*#__PURE__*/function () {
  //Constructor
  function Note(id, content, userId) {
    (0, _classCallCheck2["default"])(this, Note);
    (0, _defineProperty2["default"])(this, "id", -1);
    (0, _defineProperty2["default"])(this, "content", "");
    (0, _defineProperty2["default"])(this, "userId", -1);
    this.id = id;
    this.content = content;
    this.userId = userId;
  } //Getters


  (0, _createClass2["default"])(Note, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: //Setters
    function set(id) {
      this.id = id;
    }
  }, {
    key: "Content",
    get: function get() {
      return this.content;
    },
    set: function set(content) {
      this.content = content;
    }
  }, {
    key: "UserId",
    get: function get() {
      return this.userId;
    },
    set: function set(userId) {
      this.userId = userId;
    }
  }]);
  return Note;
}();

exports.Note = Note;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbHMvTm90ZS50cyJdLCJuYW1lcyI6WyJOb3RlIiwiaWQiLCJjb250ZW50IiwidXNlcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFBYUEsSTtBQUlUO0FBQ0EsZ0JBQ0lDLEVBREosRUFFSUMsT0FGSixFQUdJQyxNQUhKLEVBSUM7QUFBQTtBQUFBLGlEQVJvQixDQUFDLENBUXJCO0FBQUEsc0RBUHlCLEVBT3pCO0FBQUEscURBTndCLENBQUMsQ0FNekI7QUFDRyxTQUFLRixFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDSCxHLENBQ0Q7Ozs7O1NBQ0EsZUFBZTtBQUNYLGFBQU8sS0FBS0YsRUFBWjtBQUNILEs7U0FPRDtBQUNBLGlCQUFPQSxFQUFQLEVBQWlCO0FBQ2IsV0FBS0EsRUFBTCxHQUFVQSxFQUFWO0FBQ0g7OztTQVRELGVBQW9CO0FBQ2hCLGFBQU8sS0FBS0MsT0FBWjtBQUNILEs7U0FRRCxhQUFZQSxPQUFaLEVBQTJCO0FBQ3ZCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNIOzs7U0FURCxlQUFtQjtBQUNmLGFBQU8sS0FBS0MsTUFBWjtBQUNILEs7U0FRRCxhQUFXQSxNQUFYLEVBQXlCO0FBQ3JCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5vdGV7XHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgY29udGVudDogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgdXNlcklkOiBudW1iZXIgPSAtMTtcclxuICAgIC8vQ29uc3RydWN0b3JcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgY29udGVudDogc3RyaW5nLFxyXG4gICAgICAgIHVzZXJJZDogbnVtYmVyXHJcbiAgICApe1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xyXG4gICAgfVxyXG4gICAgLy9HZXR0ZXJzXHJcbiAgICBnZXQgSWQoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcbiAgICBnZXQgQ29udGVudCgpOnN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IFVzZXJJZCgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VySWQ7XHJcbiAgICB9XHJcbiAgICAvL1NldHRlcnNcclxuICAgIHNldCBJZChpZDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuICAgIHNldCBDb250ZW50KGNvbnRlbnQ6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgc2V0IFVzZXJJZCh1c2VySWQ6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcclxuICAgIH1cclxufSJdfQ==