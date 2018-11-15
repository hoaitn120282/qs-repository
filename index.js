import Utils from "sequelize/lib/utils";
import DataTypes from "sequelize/lib/data-types";
import _ from "lodash";
import bluebird from "bluebird";

const Promise = bluebird.getNewLibraryCopy();

class BaseRepository {
  /**
   * Initial function
   * @param {*} req
   * @param {*} res
   * @param {*} options
   */
  constructor(req, res, options = {}) {
    this.req = req;
    this.res = res;
    this.options = options;
  }
  /**
   * Search for multiple elements in the database
   * @param {*} options
   * @returns {*|Promise.<{total: Integer, items: Model[]}>}
   */
  findAll(options = {}) {
    const queryData = this.findAndCountAll(options);
    return queryData.then(results => ({
      total: results.count || 0,
      items: results.rows
    }));
  }

  /*
     * Handle pagination
     * @param options
     * @returns {*|Promise.<{items: Model[]}>}
     */
  paginate(options = {}) {
    return this.findAll(options);
  }

  /**
   * Search for one specific element in the database by ID.
   * @param id
   * @param options
   * @returns {*|Promise.<Model>}
   */
  findById(id, options) {
    return this.model.findById(id, options);
  }
  /**
   * Search for one specific element in the database by attributes.
   * Example: findOne({ where: {title: 'aProject'} })
   * @param {*} options
   * @returns {*|Promise.<Model>}
   */
  findOne(options) {
    return this.model.findOne(options);
  }
  /**
   * Search for a specific element or create it if not available.
   * Example: modelName.findOrCreate({where: {username: 'xxxxx'}, defaults: {job: 'Technical Lead JavaScript'}})
   * @param {*} options
   * @returns {*|Promise.<Model>}
   */
  findOrCreate(options) {
    return this.model.findOrCreate(options);
  }
  /**
   * Get the greatest value of a specific attribute within a specific table
   * @param {*} attribute
   * @param {*} option
   * @returns {*|Promise.<Number>}
   */
  max(attribute, option) {
    return this.model.max(attribute, option);
  }
  /**
   * Get the least value of a specific attribute within a specific table
   * @param {*} attribute
   * @param {*} option
   * @returns {*|Promise.<Number>}
   */
  min(attribute, option) {
    return this.model.min(attribute, option);
  }
  /**
   * Sum the value of specific attributes
   * @param {*} attribute
   * @param {*} option
   * @returns {*|Promise.<Number>}
   */
  sum(attribute, option) {
    return this.model.sum(attribute, option);
  }
  /**
   * Search for multiple elements in the database, returns both data and total count
   * @param {*} options
   * @returns {*|Promise.<{rows: Model[]}>}
   */
  findAndCountAll(options) {
    return this.model.findAndCountAll(options);
  }
  /**
   * Create new record.
   * @param values
   * @param options
   * @returns {values}
   */

  create(values, options) {
    return this.model.create(values, options);
  }

  /**
   * Update the given record
   * @param values
   * @param options
   */
  update(values, options) {
    return this.model.update(values, options);
  }

  /**
   * Destroy the records. The request body can be {id: 1} or {id: [1,2,3]} or [{id:1},{id:2},{id:3}]
   * @param options
   * @returns {*|Promise.<undefined>|void|Promise.<Integer>}
   */
  destroy(options = {}) {
    if (Array.isArray(options.where)) {
      options.where = {
        $and: options.where
      };
    } else {
      if (this.req.params.id) {
        options.where = {
          $and: {
            id: this.req.params.id
          }
        };
      } else {
        options.where = {
          $and: {
            id: this.req.query.ids || []
          }
        };
      }
    }
    options = Object.assign(options);
    return this.model.destroy(options);
  }

  /**
   * Get record counted in place or not
   * @param options
   * @returns {*|Promise.<Integer>}
   */
  count(options = {}) {
    return Promise.try(() => {
      options = _.defaults(Utils.cloneDeep(options), {
        hooks: true
      });
      if (options.hooks) {
        return this.model.runHooks("beforeCount", options);
      }
    }).then(() => {
      let col = options.col || "*";
      if (options.include) {
        col =
          this.tableAlias + "." + (options.col || this.model.primaryKeyField);
      }

      Utils.mapOptionFieldNames(options, this.model);

      options.plain = !options.group;
      options.dataType = new DataTypes.INTEGER();
      options.includeIgnoreAttributes = false;
      options.limit = null;
      options.offset = null;
      options.order = null;

      return this.model.aggregate(col, "count", options);
    });
  }

  /**
   * Find and count matched rows.
   * @param options
   * @returns {*|Promise.<{count: Integer, rows: Model[]}>}
   */
  findAndCount(options = {}) {
    return this.model.findAndCount(options);
  }
}

export default BaseRepository;
