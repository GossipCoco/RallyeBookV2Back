const { Sequelize, DataTypes, sequelize, Op } = require('sequelize');
const connection = require('../DataLayer/Connection');

const User = require("../Models/UserModel")
const Character = require("../Models/Character")
const Chapter = require('../Models/Chapter')
const ChapterCharacter = require('../Models/ChapterCharacter')
const Kind = require('../Models/Kind')
const Level = require('../Models/Level')
const Novel = require('../Models/Novel')
const NovelChapter = require('../Models/NovelChapter')
const NovelCharacter = require('../Models/NovelCharacter')
const NovelKind = require('../Models/NovelKind')
const Rating = require('../Models/Rating')
const Role = require('../Models/Role')
const TypeChapter = require('../Models/TypeChapter')
const TypeNovel = require('../Models/TypeNovel')

const models = {
    User,
    Character,
    Chapter,
    ChapterCharacter,
    Kind,
    Level,
    Novel,
    NovelChapter,
    NovelCharacter,
    NovelKind,
    Rating,
    Role,
    TypeChapter,
    TypeNovel,
    sequelize: connection,
    Utils: {
      Op,
      sequelize,
    },
}
module.exports = models;
