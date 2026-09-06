import { ProductModel } from "../models/productModel.js";

export const ProductController = {

  async getAll(req, res) {
    try {
      const products = await ProductModel.getAll();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const product = await ProductModel.getById(req.params.id);
      res.json(product);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const { price, stock } = req.body;

      // Validasi harga
      if (typeof price !== "number" || price < 0) {
        return res.status(400).json({
          error: "Harga harus berupa angka dan tidak boleh kurang dari 0"
        });
      }

      // Validasi stok
      if (typeof stock !== "number" || stock < 0) {
        return res.status(400).json({
          error: "Stok harus berupa angka dan tidak boleh kurang dari 0"
        });
      }

      const product = await ProductModel.create(req.body);
      res.status(201).json(product);

    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const { price, stock } = req.body;

      // Validasi harga jika dikirim
      if (price !== undefined) {
        if (typeof price !== "number" || price < 0) {
          return res.status(400).json({
            error: "Harga harus berupa angka dan tidak boleh kurang dari 0"
          });
        }
      }

      // Validasi stok jika dikirim
      if (stock !== undefined) {
        if (typeof stock !== "number" || stock < 0) {
          return res.status(400).json({
            error: "Stok harus berupa angka dan tidak boleh kurang dari 0"
          });
        }
      }

      const product = await ProductModel.update(
        req.params.id,
        req.body
      );

      res.json(product);

    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      await ProductModel.remove(req.params.id);
      res.json({ message: "Product deleted successfully" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

};