const bcrypt = require('bcryptjs')
const Users = [
    {name:'admin',email:"admin@admin.com",password:bcrypt.hashSync('123456',10),isAdmin:true},
    {name:'user1',email:"user1@admin.com",password:bcrypt.hashSync('123456',10)},
    {name:'user2',email:"user2@admin.com",password:bcrypt.hashSync('123456',10)},

];

module.exports = Users;