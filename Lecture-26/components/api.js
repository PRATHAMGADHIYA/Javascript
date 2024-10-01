const apimethod = {
    get: async () => {
        let req = await fetch(`https://json-server-f9y5.onrender.com/students`);
        let res = await req.json();
        return res;
    },
    post: async (students) => {
        let req = await fetch(`https://json-server-f9y5.onrender.com/students`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(students)
        });
        let res = await req.json();
        return res;
    },
    patch: async (students,id) => {
        let req = await fetch(`https://json-server-f9y5.onrender.com/students/${id}`,{
            method:'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(students)
        });
        let res = await req.json();
        return res;
    },
    delete: async (id) => {
        let req = await fetch(`https://json-server-f9y5.onrender.com/students/${id}`,{
            method:'DELETE',
        });
        let res= await req.json();
        return res;
    }
}
export default apimethod;