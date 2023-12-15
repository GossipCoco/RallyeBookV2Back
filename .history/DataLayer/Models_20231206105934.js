const { DataTypes, sequelize, Op } = require("sequelize");

const connection = require("./Connection");

const User = connection.define(
  "User",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    LastName: {
      type: DataTypes.STRING,
    },
    FirstName: {
      type: DataTypes.STRING,
    },
    Login: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
    },
    Password: {
      type: DataTypes.STRING,
    },
    UserName: {
      type: DataTypes.STRING,
    },
    Avatar: {
      type: DataTypes.STRING,
    },
    Birthday: {
      type: DataTypes.DATE,
    },
    Inscription: {
      type: DataTypes.DATE,
    },
    LastConnexion: {
      type: DataTypes.DATE,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Level = connection.define(
  "Level",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Role = connection.define(
  "Role",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);
const TypeChapter = connection.define(
    "TypeChapter",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
const TypeNovel = connection.define(
    "TypeNovel",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  const Kind = connection.define(
    "Kind",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  const Rating = connection.define(
    "Rating",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
const Novel = connection.define(
  "Novel",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Character = connection.define(
  "Character",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    FirstName: {
      type: DataTypes.STRING,
    },
    LastName: {
      type: DataTypes.STRING,
    },
    NickName: {
      type: DataTypes.STRING,
    },
    PhysicalApparence: {
      type: DataTypes.TEXT,
    },
    Personnality: {
      type: DataTypes.TEXT,
    },
    Biography: {
      type: DataTypes.TEXT,
    },
    Birthday: {
      type: DataTypes.DATE,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Chapter = connection.define(
  "Chapter",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Title: {
      type: DataTypes.STRING,
    },
    Chapter: {
      type: DataTypes.TEXT,
    },
    previsionnalNbWords: {
      type: DataTypes.INTEGER,
    },
    RealNbWords: {
      type: DataTypes.INTEGER,
    },
    PercentAdvencement: {
      type: DataTypes.INTEGER,
    },
    ChapterNumber: {
      type: DataTypes.INTEGER,
    },
  },
  { freezeTableName: true, timestamps: false }
);
const ChapterCharacter = connection.define(
    "ChapterCharacter",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  const NovelCharacter = connection.define(
    "NovelCharacter",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  const NovelChapter = connection.define(
    "NovelChapter",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  


  User.belongsTo(Level, { foreignKey: "LevelId" })
  Level.hasMany(Role)

  User.belongsTo(Role,{ foreignKey: "RoleId" })
  Role.hasMany(User)

  Novel.belongsTo(User, { foreignKey: "UserId" })
  User.hasMany(Novel)

  Novel.belongsTo(Kind, { foreignKey: "KindId" })
  Kind.hasMany(Novel)
  
  Novel.belongsTo(TypeNovel, { foreignKey: "TypeNovelId" })
  TypeNovel.hasMany(Novel)
  
  Novel.belongsTo(Rating, { foreignKey: "RatingId" })
  User.hasMany(Novel)

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


  const models = {
    User,

  }