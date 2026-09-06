import { CustomerModel } from "../models/customerModel.js";

export const CustomerController = {

  async getAll(req, res) {
    try {
      const customers = await CustomerModel.getAll();

      res.json({
        success: true,
        message: "Customers retrieved successfully",
        data: customers
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
      const customer = await CustomerModel.getById(req.params.id);

      res.json({
        success: true,
        message: "Customer retrieved successfully",
        data: customer
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
      const customer = await CustomerModel.create(req.body);

      res.status(201).json({
        success: true,
        message: "Customer created successfully",
        data: customer
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
      const customer = await CustomerModel.update(
        req.params.id,
        req.body
      );

      res.json({
        success: true,
        message: "Customer updated successfully",
        data: customer
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
      const result = await CustomerModel.remove(req.params.id);

      res.json({
        success: true,
        message: "Customer deleted successfully",
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