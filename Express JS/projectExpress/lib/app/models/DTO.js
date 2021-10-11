"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DTO = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var DTO = /*#__PURE__*/function () {
  //Constructor
  function DTO(resCode, resMessage, data) {
    (0, _classCallCheck2["default"])(this, DTO);
    (0, _defineProperty2["default"])(this, "resCode", -1);
    (0, _defineProperty2["default"])(this, "resMessage", "");
    (0, _defineProperty2["default"])(this, "data", void 0);
    this.resCode = resCode;
    this.resMessage = resMessage;
    this.data = data;
  } //Getters


  (0, _createClass2["default"])(DTO, [{
    key: "ResCode",
    get: function get() {
      return this.resCode;
    },
    set: //Setters
    function set(resCode) {
      this.resCode = resCode;
    }
  }, {
    key: "ResMessage",
    get: function get() {
      return this.resMessage;
    },
    set: function set(resMessage) {
      this.resMessage = resMessage;
    }
  }, {
    key: "Data",
    get: function get() {
      return this.data;
    },
    set: function set(data) {
      this.data = data;
    }
  }]);
  return DTO;
}();

exports.DTO = DTO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbHMvRFRPLnRzIl0sIm5hbWVzIjpbIkRUTyIsInJlc0NvZGUiLCJyZXNNZXNzYWdlIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBQWFBLEc7QUFJVDtBQUNBLGVBQ0lDLE9BREosRUFFSUMsVUFGSixFQUdJQyxJQUhKLEVBSUM7QUFBQTtBQUFBLHNEQVJ5QixDQUFDLENBUTFCO0FBQUEseURBUDRCLEVBTzVCO0FBQUE7QUFDRyxTQUFLRixPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNILEcsQ0FDRDs7Ozs7U0FDQSxlQUFvQjtBQUNoQixhQUFPLEtBQUtGLE9BQVo7QUFDSCxLO1NBT0Q7QUFDQSxpQkFBWUEsT0FBWixFQUEyQjtBQUN2QixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDSDs7O1NBVEQsZUFBdUI7QUFDbkIsYUFBTyxLQUFLQyxVQUFaO0FBQ0gsSztTQVFELGFBQWVBLFVBQWYsRUFBaUM7QUFDN0IsV0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDSDs7O1NBVEQsZUFBYztBQUNWLGFBQU8sS0FBS0MsSUFBWjtBQUNILEs7U0FRRCxhQUFTQSxJQUFULEVBQWtCO0FBQ2QsV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRFRPe1xyXG4gICAgcHJpdmF0ZSByZXNDb2RlOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgcmVzTWVzc2FnZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgZGF0YTogYW55O1xyXG4gICAgLy9Db25zdHJ1Y3RvclxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcmVzQ29kZTogbnVtYmVyLFxyXG4gICAgICAgIHJlc01lc3NhZ2U6IHN0cmluZyxcclxuICAgICAgICBkYXRhOiBhbnlcclxuICAgICl7XHJcbiAgICAgICAgdGhpcy5yZXNDb2RlID0gcmVzQ29kZTtcclxuICAgICAgICB0aGlzLnJlc01lc3NhZ2UgPSByZXNNZXNzYWdlO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICAvL0dldHRlcnNcclxuICAgIGdldCBSZXNDb2RlKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc0NvZGU7XHJcbiAgICB9XHJcbiAgICBnZXQgUmVzTWVzc2FnZSgpOnN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXNNZXNzYWdlO1xyXG4gICAgfVxyXG4gICAgZ2V0IERhdGEoKTphbnl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgIH1cclxuICAgIC8vU2V0dGVyc1xyXG4gICAgc2V0IFJlc0NvZGUocmVzQ29kZTpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMucmVzQ29kZSA9IHJlc0NvZGU7XHJcbiAgICB9XHJcbiAgICBzZXQgUmVzTWVzc2FnZShyZXNNZXNzYWdlOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5yZXNNZXNzYWdlID0gcmVzTWVzc2FnZTtcclxuICAgIH1cclxuICAgIHNldCBEYXRhKGRhdGE6YW55KXtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG59Il19