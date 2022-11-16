const apiController = {
profileIndex (req, res, next) {
    res.json(res.locals.data.profiles)
},
showProfile (req, res, next) {
    res.json(res.locals.data.profile)
}

}

module.exports = apiController
