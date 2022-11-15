import mongoose from "mongoose";
const server = "mongodb+srv://caioguarniele:senha123@cluster0.esbcklp.mongodb.net/?retryWrites=true&w=majority"
const database = "wheretogo"
const dbConection = 
mongoose.connect(`${server}/${database}`,{useNewUrlParser: true, useUnifiedTopology: true}).then( () => {
    console.log("Conectado com Sucesso")
}).catch ( (err) =>{ 
    console.log(`Nao foi possivel Conectar ${err}`)
} )



export default dbConection