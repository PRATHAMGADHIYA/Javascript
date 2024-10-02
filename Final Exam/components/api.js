const methods={
    get: async ()=>{
      let req= await fetch("https://localhost:3000/Questions");  
      let res=req.json();
      return res;
    },
    post: async(data)=>{
        let req= await fetch("https://localhost:3000/Questions", {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let res=await req.json();
        return res;
    },
    patch: async(data)=>{
        let req= await fetch(`https://localhost:3000/Questions/${data.id}`, {
            method:'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let res=await req.json();
        return res;
    },
    delete: async(id)=>{
        let req= await fetch(`https://localhost:3000/Questions/${id}`, {
            method:'DELETE',
        });
        let res=await req.json();
        return res;
    }
}
export default methods;