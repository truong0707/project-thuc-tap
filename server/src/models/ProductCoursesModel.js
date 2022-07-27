const monggose = require("mongoose"); // use library mongoose
const Schema = monggose.Schema; // use Schema of mongoose

// init Schema CardProduct
const ProductCourses = Schema({
    nameCourses: {
        type: String,
        required: true,
    },
    imgCourses: {
        type: String,
        required: true,
        trim: true,
    },
    descriptionCourses: {
        type: String,
        required: true,
    },
    PriceCourses: {
        type: Number,
        required: true,
    },
    voteCourses: {
        type: Number,
    },

},
    {
        timestamps: true
    }
);

module.exports = monggose.model('productCourses', ProductCourses);
