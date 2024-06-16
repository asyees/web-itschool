const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id : {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false},
    nickname: {type: DataTypes.STRING, unique:true, allowNull:false},
    email: {type: DataTypes.STRING, unique:true, allowNull:false},
    password: {type: DataTypes.STRING, allowNull:false}
    
})
const Leaderboard = sequelize.define('leaderboard', {
    id : {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    rating : {type:DataTypes.INTEGER, defaultValue: 0}

})
const Personal_information = sequelize.define('personal_information', {
    id : {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    firstname : {type : DataTypes.STRING, allowNull:true},
    surname : {type : DataTypes.STRING, allowNull:true},
    middlename : {type : DataTypes.STRING, allowNull:true},
    placeOfStudy : {type : DataTypes.STRING, allowNull:true},
    phoneNumber : {type : DataTypes.STRING, allowNull:true},
    
})

const Users_of_course= sequelize.define('users_of_course', {
    id : {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true}

})


const Course = sequelize.define('course', {
    id : {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    course : {type: DataTypes.STRING, allowNull:false}


})

const Task = sequelize.define('task',{
    id : {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title : {type : DataTypes.STRING, allowNull : false},
    text : {type : DataTypes.STRING, allowNull : false},
    url : {type : DataTypes.STRING, allowNull : false},
    rating : {type : DataTypes.INTEGER, allowNull: false}
})

const inputoutput = sequelize.define('inputoutput',
{
    id : {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    input : {type : DataTypes.STRING, allowNull: false},
    output :{type : DataTypes.STRING, allowNull: false}
})
// const TaskInput_Output = sequelize.define('TaskInput_Output', {
//     id : {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true}
// })
// const taskpython = sequelize.define('task',{
//     id : {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
//     title : {type : DataTypes.STRING, allowNull : false},
//     text : {type : DataTypes.STRING, allowNull : false}
// })
const Usertask = sequelize.define('Usertask', {
    id : {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    status : {type: DataTypes.STRING, allowNull:false}

})

inputoutput.hasOne(Task)
Task.belongsTo(inputoutput)

User.hasOne(Personal_information)
Personal_information.belongsTo(User)

User.hasOne(Leaderboard)
Leaderboard.belongsTo(User)

Course.belongsToMany(User, {through: Users_of_course})
User.belongsToMany(Course, {through: Users_of_course})


User.belongsToMany(Task, {through: Usertask})
Task.belongsToMany(User, {through: Usertask})
// Task.hasMany(Completedtask)
// Completedtask.belongsTo(Task)
// User.hasMany(Completedtask)
// Completedtask.belongsTo(User)
// User.hasMany(Users_of_course)
// Users_of_course.belongsTo(User)


module.exports = {
    User, 
    Leaderboard,
    Personal_information,
    Users_of_course,
    Course,
    Task,
    inputoutput,
    Usertask

}