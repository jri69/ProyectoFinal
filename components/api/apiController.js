class ApiController {
    constructor() { }

    async getData() {
        const data = {
            "nameSystem": "api-users",
            "version": "0.0.1",
            "developer": "Juan Rodrigo Inclan ",
            "email": "juanr.inclan@gmail.com"
        }
        return data;
    }
}

module.exports = ApiController;
