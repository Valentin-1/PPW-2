class UsersController{
    getAll(request, response){
        return response.json([
            {
                user_id: 1,
                fname: "Vrabii",
                lname: "Valentin",
                email: "valikv03@gmail.com",
                user_name: "Valik"
            }
        ])
    }

    getOne(request, response){
        return response.json([
            {
                user_id: 1,
                fname: "Vrabii",
                lname: "Valentin",
                email: "valikv03@gmail.com",
                user_name: "Valik"
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

module.exports = new UsersController()