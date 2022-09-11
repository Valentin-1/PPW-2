class ProductsController{
    getAll(request, response){
        return response.json([
            {
                product_id: 1,
                product_name: "Xiaomi Mi A1",
                product_image: null,
                description: "Informatie va fi mai pe urma",
                category_id: 1,
                manufacturer_id: 1,
            }
        ])
    }

    getOne(request, response){
        return response.json([
            {
                product_id: 1,
                product_name: "Xiaomi Mi A1",
                product_image: null,
                description: "Informatie va fi mai pe urma",
                category_id: 1,
                manufacturer_id: 1,
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

module.exports = new ProductsController()