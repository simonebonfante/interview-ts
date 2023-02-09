module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {
      type: DataTypes.INEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      default: new Date()
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return Post
}
