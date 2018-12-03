"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *
 */
var BaseRepository =
/*#__PURE__*/
function () {
  function BaseRepository() {
    _classCallCheck(this, BaseRepository);

//     this.model = void 0;
  }

  _createClass(BaseRepository, [{
    key: "findAll",
    value: function findAll(options) {
      return this.findAndCountAll(options).then(function (results) {
        return {
          total: results.count || 0,
          items: results.rows
        };
      });
    }
  }, {
    key: "paginate",
    value: function paginate(options) {
      return this.findAll(options);
    }
  }, {
    key: "findById",
    value: function findById(id, options) {
      return this.model.findById(id, options);
    }
  }, {
    key: "findOne",
    value: function findOne(options) {
      return this.model.findOne(options);
    }
  }, {
    key: "findOrCreate",
    value: function findOrCreate(options) {
      return this.model.findOrCreate(options);
    }
  }, {
    key: "max",
    value: function max(attribute, option) {
      return this.model.max(attribute, option);
    }
  }, {
    key: "min",
    value: function min(attribute, option) {
      return this.model.min(attribute, option);
    }
  }, {
    key: "sum",
    value: function sum(attribute, option) {
      return this.model.sum(attribute, option);
    }
  }, {
    key: "findAndCountAll",
    value: function findAndCountAll(options) {
      return this.model.findAndCountAll(options);
    }
  }, {
    key: "create",
    value: function create(values, options) {
      return this.model.create(values, options);
    }
  }, {
    key: "update",
    value: function update(values, options) {
      return this.model.update(values, options);
    }
  }, {
    key: "destroy",
    value: function destroy(options) {
      if (Array.isArray(options.where)) {
        options.where = {
          $and: options.where
        };
      }

      return this.model.destroy(options);
    }
  }, {
    key: "findAndCount",
    value: function findAndCount(options) {
      return this.model.findAndCount(options);
    }
  }]);

  return BaseRepository;
}();

var _default = BaseRepository;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXNlUmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6WyJCYXNlUmVwb3NpdG9yeSIsIm1vZGVsIiwib3B0aW9ucyIsImZpbmRBbmRDb3VudEFsbCIsInRoZW4iLCJyZXN1bHRzIiwidG90YWwiLCJjb3VudCIsIml0ZW1zIiwicm93cyIsImZpbmRBbGwiLCJpZCIsImZpbmRCeUlkIiwiZmluZE9uZSIsImZpbmRPckNyZWF0ZSIsImF0dHJpYnV0ZSIsIm9wdGlvbiIsIm1heCIsIm1pbiIsInN1bSIsInZhbHVlcyIsImNyZWF0ZSIsInVwZGF0ZSIsIkFycmF5IiwiaXNBcnJheSIsIndoZXJlIiwiJGFuZCIsImRlc3Ryb3kiLCJmaW5kQW5kQ291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUF5QkE7OztJQUdNQSxjOzs7Ozs7U0FDRkMsSzs7Ozs7NEJBRVFDLE8sRUFBbUI7QUFDdkIsYUFBTyxLQUFLQyxlQUFMLENBQXFCRCxPQUFyQixFQUE4QkUsSUFBOUIsQ0FBbUMsVUFBQUMsT0FBTztBQUFBLGVBQUs7QUFDbERDLFVBQUFBLEtBQUssRUFBRUQsT0FBTyxDQUFDRSxLQUFSLElBQWlCLENBRDBCO0FBRWxEQyxVQUFBQSxLQUFLLEVBQUVILE9BQU8sQ0FBQ0k7QUFGbUMsU0FBTDtBQUFBLE9BQTFDLENBQVA7QUFJSDs7OzZCQUVRUCxPLEVBQW1CO0FBQ3hCLGFBQU8sS0FBS1EsT0FBTCxDQUFhUixPQUFiLENBQVA7QUFDSDs7OzZCQUVRUyxFLEVBQThCVCxPLEVBQW1CO0FBQ3RELGFBQU8sS0FBS0QsS0FBTCxDQUFXVyxRQUFYLENBQW9CRCxFQUFwQixFQUF3QlQsT0FBeEIsQ0FBUDtBQUNIOzs7NEJBRU9BLE8sRUFBbUI7QUFDdkIsYUFBTyxLQUFLRCxLQUFMLENBQVdZLE9BQVgsQ0FBbUJYLE9BQW5CLENBQVA7QUFDSDs7O2lDQUVZQSxPLEVBQW1CO0FBQzVCLGFBQU8sS0FBS0QsS0FBTCxDQUFXYSxZQUFYLENBQXdCWixPQUF4QixDQUFQO0FBQ0g7Ozt3QkFFR2EsUyxFQUFtQkMsTSxFQUEwQjtBQUM3QyxhQUFPLEtBQUtmLEtBQUwsQ0FBV2dCLEdBQVgsQ0FBZUYsU0FBZixFQUEwQkMsTUFBMUIsQ0FBUDtBQUNIOzs7d0JBRUdELFMsRUFBbUJDLE0sRUFBMEI7QUFDN0MsYUFBTyxLQUFLZixLQUFMLENBQVdpQixHQUFYLENBQWVILFNBQWYsRUFBMEJDLE1BQTFCLENBQVA7QUFDSDs7O3dCQUVHRCxTLEVBQW1CQyxNLEVBQTBCO0FBQzdDLGFBQU8sS0FBS2YsS0FBTCxDQUFXa0IsR0FBWCxDQUFlSixTQUFmLEVBQTBCQyxNQUExQixDQUFQO0FBQ0g7OztvQ0FFZWQsTyxFQUFtQjtBQUMvQixhQUFPLEtBQUtELEtBQUwsQ0FBV0UsZUFBWCxDQUEyQkQsT0FBM0IsQ0FBUDtBQUNIOzs7MkJBRU1rQixNLEVBQXFCbEIsTyxFQUFtQjtBQUMzQyxhQUFPLEtBQUtELEtBQUwsQ0FBV29CLE1BQVgsQ0FBa0JELE1BQWxCLEVBQTBCbEIsT0FBMUIsQ0FBUDtBQUNIOzs7MkJBRU1rQixNLEVBQXFCbEIsTyxFQUF3QjtBQUNoRCxhQUFPLEtBQUtELEtBQUwsQ0FBV3FCLE1BQVgsQ0FBa0JGLE1BQWxCLEVBQTBCbEIsT0FBMUIsQ0FBUDtBQUNIOzs7NEJBRU9BLE8sRUFBeUI7QUFDN0IsVUFBSXFCLEtBQUssQ0FBQ0MsT0FBTixDQUFjdEIsT0FBTyxDQUFDdUIsS0FBdEIsQ0FBSixFQUFrQztBQUM5QnZCLFFBQUFBLE9BQU8sQ0FBQ3VCLEtBQVIsR0FBZ0I7QUFDWkMsVUFBQUEsSUFBSSxFQUFFeEIsT0FBTyxDQUFDdUI7QUFERixTQUFoQjtBQUdIOztBQUNELGFBQU8sS0FBS3hCLEtBQUwsQ0FBVzBCLE9BQVgsQ0FBbUJ6QixPQUFuQixDQUFQO0FBQ0g7OztpQ0FFWUEsTyxFQUFtQjtBQUM1QixhQUFPLEtBQUtELEtBQUwsQ0FBVzJCLFlBQVgsQ0FBd0IxQixPQUF4QixDQUFQO0FBQ0g7Ozs7OztlQUdVRixjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgTW9kZWwsIEFnZ3JlZ2F0ZU9wdGlvbnMsIERlc3Ryb3lPcHRpb25zLCBVcGRhdGVPcHRpb25zIH0gZnJvbSAnc2VxdWVsaXplJztcclxuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xyXG5cclxuaW50ZXJmYWNlIElPcHRpb25zIHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFRBdHRyaWJ1dGVzIHt9XHJcbmludGVyZmFjZSBJQmFzZVJlcG9zaXRvcnkge1xyXG4gICAgZmluZEFsbDogKG9wdGlvbnM6IElPcHRpb25zKSA9PiBQcm9taXNlPHsgdG90YWw6IG51bWJlcjsgaXRlbXM6IEFycmF5PE1vZGVsPGFueSwgYW55Pj4gfT47XHJcbiAgICBwYWdpbmF0ZTogKG9wdGlvbnM6IElPcHRpb25zKSA9PiBQcm9taXNlPHsgdG90YWw6IG51bWJlcjsgaXRlbXM6IEFycmF5PE1vZGVsPGFueSwgYW55Pj4gfT47XHJcbiAgICBmaW5kQnlJZDogKGlkOiBudW1iZXIgfCBzdHJpbmcgfCBCdWZmZXIsIG9wdGlvbnM6IElPcHRpb25zKSA9PiBQcm9taXNlPGFueT47XHJcbiAgICBmaW5kT25lOiAob3B0aW9uczogSU9wdGlvbnMpID0+IFByb21pc2U8YW55PjtcclxuICAgIGZpbmRPckNyZWF0ZTogKG9wdGlvbnM6IElPcHRpb25zKSA9PiBQcm9taXNlPGFueT47XHJcbiAgICBtYXg6IChhdHRyaWJ1dGU6IHN0cmluZywgb3B0aW9uOiBBZ2dyZWdhdGVPcHRpb25zKSA9PiBQcm9taXNlPGFueT47XHJcbiAgICBtaW46IChhdHRyaWJ1dGU6IHN0cmluZywgb3B0aW9uOiBBZ2dyZWdhdGVPcHRpb25zKSA9PiBQcm9taXNlPGFueT47XHJcbiAgICBzdW06IChhdHRyaWJ1dGU6IHN0cmluZywgb3B0aW9uOiBBZ2dyZWdhdGVPcHRpb25zKSA9PiBQcm9taXNlPG51bWJlcj47XHJcbiAgICBmaW5kQW5kQ291bnRBbGw6IChvcHRpb246IElPcHRpb25zKSA9PiBQcm9taXNlPHsgcm93czogQXJyYXk8TW9kZWw8YW55LCBhbnk+PjsgY291bnQ6IG51bWJlciB9PjtcclxuICAgIGNyZWF0ZTogKHZhbHVlczogVEF0dHJpYnV0ZXMsIG9wdGlvbjogSU9wdGlvbnMpID0+IFByb21pc2U8TW9kZWw8YW55LCBhbnk+PjtcclxuICAgIHVwZGF0ZTogKHZhbHVlczogVEF0dHJpYnV0ZXMsIG9wdGlvbnM6IFVwZGF0ZU9wdGlvbnMpID0+IFByb21pc2U8W251bWJlciwgQXJyYXk8TW9kZWw8YW55LCBhbnk+Pl0+O1xyXG4gICAgZGVzdHJveTogKG9wdGlvbjogRGVzdHJveU9wdGlvbnMpID0+IFByb21pc2U8bnVtYmVyPjtcclxuICAgIGZpbmRBbmRDb3VudDogKG9wdGlvbjogSU9wdGlvbnMpID0+IFByb21pc2U8eyByb3dzOiBBcnJheTxNb2RlbDxhbnksIGFueT4+OyBjb3VudDogbnVtYmVyIH0+O1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmNsYXNzIEJhc2VSZXBvc2l0b3J5IGltcGxlbWVudHMgSUJhc2VSZXBvc2l0b3J5IHtcclxuICAgIG1vZGVsOiBNb2RlbDxhbnksIGFueT47XHJcblxyXG4gICAgZmluZEFsbChvcHRpb25zOiBJT3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRBbmRDb3VudEFsbChvcHRpb25zKS50aGVuKHJlc3VsdHMgPT4gKHtcclxuICAgICAgICAgICAgdG90YWw6IHJlc3VsdHMuY291bnQgfHwgMCxcclxuICAgICAgICAgICAgaXRlbXM6IHJlc3VsdHMucm93c1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwYWdpbmF0ZShvcHRpb25zOiBJT3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRBbGwob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEJ5SWQoaWQ6IG51bWJlciB8IHN0cmluZyB8IEJ1ZmZlciwgb3B0aW9uczogSU9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQnlJZChpZCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZE9uZShvcHRpb25zOiBJT3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRPbmUob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZE9yQ3JlYXRlKG9wdGlvbnM6IElPcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZE9yQ3JlYXRlKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG1heChhdHRyaWJ1dGU6IHN0cmluZywgb3B0aW9uOiBBZ2dyZWdhdGVPcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwubWF4KGF0dHJpYnV0ZSwgb3B0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBtaW4oYXR0cmlidXRlOiBzdHJpbmcsIG9wdGlvbjogQWdncmVnYXRlT3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsLm1pbihhdHRyaWJ1dGUsIG9wdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgc3VtKGF0dHJpYnV0ZTogc3RyaW5nLCBvcHRpb246IEFnZ3JlZ2F0ZU9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5zdW0oYXR0cmlidXRlLCBvcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRBbmRDb3VudEFsbChvcHRpb25zOiBJT3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRBbmRDb3VudEFsbChvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUodmFsdWVzOiBUQXR0cmlidXRlcywgb3B0aW9uczogSU9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5jcmVhdGUodmFsdWVzLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodmFsdWVzOiBUQXR0cmlidXRlcywgb3B0aW9uczogVXBkYXRlT3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnVwZGF0ZSh2YWx1ZXMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3kob3B0aW9uczogRGVzdHJveU9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLndoZXJlKSkge1xyXG4gICAgICAgICAgICBvcHRpb25zLndoZXJlID0ge1xyXG4gICAgICAgICAgICAgICAgJGFuZDogb3B0aW9ucy53aGVyZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5kZXN0cm95KG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRBbmRDb3VudChvcHRpb25zOiBJT3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRBbmRDb3VudChvcHRpb25zKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZVJlcG9zaXRvcnk7XHJcbiJdfQ==
