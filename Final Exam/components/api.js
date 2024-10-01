const methods={
    get: async ()=>{
      let req= await fetch("https://localhost:3000/students");  
      let res=req.json()
    },
}