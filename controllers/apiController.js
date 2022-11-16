const apiController = {
profileIndex (req, res, next) {
    res.json(res.locals.data.profiles)
},
showProfile (req, res, next) {
    res.json(res.locals.data.profile)
},
userIndex (req, res, next) {
    res.json(res.locals.data.users)
},
showUser (req, res, next) {
    res.json(res.locals.data.user)
}

}

module.exports = apiController
