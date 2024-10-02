const methods = {
    get: async (data) => {
        let req = await fetch("https://json-server-3-ij4u.onrender.com/Questions");
        let res = req.json();
        return res;
    },
    post: async (data) => {
        let req = await fetch("https://json-server-3-ij4u.onrender.com/Questions", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let res = await req.json();
        return res;
    },
}
export default methods;