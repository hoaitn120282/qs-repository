# qs-repository

The base of repository for sequelize on QSoft starter kit

## Install prerequisites
This library develop base on Sequelize then you should install Sequelize before use this package.
`npm install --save sequelize`

## How to install qs-repository

- open package.json and adding the following:

`"qs-repository":"https://github.com/hoaitn120282/qs-repository.git"`

- running cmd:
  `npm install`

- other option:
  `npm install --save https://github.com/hoaitn120282/qs-repository.git`

## How to use qs-repository:

- Include into your scripts OR file that you want to use
  `import BaseRepositories from 'qs-repository'`

## All the function you can use from base repository:

```

- Search for multiple elements in the database
- @param {\*} options
- @returns {_|Promise.<{total: Integer, items: Model[]}>}
  _/
  findAll(options = {}) {
  const queryData = this.findAndCountAll(options);
  return queryData.then(results => ({
  total: results.count || 0,
  items: results.rows
  }));
  }

```
```
- Handle pagination
- @param options
- @returns {_|Promise.<{items: Model[]}>}
  _/
  paginate(options = {}) {
  return this.findAll(options);
  }

```

```
- Search for one specific element in the database by ID.
- @param id
- @param options
- @returns {_|Promise.<Model>}
  _/
  findById(id, options) {
  return this.model.findById(id, options);
  }
```
```
- Search for one specific element in the database by attributes.
- Example: findOne({ where: {title: 'aProject'} })
- @param {\*} options
- @returns {_|Promise.<Model>}
  _/
  findOne(options) {
  return this.model.findOne(options);
  }
```

```
- Search for a specific element or create it if not available.
- Example: modelName.findOrCreate({where: {username: 'xxxxx'}, defaults: {job: 'Technical Lead JavaScript'}})
- @param {\*} options
- @returns {_|Promise.<Model>}
  _/
  findOrCreate(options) {
  return this.model.findOrCreate(options);
  }
```

```
- Get the greatest value of a specific attribute within a specific table
- @param {\*} attribute
- @param {\*} option
- @returns {_|Promise.<Number>}
  _/
  max(attribute, option) {
  return this.model.max(attribute, option);
  }
```

```
- Get the least value of a specific attribute within a specific table
- @param {\*} attribute
- @param {\*} option
- @returns {_|Promise.<Number>}
  _/
  min(attribute, option) {
  return this.model.min(attribute, option);
  }
```

```
- Sum the value of specific attributes
- @param {\*} attribute
- @param {\*} option
- @returns {_|Promise.<Number>}
  _/
  sum(attribute, option) {
  return this.model.sum(attribute, option);
  }
  /\*\*
- Search for multiple elements in the database, returns both data and total count
- @param {\*} options
- @returns {_|Promise.<{rows: Model[]}>}
  _/
  findAndCountAll(options) {
  return this.model.findAndCountAll(options);
  }
```

```
- Create new record.
- @param values
- @param options
- @returns {values}
  \*/

create(values, options) {
return this.model.create(values, options);
}

```

```
- Update the given record
- @param values
- @param options
  \*/
  update(values, options) {
  return this.model.update(values, options);
  }

```

```
- Destroy the records. The request body can be {id: 1} or {id: [1,2,3]} or [{id:1},{id:2},{id:3}]
- @param options
- @returns {_|Promise.<undefined>|void|Promise.<Integer>}
  _/
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

```

```
- Find and count matched rows.
- @param options
- @returns {_|Promise.<{count: Integer, rows: Model[]}>}
  _/
  findAndCount(options = {}) {
  return this.model.findAndCount(options);
  }
```

** [All other functions](http://docs.sequelizejs.com/manual/tutorial/models-usage.html)
