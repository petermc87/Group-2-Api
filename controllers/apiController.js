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
    profileShow(req, res, next) {
        res.json(res.locals.data.profile)
    },
    educationIndex(req, res, next) {
        res.json(res.locals.data.educations)
    },
    educationShow(req, res, next) {
        res.json(res.locals.data.education)
    },
    workExperienceIndex(req, res, next) {
        res.json(res.locals.data.workExperiences)
    },
    workExperienceShow(req, res, next) {
        res.json(res.locals.data.workExperience)
    },
    accessibilityIndex(req, res, next) {
        res.json(res.locals.data.accessibilitys)
    },
    accessibilityShow(req, res, next) {
        res.json(res.locals.data.accessibility)
    }
}

module.exports = apiController
