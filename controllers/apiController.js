const apiController = {
    userIndex(req, res, next) {
        res.json(res.locals.data.users)
    },
    userShow(req, res, next) {
        res.json(res.locals.data.user)
    },
    profileIndex(req, res, next) {
        res.json(res.locals.data.profiles)
    },
    showProfile(req, res, next) {
        res.json(res.locals.data.profile)
    },
    educationIndex(req, res, next) {
        res.json(res.locals.data.educations)
    },
    educationShow(req, res, next) {
        res.json(res.locals.data.education)
    },
    accessibilityIndex(req, res, next) {
        res.json(res.locals.data.accessibilitys)
    },
    accesibilityShow(req, res, next) {
        res.json(res.locals.data.accessibility)
    }
}

module.exports = apiController
