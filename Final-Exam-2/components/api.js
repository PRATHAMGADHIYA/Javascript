const methods = {
    get: async () => {
        let req = await fetch(`http://localhost:3000/Product`);
        let res = await req.json();
        return res;
    },
    post: async (products) => {
        let req = await fetch(`http://localhost:3000/Product`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        });
        let res = await req.json();
        return res;
    },
    patch: async (products, id) => {
        let req = await fetch(`http://localhost:3000/Product`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        });
        let res = await req.json();
        return res;
    },
    delete: async (id) => {
        let req = await fetch(`http://localhost:3000/Product`, {
            method: 'DELETE',
        });
        let res = await req.json();
        return res;
    }
}
export default methods;