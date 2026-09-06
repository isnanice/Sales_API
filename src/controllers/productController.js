import { ProductModel } from "../models/productModel.js";

export const ProductController = {

  async getAll(req, res) {
    try {
      const { categoryId } = req.query;

      const products = await ProductModel.getAll(categoryId);

      res.json({
        success: true,
        message: "Products retrieved successfully",
        data: products
      });

    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
        data: null
      });
    }
  },

  async getById(req, res) {
    try {
      const product = await ProductModel.getById(req.params.id);

      res.json({
        success: true,
        message: "Product retrieved successfully",
        data: product
      });

    } catch (err) {
      res.status(404).json({
        success: false,
        message: err.message,
        data: null
      });
    }
  },

  async create(req, res) {
    try {
      const { price, stock } = req.body;

      if (typeof price !== "number" || price < 0) {
        return res.status(400).json({
          success: false,
          message: "Harga harus berupa angka dan tidak boleh kurang dari 0",
          data: null
        });
      }

      if (typeof stock !== "number" || stock < 0) {
        return res.status(400).json({
          success: false,
          message: "Stok harus berupa angka dan tidak boleh kurang dari 0",
          data: null
        });
      }

      const product = await ProductModel.create(req.body);

      res.status(201).json({
        success: true,
        message: "Product created successfully",
        data: product
      });

    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
        data: null
      });
    }
  },

  async update(req, res) {
    try {
      const { price, stock } = req.body;

      if (price !== undefined) {
        if (typeof price !== "number" || price < 0) {
          return res.status(400).json({
            success: false,
            message: "Harga harus berupa angka dan tidak boleh kurang dari 0",
            data: null
          });
        }
      }

      if (stock !== undefined) {
        if (typeof stock !== "number" || stock < 0) {
          return res.status(400).json({
            success: false,
            message: "Stok harus berupa angka dan tidak boleh kurang dari 0",
            data: null
          });
        }
      }

      const product = await ProductModel.update(
        req.params.id,
        req.body
      );

      res.json({
        success: true,
        message: "Product updated successfully",
        data: product
      });

    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
        data: null
      });
    }
  },

  async remove(req, res) {
    try {
      const result = await ProductModel.remove(req.params.id);

      res.json({
        success: true,
        message: "Product deleted successfully",
        data: result
      });

    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
        data: null
      });
    }
  },

};