const Category = require('../models').Category

class RegionsRepository {
    async getAll(fields = undefined) {
        return await Category.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Category.findByPk(id)
    }

    async create(category) {
        return await Region.create(Category)
    }

    async update(id, category) {
        const existingCategory = await Category.findByPk(id)
        if (existingCategory) {
            return await existingCategory.update(category);
        }
        return null;
    }

    async delete(id) {
        const deletedCategory = await Category.destroy({
            where: { id: id }
        })
        if (deletedCategory) {
            return {};
        }
        return null;
    }

    async getAllOfCountry(country_id, fields = undefined) {
        return await Category.findAll({
            where: { country_id: country_id },
            attributes: fields
        })
    }
}

module.exports = new RegionsRepository()