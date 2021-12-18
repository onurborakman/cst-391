"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoteDAO = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var mysql = _interopRequireWildcard(require("mysql"));

var util = _interopRequireWildcard(require("util"));

var _Note = require("../models/Note");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var NoteDAO = /*#__PURE__*/function () {
  //Constructor
  function NoteDAO(host, port, username, password) {
    (0, _classCallCheck2["default"])(this, NoteDAO);
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
  } //CRUD: Method to READ all notes


  (0, _createClass2["default"])(NoteDAO, [{
    key: "findAllNotes",
    value: function findAllNotes(callback) {
      var notes = [];
      this.pool.getConnection(function (err, connection) {
        //Throwing an error if there are any
        if (err) throw err; //Executing the query

        connection.query('SELECT * FROM notes', function (err, rows, fields) {
          connection.release();
          if (err) throw err; //Pushing the result to an array

          for (var i = 0; i < rows.length; i++) {
            notes.push(new _Note.Note(rows[i].id, rows[i].content, rows[i].user_id));
          } //Returning the array


          callback(notes);
        });
      });
    } //CRUD: Method to READ one note

  }, {
    key: "findNote",
    value: function findNote(id, callback) {
      var note = [];
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
                  return connection.query('SELECT * FROM notes WHERE id=?', [id]);

                case 6:
                  result = _context.sent;

                  //Entering the results to the array
                  for (i = 0; i < result.length; i++) {
                    note.push(new _Note.Note(id, result[i].content, result[i].user_id));
                  } //Returning the array


                  callback(note);

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
    } //CRUD: Method to CREATE note

  }, {
    key: "createNote",
    value: function createNote(content, userId, callback) {
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
                  return connection.query('INSERT INTO notes (content, user_id) VALUES (?, ?)', [content, userId]);

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
    } //CRUD: Method to UPDATE note

  }, {
    key: "updateNote",
    value: function updateNote(id, content, callback) {
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
                  return connection.query('UPDATE notes SET content=? WHERE id=?', [content, id]);

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
    } //CRUD: Method to DELETE note

  }, {
    key: "deleteNote",
    value: function deleteNote(id, callback) {
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
                  return connection.query('DELETE FROM notes WHERE id=?', [id]);

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
  return NoteDAO;
}();

exports.NoteDAO = NoteDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9zZXJ2aWNlcy9Ob3RlREFPLnRzIl0sIm5hbWVzIjpbIk5vdGVEQU8iLCJob3N0IiwicG9ydCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJpbml0RGJDb25uZWN0aW9uIiwicG9vbCIsImNhbGxiYWNrIiwibm90ZXMiLCJnZXRDb25uZWN0aW9uIiwiZXJyIiwiY29ubmVjdGlvbiIsInF1ZXJ5Iiwicm93cyIsImZpZWxkcyIsInJlbGVhc2UiLCJpIiwibGVuZ3RoIiwicHVzaCIsIk5vdGUiLCJpZCIsImNvbnRlbnQiLCJ1c2VyX2lkIiwibm90ZSIsInV0aWwiLCJwcm9taXNpZnkiLCJyZXN1bHQiLCJ1c2VySWQiLCJhZmZlY3RlZFJvd3MiLCJyZXN1bHRJZCIsImluc2VydElkIiwiY2hhbmdlZFJvd3MiLCJteXNxbCIsImNyZWF0ZVBvb2wiLCJ1c2VyIiwiZGF0YWJhc2UiLCJzY2hlbWEiLCJjb25uZWN0aW9uTGltaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7SUFFYUEsTztBQU9UO0FBQ0EsbUJBQVlDLElBQVosRUFBeUJDLElBQXpCLEVBQXNDQyxRQUF0QyxFQUF1REMsUUFBdkQsRUFDQTtBQUFBO0FBQUEsbURBUnNCLEVBUXRCO0FBQUEsbURBUHNCLElBT3RCO0FBQUEsdURBTjBCLEVBTTFCO0FBQUEsdURBTDBCLEVBSzFCO0FBQUEscURBSndCLGtCQUl4QjtBQUFBLG1EQUhlLEtBQUtDLGdCQUFMLEVBR2Y7QUFDSTtBQUNBLFNBQUtKLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLRSxJQUFMLEdBQVksS0FBS0QsZ0JBQUwsRUFBWjtBQUNILEcsQ0FDRDs7Ozs7V0FDQSxzQkFBb0JFLFFBQXBCLEVBQWtDO0FBQzlCLFVB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QWtCQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0EsSUFBN0I7QUFBbUNnQyxRQUFBQSxJQUFJLEVBQUUsS0FBSy9CLFFBQTlDO0FBQXdEQyxRQUFBQSxRQUFRLEVBQUUsS0FBS0EsUUFBdkU7QUFBaUYrQixRQUFBQSxRQUFRLEVBQUUsS0FBS0MsTUFBaEc7QUFBd0dDLFFBQUFBLGVBQWUsRUFBRTtBQUF6SCxPQUFqQixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBteXNxbCBmcm9tIFwibXlzcWxcIjtcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwidXRpbFwiO1xyXG5pbXBvcnQge05vdGV9IGZyb20gXCIuLi9tb2RlbHMvTm90ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGVEQU97XHJcbiAgICBwcml2YXRlIGhvc3Q6c3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgcG9ydDpudW1iZXIgPSAzMzA2O1xyXG4gICAgcHJpdmF0ZSB1c2VybmFtZTpzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBwYXNzd29yZDpzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBzY2hlbWE6c3RyaW5nID0gXCJtaWxlc3RvbmVwcm9qZWN0XCI7XHJcbiAgICBwcml2YXRlIHBvb2wgPSB0aGlzLmluaXREYkNvbm5lY3Rpb24oKTtcclxuICAgIC8vQ29uc3RydWN0b3JcclxuICAgIGNvbnN0cnVjdG9yKGhvc3Q6c3RyaW5nLCBwb3J0Om51bWJlciwgdXNlcm5hbWU6c3RyaW5nLCBwYXNzd29yZDpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gU2V0IGFsbCBjbGFzcyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcclxuICAgICAgICB0aGlzLnBvcnQgPSBwb3J0O1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5wb29sID0gdGhpcy5pbml0RGJDb25uZWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICAvL0NSVUQ6IE1ldGhvZCB0byBSRUFEIGFsbCBub3Rlc1xyXG4gICAgcHVibGljIGZpbmRBbGxOb3RlcyhjYWxsYmFjazogYW55KXtcclxuICAgICAgICBsZXQgbm90ZXM6Tm90ZVtdID0gW107XHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpe1xyXG4gICAgICAgICAgICAvL1Rocm93aW5nIGFuIGVycm9yIGlmIHRoZXJlIGFyZSBhbnlcclxuICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIC8vRXhlY3V0aW5nIHRoZSBxdWVyeVxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIG5vdGVzJywgZnVuY3Rpb24oZXJyOmFueSwgcm93czphbnksIGZpZWxkczphbnkpe1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBpZihlcnIpIHRocm93IGVycjtcclxuICAgICAgICAgICAgICAgIC8vUHVzaGluZyB0aGUgcmVzdWx0IHRvIGFuIGFycmF5XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXMucHVzaChuZXcgTm90ZShyb3dzW2ldLmlkLCByb3dzW2ldLmNvbnRlbnQsIHJvd3NbaV0udXNlcl9pZCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9SZXR1cm5pbmcgdGhlIGFycmF5XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhub3Rlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy9DUlVEOiBNZXRob2QgdG8gUkVBRCBvbmUgbm90ZVxyXG4gICAgcHVibGljIGZpbmROb3RlKGlkOm51bWJlciwgY2FsbGJhY2s6IGFueSl7XHJcbiAgICAgICAgbGV0IG5vdGU6Tm90ZVtdID0gW107XHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpe1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgLy9UaHJvd2luZyBhbiBlcnJvciBpZiB0aGVyZSBhcmUgYW55XHJcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcbiAgICAgICAgICAgIC8vRXhlY3V0aW5nIHRoZSBxdWVyeVxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBub3RlcyBXSEVSRSBpZD0/JywgW2lkXSk7XHJcbiAgICAgICAgICAgIC8vRW50ZXJpbmcgdGhlIHJlc3VsdHMgdG8gdGhlIGFycmF5XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgbm90ZS5wdXNoKG5ldyBOb3RlKGlkLCByZXN1bHRbaV0uY29udGVudCwgcmVzdWx0W2ldLnVzZXJfaWQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL1JldHVybmluZyB0aGUgYXJyYXlcclxuICAgICAgICAgICAgY2FsbGJhY2sobm90ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL0NSVUQ6IE1ldGhvZCB0byBDUkVBVEUgbm90ZVxyXG4gICAgcHVibGljIGNyZWF0ZU5vdGUoY29udGVudDpzdHJpbmcsIHVzZXJJZDpudW1iZXIsIGNhbGxiYWNrOmFueSl7XHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpe1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgLy9UaHJvd2luZyBhbiBlcnJvciBpZiB0aGVyZSBhcmUgYW55XHJcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcbiAgICAgICAgICAgIC8vRXhlY3V0aW5nIHRoZSBxdWVyeVxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnSU5TRVJUIElOVE8gbm90ZXMgKGNvbnRlbnQsIHVzZXJfaWQpIFZBTFVFUyAoPywgPyknLCBbY29udGVudCwgdXNlcklkXSk7XHJcbiAgICAgICAgICAgIC8vUmV0dXJuaW5nIHRoZSByZXN1bHRcclxuICAgICAgICAgICAgaWYocmVzdWx0LmFmZmVjdGVkUm93cyAhPSAxKXtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKC0xKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0SWQgPSByZXN1bHQuaW5zZXJ0SWQ7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXN1bHRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy9DUlVEOiBNZXRob2QgdG8gVVBEQVRFIG5vdGVcclxuICAgIHB1YmxpYyB1cGRhdGVOb3RlKGlkOm51bWJlciwgY29udGVudDpzdHJpbmcsIGNhbGxiYWNrOmFueSl7XHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpe1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgLy9UaHJvd2luZyBhbiBlcnJvciBpZiB0aGVyZSBhcmUgYW55XHJcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcbiAgICAgICAgICAgIC8vRXhlY3V0aW5nIHRoZSBxdWVyeVxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnVVBEQVRFIG5vdGVzIFNFVCBjb250ZW50PT8gV0hFUkUgaWQ9PycsIFtjb250ZW50LCBpZF0pO1xyXG4gICAgICAgICAgICAvL1JldHVybmluZyB0aGUgcmVzdWx0XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5jaGFuZ2VkUm93cyAhPSAwKXtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlkKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygtMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy9DUlVEOiBNZXRob2QgdG8gREVMRVRFIG5vdGVcclxuICAgIHB1YmxpYyBkZWxldGVOb3RlKGlkOm51bWJlciwgY2FsbGJhY2s6YW55KXtcclxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6IGFueSwgY29ubmVjdGlvbjphbnkpe1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgLy9UaHJvd2luZyBhbiBlcnJvciBpZiB0aGVyZSBhcmUgYW55XHJcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XHJcbiAgICAgICAgICAgIC8vRXhlY3V0aW5nIHRoZSBxdWVyeVxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnREVMRVRFIEZST00gbm90ZXMgV0hFUkUgaWQ9PycsIFtpZF0pO1xyXG4gICAgICAgICAgICAvL1JldHVybmluZyB0aGUgcmVzdWx0XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5hZmZlY3RlZFJvd3MgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpZCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL01ldGhvZCB0byBpbml0aWFsaXplIHRoZSBEQiBDb25uZWN0aW9uXHJcbiAgICBwcml2YXRlIGluaXREYkNvbm5lY3Rpb24oKTphbnl7XHJcbiAgICAgICAgcmV0dXJuIG15c3FsLmNyZWF0ZVBvb2woe2hvc3Q6IHRoaXMuaG9zdCwgcG9ydDogdGhpcy5wb3J0LCB1c2VyOiB0aGlzLnVzZXJuYW1lLCBwYXNzd29yZDogdGhpcy5wYXNzd29yZCwgZGF0YWJhc2U6IHRoaXMuc2NoZW1hLCBjb25uZWN0aW9uTGltaXQ6IDEwfSk7XHJcbiAgICB9XHJcbn0iXX0=