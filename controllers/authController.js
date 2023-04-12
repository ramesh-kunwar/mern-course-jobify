
const register = (req, res) =>{
    res.send("register User")
}
const login = (req, res) =>{
    res.send("login User")
}
const updateUser = (req, res) =>{
    res.send("update User")
}



module.exports = {register, login, updateUser}