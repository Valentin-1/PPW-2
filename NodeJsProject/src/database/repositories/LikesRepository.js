const Like = require('../models').Like

class RegionsRepository {
    async getAll(fields = undefined) {
        return await Like.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Like.findByPk(id)
    }

    async create(like) {
        return await Region.create(Like)
    }

    async update(id, like) {
        const existingLike = await Like.findByPk(id)
        if (existingLike) {
            return await existingLike.update(like);
        }
        return null;
    }

    async delete(id) {
        const deletedLike = await Like.destroy({
            where: { id: id }
        })
        if (deletedLike) {
            return {};
        }
        return null;
    }

    async getAllOfCountry(like_id, fields = undefined) {
        return await Like.findAll({
            where: { like_id: like_id },
            attributes: fields
        })
    }
}

module.exports = new RegionsRepository()