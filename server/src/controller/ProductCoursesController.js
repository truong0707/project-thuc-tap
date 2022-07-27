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

module.exports = {
    getAllProductCourses,
    postProductCourses
}