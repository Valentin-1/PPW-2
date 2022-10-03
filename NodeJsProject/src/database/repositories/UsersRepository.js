const User = require('../models').User

class CountriesRepository {
    async getAll(fields = undefined) {
        return await User.findAll({attributes: fields})
    }

    async getOne(id) {
        return await User.findByPk(id)
    }

    async create(user) {
        return await User.create(user)
    }

    async update(id, User) {
        const existingUser = await User.findByPk(id)
        if (existingUser) {
            return await existingUser.update(user);
        }
        return null;
    }

    async delete(id) {
        return await User.destroy({
            where: { id: id }
        })
    }

    async getAllOfCountry(user_id, fields = undefined) {
        return await User.findAll({
            where: { user_id: user_id },
            attributes: fields
        })
    }
}

module.exports = new CountriesRepository()