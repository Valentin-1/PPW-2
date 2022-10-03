const Manufacturer = require('../models').Manufacturer

class RegionsRepository {
    async getAll(fields = undefined) {
        return await Manufacturer.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Manufacturer.findByPk(id)
    }

    async create(manufacturer) {
        return await Manufacturer.create(Manufacturer)
    }

    async update(id, manufacturer) {
        const existingManufacturer = await Manufacturer.findByPk(id)
        if (existingManufacturer) {
            return await existingManufacturer.update(manufacturer);
        }
        return null;
    }

    async delete(id) {
        const deletedManufacturer = await Manufacturer.destroy({
            where: { id: id }
        })
        if (deletedManufacturer) {
            return {};
        }
        return null;
    }

    async getAllOfCountry(countryId, fields = undefined) {
        return await Manufacturer.findAll({
            where: { country_id: country_id },
            attributes: fields
        })
    }
}

module.exports = new RegionsRepository()