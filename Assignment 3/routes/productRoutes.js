const express = require("express")
const router = express.Router()

const { validateProduct } = require("../middleware/errorMiddleware")

const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    updateStock,
    deleteProduct,
    lowStockReport,
    categorySummary
} = require("../controllers/productController")

router.post("/", validateProduct, createProduct)
router.get("/", getAllProducts)
router.get("/low-stock", lowStockReport)
router.get("/summary", categorySummary)
router.patch("/:id/stock", updateStock)
router.put("/:id", validateProduct, updateProduct)
router.delete("/:id", deleteProduct)
router.get("/:id", getProductById)

module.exports = router