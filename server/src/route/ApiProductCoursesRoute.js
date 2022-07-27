const express = require('express') // use library express 
const ProductCoursesController = require('../controller/ProductCoursesController');

let router = express.Router();

const initApiProductCourses = (app) => {
    router.get('/products-courses', ProductCoursesController.getAllProductCourses);
    router.post('/products-courses', ProductCoursesController.postProductCourses);

    return app.use('/api/v1/', router)
}

module.exports = initApiProductCourses;