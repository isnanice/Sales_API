import { CategoryModel } from "../models/categoryModel.js";

export const CategoryController = {

  async create(req, res) {
    try {
      const { name } = req.body;
      const category = await CategoryModel.create(name);

      res.status(201).json({
        success: true,
        message: "Category created successfully",
        data: category
      });

    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
        data: null
      });
    }
  },

  async getAll(req, res) {
    try {
      const categories = await CategoryModel.getAll();

      res.json({
        success: true,
        message: "Categories retrieved successfully",
        data: categories
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
      const category = await CategoryModel.getById(req.params.id);

      res.json({
        success: true,
        message: "Category retrieved successfully",
        data: category
      });

    } catch (err) {
      res.status(404).json({
        success: false,
        message: err.message,
        data: null
      });
    }
  },

  async update(req, res) {
    try {
      const { name } = req.body;
      const category = await CategoryModel.update(req.params.id, name);

      res.json({
        success: true,
        message: "Category updated successfully",
        data: category
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
      const result = await CategoryModel.remove(req.params.id);

      res.json({
        success: true,
        message: "Category deleted successfully",
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