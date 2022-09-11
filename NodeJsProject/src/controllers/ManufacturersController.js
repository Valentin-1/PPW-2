class CategoriesController{
    getAll(request, response){
        return response.json([
            {
                manufacturer_id: 1,
                manufacturer_name: "Xiaomi"
            }
        ])
    }

    getOne(request, response){
        return response.json([
            {
                manufacturer_id: 1,
                manufacturer_name: "Xiaomi"
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

module.exports = new CountriesController()