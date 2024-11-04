const {
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
} = require('./index');

User.belongsTo(Level, { foreignKey: "LevelId" })
Level.hasMany(User)

User.belongsTo(Role,{ foreignKey: "RoleId" })
Role.hasMany(User)

Novel.belongsTo(User, { foreignKey: "UserId" })
User.hasMany(Novel)

Novel.belongsTo(Kind, { foreignKey: "KindId" })
Kind.hasMany(Novel)

Novel.belongsTo(TypeNovel, { foreignKey: "TypeNovelId" })
TypeNovel.hasMany(Novel)

Novel.belongsTo(Rating, { foreignKey: "RatingId" })
Rating.hasMany(Novel)

Chapter.belongsTo(User, { foreignKey: "UserId" })
User.hasMany(Chapter)

Chapter.belongsTo(TypeChapter, { foreignKey: "TypeChapterId" })
TypeChapter.hasMany(Chapter)

NovelCharacter.belongsTo(Novel, { foreignKey: "NovelId" })
Novel.hasMany(NovelCharacter)

NovelCharacter.belongsTo(Character, { foreignKey: "CharacterId" })
Character.hasMany(NovelCharacter)

ChapterCharacter.belongsTo(Novel, { foreignKey: "ChapterId" })
Novel.hasMany(ChapterCharacter)

ChapterCharacter.belongsTo(Character, { foreignKey: "CharacterId" })
Character.hasMany(ChapterCharacter)

NovelChapter.belongsTo(Novel, { foreignKey: "NovelId" })
Novel.hasMany(NovelChapter)

NovelChapter.belongsTo(Chapter, { foreignKey: "ChapterId" })
Chapter.hasMany(NovelChapter)


NovelKind.belongsTo(Novel, { foreignKey: "NovelId" })
Novel.hasMany(NovelKind)

NovelKind.belongsTo(Kind, { foreignKey: "KindId" })
Kind.hasMany(NovelKind)


module.exports = {
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