const methods = {
    get: async () => {
        let req = await fetch("http://localhost:3000/Questions");
        let res = await req.json();
        return res;
    },
    post: async (data) => {
        let req = await fetch("http://localhost:3000/Questions", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let res = await req.json();
        return res;
    },
};

export default methods;
