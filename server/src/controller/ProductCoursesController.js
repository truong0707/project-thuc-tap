const ProductCoursesModel = require('../models/ProductCoursesModel');

// get all product
let getAllProductCourses = async (req, res) => {
    try {
        const productCourses = await ProductCoursesModel.find();
        res.status(200).json({ success: "get Courses ok", productCourses });
        // res.status(200).json(productCards);

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "lỗi server" })
    }
}


// post
let postProductCourses = async (req, res) => {
    const { imgCourses, nameCourses, descriptionCourses, PriceCourses, voteCourses } = req.body

    if (!nameCourses) return res.status(400).json({ success: false, message: "Courses must have name " });
    try {
        const newProductCourses = new ProductCoursesModel({
            nameCourses,
            imgCourses,
            descriptionCourses,
            PriceCourses,
            voteCourses,
        });
        await newProductCourses.save();
        res.json({ success: true, message: "CardProducts đã đc post thành công", post: newProductCourses }); // post: CardProduct sử dụng bên gọi bên front
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "lỗi server" })
    }
}

// get product detail
const getProductCourseById = async (req, res) => {
    try {
        const id = req.query.id;
        if (!id) {
            return res.status(500).json({
                errCode: 1,
                errMessage: 'missing require parameter',
                data: {}
            })
        }
        const productDetail = await ProductCoursesModel.find({
            '_id': { $in: id }
        });

        return res.status(200).json({ success: "get product detail ok", productDetail });

    } catch (e) {
        console.log('create error:', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
};

/* delete product */
const deleteProductById = async (req, res) => {
    const id = req.query.id;
    try {

        if (!id) {
            return res.status(500).json({
                errCode: 1,
                errMessage: 'missing require parameter',
                data: {}
            })
        }

        const productDeleted = await ProductCoursesModel.deleteOne({
            '_id': { $in: id }
        });

        res.status(200).json({ success: "delete product success!", productDeleted });

    } catch (e) {
        console.log('create error:', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server, id khoá học ko tìm thấy'
        })
    }
}

module.exports = {
    getAllProductCourses,
    postProductCourses,
    getProductCourseById,
    deleteProductById
}