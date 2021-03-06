/**
  * exports.find
  * exports.findActive
  * exports.findOne
  * exports.findOneByUsername
  * exports.create
  * exports.update
  * exports.deleteOne
  */
const {check, param, query, body, oneOf, validationResult} = require('express-validator');

exports.find = [
  query('ids.*').isMongoId(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    else next();
  }
];

exports.findActive = [
  query('ids.*').isMongoId(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    else next();
  }
];

exports.findOne = [
	param('id').isMongoId(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    else next();
  }
];

exports.findOneByUsername = [
  check('username').isLength({ min: 6, max: 30}).withMessage('Username must between 6 and 30 characters long.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    else next();
  }
];

exports.create = [[
  check('firstName')
    .not().isEmpty().withMessage('First name must not be empty.')
    .matches(/^[a-zA-Z0-9\s.,`'\-]+$/, 'g').withMessage('First name must be alphanumeric.'),
  check('lastName')
    .not().isEmpty().withMessage('Last name must not be empty.')
    .matches(/^[a-zA-Z0-9\s.,`'\-]+$/, 'g').withMessage('Last name must be alphanumeric.'),
  check('email').isEmail()],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else next();
  }
];


// authsValidator.register
// add password must not be the same as prev
exports.updateOne = [[
  param('id').isMongoId(),
  check('firstName')
    .not().isEmpty().withMessage('First name must not be empty.')
    .matches(/^[a-zA-Z0-9\s.,`'\-]+$/, 'g').withMessage('First name must be alphanumeric.'),
  check('lastName')
    .not().isEmpty().withMessage('Last name must not be empty.')
    .matches(/^[a-zA-Z0-9\s.,`'\-]+$/, 'g').withMessage('Last name must be alphanumeric.'),
  oneOf([
    check('email').isEmail().withMessage('Email must be a valid email or empty.'),
    check('email').isEmpty()
  ])],
  (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        else next();
    }
];
