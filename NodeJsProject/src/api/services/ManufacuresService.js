const ManufacturesRepository = require('../../database/repositories/ManufacturesRepository')

class ManufacuresService {
    async getAll(fields = undefined) {
        return await ManufacturesRepository.getAll(fields)
    }

    async getOne(id) {
        return await ManufacturesRepository.getOne(id)
    }

    async create(manufacturer) {
        return await ManufacturesRepository.create(manufacturer)
    }

    async update(id, category) {
        const existingCategory = await Category.findByPk(id)
        if (existingCategory) {
            return await existingCategory.update(category);
        }
        return null;
    }

    async delete(id) {
        return await ManufacturesRepository.delete(id)
    }
}

module.exports = new ManufacuresService()