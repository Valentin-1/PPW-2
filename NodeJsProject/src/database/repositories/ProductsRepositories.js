const Product = require('../models').Product

class CountriesRepository {
    async getAll(fields = undefined) {
        return await Product.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Product.findByPk(id)
    }

    async create(product) {
        return await Product.create(product)
    }

    async update(id, product) {
        const existingProduct = await Product.findByPk(id)
        if (existingProduct) {
            return await existingProduct.update(product);
        }
        return null;
    }

    async delete(id) {
        return await Product.destroy({
            where: { id: id }
        })
    }

    async getAllOfCountry(product_id, fields = undefined) {
        return await Category.findAll({
            where: { product_id: product_id },
            attributes: fields
        })
    }
}

module.exports = new CountriesRepository()