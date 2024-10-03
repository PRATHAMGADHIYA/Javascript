const methods = {
    get: async () => {
        let req = await fetch(`https://json-server-5-0cwx.onrender.com/Product`);
        let res = await req.json();
        return res;
    },
    post: async (products) => {
        let req = await fetch(`https://json-server-5-0cwx.onrender.com/Product`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        });
        let res = await req.json();
        return res;
    },
    patch: async (products,id) => {
        let req = await fetch(`https://json-server-5-0cwx.onrender.com/Product`,{
            method:'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        });
        let res = await req.json();
        return res;
    },
    delete: async (id) => {
        let req = await fetch(`https://json-server-5-0cwx.onrender.com/Product`,{
            method:'DELETE',
        });
        let res= await req.json();
        return res;
    }
}
export default methods;