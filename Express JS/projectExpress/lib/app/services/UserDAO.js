"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDAO = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var mysql = _interopRequireWildcard(require("mysql"));

var util = _interopRequireWildcard(require("util"));

var _User = require("../models/User");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var UserDAO = /*#__PURE__*/function () {
  //Constructor
  function UserDAO(host, port, username, password) {
    (0, _classCallCheck2["default"])(this, UserDAO);
    (0, _defineProperty2["default"])(this, "host", "");
    (0, _defineProperty2["default"])(this, "port", 3306);
    (0, _defineProperty2["default"])(this, "username", "");
    (0, _defineProperty2["default"])(this, "password", "");
    (0, _defineProperty2["default"])(this, "schema", "milestoneproject");
    (0, _defineProperty2["default"])(this, "pool", this.initDbConnection());
    // Set all class properties
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
    this.pool = this.initDbConnection();
  } //CRUD: Method to READ all users


  (0, _createClass2["default"])(UserDAO, [{
    key: "findAllUsers",
    value: function findAllUsers(callback) {
      var users = [];
      this.pool.getConnection(function (err, connection) {
        //Throwing an error if there are any
        if (err) throw err; //Executing the query

        connection.query('SELECT * FROM users', function (err, rows, fields) {
          connection.release(); //Throwing an error if there are any

          if (err) throw err; //Entering the results to the array

          for (var i = 0; i < rows.length; i++) {
            users.push(new _User.User(rows[i].id, rows[i].username, rows[i].firstname, rows[i].lastname, rows[i].email, rows[i].password));
          } //Returning the result


          callback(users);
        });
      });
    } //CRUD: Method to READ one user

  }, {
    key: "findUser",
    value: function findUser(id, callback) {
      var user = [];
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, connection) {
          var result, i;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  connection.release(); //Throwing an error if there are any

                  if (!err) {
                    _context.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query); //Executing the query

                  _context.next = 6;
                  return connection.query('SELECT * FROM users WHERE id=?', [id]);

                case 6:
                  result = _context.sent;

                  //Entering the results to the array
                  for (i = 0; i < result.length; i++) {
                    user.push(new _User.User(id, result[i].username, result[i].firstname, result[i].lastname, result[i].email, result[i].password));
                  } //Returning the result


                  callback(user);

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    } //CRUD: Method to CREATE user

  }, {
    key: "createUser",
    value: function createUser(user, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(err, connection) {
          var result, resultId;
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  connection.release(); //Throwing an error if there are any

                  if (!err) {
                    _context2.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query); //Executing the query

                  _context2.next = 6;
                  return connection.query('INSERT INTO users (username, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)', [user.Username, user.Firstname, user.Lastname, user.Email, user.Password]);

                case 6:
                  result = _context2.sent;

                  //Returning the result
                  if (result.affectedRows != 1) {
                    callback(-1);
                  } else {
                    resultId = result.insertId;
                    callback(resultId);
                  }

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    } //CRUD: Method to UPDATE user

  }, {
    key: "updateUser",
    value: function updateUser(id, username, email, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(err, connection) {
          var result;
          return _regenerator["default"].wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  connection.release(); //Throwing an error if there are any

                  if (!err) {
                    _context3.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query); //Executing the query

                  _context3.next = 6;
                  return connection.query('UPDATE users SET username=?, email=? WHERE id=?', [username, email, id]);

                case 6:
                  result = _context3.sent;

                  //Returning the result
                  if (result.changedRows != 0) {
                    callback(id);
                  } else {
                    callback(-1);
                  }

                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    } //CRUD: Method to DELETE user

  }, {
    key: "deleteUser",
    value: function deleteUser(id, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(err, connection) {
          var result;
          return _regenerator["default"].wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  connection.release(); //Throwing an error if there are any

                  if (!err) {
                    _context4.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query); //Executing the query

                  _context4.next = 6;
                  return connection.query('DELETE FROM users WHERE id=?', [id]);

                case 6:
                  result = _context4.sent;

                  //Returning the result
                  if (result.affectedRows != 0) {
                    callback(id);
                  } else {
                    callback(-1);
                  }

                case 8:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
    } //Method to initialize the DB Connection

  }, {
    key: "initDbConnection",
    value: function initDbConnection() {
      return mysql.createPool({
        host: this.host,
        port: this.port,
        user: this.username,
        password: this.password,
        database: this.schema,
        connectionLimit: 10
      });
    }
  }]);
  return UserDAO;
}();

exports.UserDAO = UserDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9zZXJ2aWNlcy9Vc2VyREFPLnRzIl0sIm5hbWVzIjpbIlVzZXJEQU8iLCJob3N0IiwicG9ydCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJpbml0RGJDb25uZWN0aW9uIiwicG9vbCIsImNhbGxiYWNrIiwidXNlcnMiLCJnZXRDb25uZWN0aW9uIiwiZXJyIiwiY29ubmVjdGlvbiIsInF1ZXJ5Iiwicm93cyIsImZpZWxkcyIsInJlbGVhc2UiLCJpIiwibGVuZ3RoIiwicHVzaCIsIlVzZXIiLCJpZCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJ1c2VyIiwidXRpbCIsInByb21pc2lmeSIsInJlc3VsdCIsIlVzZXJuYW1lIiwiRmlyc3RuYW1lIiwiTGFzdG5hbWUiLCJFbWFpbCIsIlBhc3N3b3JkIiwiYWZmZWN0ZWRSb3dzIiwicmVzdWx0SWQiLCJpbnNlcnRJZCIsImNoYW5nZWRSb3dzIiwibXlzcWwiLCJjcmVhdGVQb29sIiwiZGF0YWJhc2UiLCJzY2hlbWEiLCJjb25uZWN0aW9uTGltaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7SUFFYUEsTztBQU9UO0FBQ0EsbUJBQVlDLElBQVosRUFBeUJDLElBQXpCLEVBQXNDQyxRQUF0QyxFQUF1REMsUUFBdkQsRUFDQTtBQUFBO0FBQUEsbURBUnNCLEVBUXRCO0FBQUEsbURBUHNCLElBT3RCO0FBQUEsdURBTjBCLEVBTTFCO0FBQUEsdURBTDBCLEVBSzFCO0FBQUEscURBSndCLGtCQUl4QjtBQUFBLG1EQUhlLEtBQUtDLGdCQUFMLEVBR2Y7QUFDSTtBQUNBLFNBQUtKLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLRSxJQUFMLEdBQVksS0FBS0QsZ0JBQUwsRUFBWjtB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QjtBQUFBLHlCQU1ERCxVQUFVLENBQUNDLEtBQVgsQ0FBaUIsOEJBQWpCLEVBQWlELENBQUNRLEVBQUQsQ0FBakQsQ0FOQzs7QUFBQTtBQU1oQk8sa0JBQUFBLE1BTmdCOztBQU9wQjtBQUNBLHNCQUFHQSxNQUFNLENBQUNNLFlBQVAsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDeEIxQixvQkFBQUEsUUFBUSxDQUFDYSxFQUFELENBQVI7QUFDSCxtQkFGRCxNQUVLO0FBQ0RiLG9CQUFBQSxRQUFRLENBQUMsQ0FBQyxDQUFGLENBQVI7QUFDSDs7QUFabUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjSCxLLENBQ0Q7Ozs7V0FDQSw0QkFBOEI7QUFDMUIsYUFBTzhCLEtBQUssQ0FBQ0MsVUFBTixDQUFpQjtBQUFDckMsUUFBQUEsSUFBSSxFQUFFLEtBQUtBLElBQVo7QUFBa0JDLFFBQUFBLElBQUksRUFBRSxLQUFLQSxJQUE3QjtBQUFtQ3NCLFFBQUFBLElBQUksRUFBRSxLQUFLckIsUUFBOUM7QUFBd0RDLFFBQUFBLFFBQVEsRUFBRSxLQUFLQSxRQUF2RTtBQUFpRm1DLFFBQUFBLFFBQVEsRUFBRSxLQUFLQyxNQUFoRztBQUF3R0MsUUFBQUEsZUFBZSxFQUFFO0FBQXpILE9BQWpCLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG15c3FsIGZyb20gXCJteXNxbFwiO1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gXCJ1dGlsXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL21vZGVscy9Vc2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlckRBT3tcclxuICAgIHByaXZhdGUgaG9zdDpzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBwb3J0Om51bWJlciA9IDMzMDY7XHJcbiAgICBwcml2YXRlIHVzZXJuYW1lOnN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHBhc3N3b3JkOnN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHNjaGVtYTpzdHJpbmcgPSBcIm1pbGVzdG9uZXByb2plY3RcIjtcclxuICAgIHByaXZhdGUgcG9vbCA9IHRoaXMuaW5pdERiQ29ubmVjdGlvbigpO1xyXG4gICAgLy9Db25zdHJ1Y3RvclxyXG4gICAgY29uc3RydWN0b3IoaG9zdDpzdHJpbmcsIHBvcnQ6bnVtYmVyLCB1c2VybmFtZTpzdHJpbmcsIHBhc3N3b3JkOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICAvLyBTZXQgYWxsIGNsYXNzIHByb3BlcnRpZXNcclxuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xyXG4gICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuICAgICAgICB0aGlzLnBvb2wgPSB0aGlzLmluaXREYkNvbm5lY3Rpb24oKTtcclxuICAgIH1cclxuICAgIC8vQ1JVRDogTWV0aG9kIHRvIFJFQUQgYWxsIHVzZXJzXHJcbiAgICBwdWJsaWMgZmluZEFsbFVzZXJzKGNhbGxiYWNrOiBhbnkpe1xyXG4gICAgICAgIGxldCB1c2VyczpVc2VyW10gPSBbXTtcclxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihmdW5jdGlvbihlcnI6YW55LCBjb25uZWN0aW9uOmFueSl7XHJcbiAgICAgICAgICAgICAgICAvL1Rocm93aW5nIGFuIGVycm9yIGlmIHRoZXJlIGFyZSBhbnlcclxuICAgICAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgICAgLy9FeGVjdXRpbmcgdGhlIHF1ZXJ5XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5KFxyXG4gICAgICAgICAgICAgICAgICAgICdTRUxFQ1QgKiBGUk9NIHVzZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihlcnI6YW55LCByb3dzOmFueSwgZmllbGRzOmFueSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1Rocm93aW5nIGFuIGVycm9yIGlmIHRoZXJlIGFyZSBhbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRW50ZXJpbmcgdGhlIHJlc3VsdHMgdG8gdGhlIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFVzZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NbaV0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NbaV0udXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NbaV0uZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzW2ldLmxhc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzW2ldLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzW2ldLnBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vUmV0dXJuaW5nIHRoZSByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodXNlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL0NSVUQ6IE1ldGhvZCB0byBSRUFEIG9uZSB1c2VyXHJcbiAgICBwdWJsaWMgZmluZFVzZXIoaWQ6bnVtYmVyLCBjYWxsYmFjazogYW55KXtcclxuICAgICAgICBsZXQgdXNlcjpVc2VyW10gPSBbXTtcclxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6YW55LCBjb25uZWN0aW9uOmFueSl7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICAvL1Rocm93aW5nIGFuIGVycm9yIGlmIHRoZXJlIGFyZSBhbnlcclxuICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcclxuICAgICAgICAgICAgLy9FeGVjdXRpbmcgdGhlIHF1ZXJ5XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIGlkPT8nLCBbaWRdKTtcclxuICAgICAgICAgICAgLy9FbnRlcmluZyB0aGUgcmVzdWx0cyB0byB0aGUgYXJyYXlcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnB1c2gobmV3IFVzZXIoaWQsIHJlc3VsdFtpXS51c2VybmFtZSwgcmVzdWx0W2ldLmZpcnN0bmFtZSwgcmVzdWx0W2ldLmxhc3RuYW1lLCByZXN1bHRbaV0uZW1haWwsIHJlc3VsdFtpXS5wYXNzd29yZCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vUmV0dXJuaW5nIHRoZSByZXN1bHRcclxuICAgICAgICAgICAgY2FsbGJhY2sodXNlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL0NSVUQ6IE1ldGhvZCB0byBDUkVBVEUgdXNlclxyXG4gICAgcHVibGljIGNyZWF0ZVVzZXIodXNlcjpVc2VyLCBjYWxsYmFjazphbnkpe1xyXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uKGVycjphbnksIGNvbm5lY3Rpb246YW55KXtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgIC8vVGhyb3dpbmcgYW4gZXJyb3IgaWYgdGhlcmUgYXJlIGFueVxyXG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVycjtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xyXG4gICAgICAgICAgICAvL0V4ZWN1dGluZyB0aGUgcXVlcnlcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ0lOU0VSVCBJTlRPIHVzZXJzICh1c2VybmFtZSwgZmlyc3RuYW1lLCBsYXN0bmFtZSwgZW1haWwsIHBhc3N3b3JkKSBWQUxVRVMgKD8sID8sID8sID8sID8pJywgW3VzZXIuVXNlcm5hbWUsIHVzZXIuRmlyc3RuYW1lLCB1c2VyLkxhc3RuYW1lLCB1c2VyLkVtYWlsLCB1c2VyLlBhc3N3b3JkXSk7XHJcbiAgICAgICAgICAgIC8vUmV0dXJuaW5nIHRoZSByZXN1bHRcclxuICAgICAgICAgICAgaWYocmVzdWx0LmFmZmVjdGVkUm93cyAhPSAxKXtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKC0xKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0SWQgPSByZXN1bHQuaW5zZXJ0SWQ7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXN1bHRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy9DUlVEOiBNZXRob2QgdG8gVVBEQVRFIHVzZXJcclxuICAgIHB1YmxpYyB1cGRhdGVVc2VyKGlkOm51bWJlciwgdXNlcm5hbWU6c3RyaW5nLCBlbWFpbDpzdHJpbmcsIGNhbGxiYWNrOmFueSl7XHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpe1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgLy9UaHJvd2luZyBhbiBlcnJvciBpZiB0aGVyZSBhcmUgYW55XHJcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcbiAgICAgICAgICAgIC8vRXhlY3V0aW5nIHRoZSBxdWVyeVxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnVVBEQVRFIHVzZXJzIFNFVCB1c2VybmFtZT0/LCBlbWFpbD0/IFdIRVJFIGlkPT8nLCBbdXNlcm5hbWUsIGVtYWlsLCBpZF0pO1xyXG4gICAgICAgICAgICAvL1JldHVybmluZyB0aGUgcmVzdWx0XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5jaGFuZ2VkUm93cyAhPSAwKXtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlkKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygtMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy9DUlVEOiBNZXRob2QgdG8gREVMRVRFIHVzZXJcclxuICAgIHB1YmxpYyBkZWxldGVVc2VyKGlkOm51bWJlciwgY2FsbGJhY2s6YW55KXtcclxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6IGFueSwgY29ubmVjdGlvbjphbnkpe1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgLy9UaHJvd2luZyBhbiBlcnJvciBpZiB0aGVyZSBhcmUgYW55XHJcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcbiAgICAgICAgICAgIC8vRXhlY3V0aW5nIHRoZSBxdWVyeVxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnREVMRVRFIEZST00gdXNlcnMgV0hFUkUgaWQ9PycsIFtpZF0pO1xyXG4gICAgICAgICAgICAvL1JldHVybmluZyB0aGUgcmVzdWx0XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5hZmZlY3RlZFJvd3MgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpZCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL01ldGhvZCB0byBpbml0aWFsaXplIHRoZSBEQiBDb25uZWN0aW9uXHJcbiAgICBwcml2YXRlIGluaXREYkNvbm5lY3Rpb24oKTphbnl7XHJcbiAgICAgICAgcmV0dXJuIG15c3FsLmNyZWF0ZVBvb2woe2hvc3Q6IHRoaXMuaG9zdCwgcG9ydDogdGhpcy5wb3J0LCB1c2VyOiB0aGlzLnVzZXJuYW1lLCBwYXNzd29yZDogdGhpcy5wYXNzd29yZCwgZGF0YWJhc2U6IHRoaXMuc2NoZW1hLCBjb25uZWN0aW9uTGltaXQ6IDEwfSk7XHJcbiAgICB9XHJcbn0iXX0=