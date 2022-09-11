class CategoriesController{
    getAll(request, response){
        return response.json([
            {
                category_id: 1,
                category_name: "Phone"
            }
        ])
    }

    getOne(request, response){
        return response.json([
            {
                category_id: 1,
                category_name: "Phone"
            }
        ])
    }

    create(request, response){
        const country = request.body;
        country.id = 1; 
        return response.json(country);
    }

    update(request, response){
        const country = request.body;
        country.id = request.params.id;
        return response.json(country);
    }

    delete(request, response){
        return response.json({});
    }
}

module.exports = new CategoriesController()