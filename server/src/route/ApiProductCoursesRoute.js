const express = require('express') // use library express 
const ProductCoursesController = require('../controller/ProductCoursesController');

let router = express.Router();

const initApiProductCourses = (app) => {
    router.get('/products-courses', ProductCoursesController.getAllProductCourses);
    router.post('/products-courses', ProductCoursesController.postProductCourses);
    router.get('/product-course/products_by_id', ProductCoursesController.getProductCourseById);
    router.delete('/product-course/product_by_id', ProductCoursesController.deleteProductById);

    return app.use('/api/v1/', router)
}

module.exports = initApiProductCourses;