'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var target = _path2.default.join(__dirname, '../models');

var sequelize = new _sequelize2.default(_settings2.default.database.name, _settings2.default.database.user, _settings2.default.database.pass, {
  logging: _settings2.default.database.log,
  dialect: 'mysql',
  host: "localhost",
  port: 3306,
  define: {
    timestamps: false
  }
});
var db = {};
var model = void 0;

_fs2.default.readdirSync(target).filter(function (file) {
  return file.indexOf('.') !== 0 && file.indexOf('.map') === -1;
}).forEach(function (file) {
  model = sequelize.import(_path2.default.join(target, file));
  db[model.name] = model;
  // console.dir(" model created in >>>>>> " + model );
});

Object.keys(db).forEach(function (name) {
  if ('associate' in db[name]) {
    db[name].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = _sequelize2.default;

exports.default = db;