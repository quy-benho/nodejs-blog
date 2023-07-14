const Course = require("../models/Course")
const { mongooseToOject } = require("../../util/mongoose");

class CoursController {
    // [GET] /courses/:slug
    index(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToOject(course) })
            }).catch(next);
    }
    // [GET] /courses/create
    create(req, res, next) {
        res.render("courses/create");
    }

    // [POST] /courses/store
    store(req, res, next) {
       const course = new Course(req.body);
       course.save().then(() => res.redirect( `/`))
       .catch(error => {
        
       })
    }


}

module.exports = new CoursController;

