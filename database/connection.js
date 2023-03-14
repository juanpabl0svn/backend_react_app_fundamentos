const {Client} = require("pg")

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "root",
    database: "postgres"
})

client.connect()

client.query('SELECT * from users',(res,err)=>{
    console.log("entramos")
    if (!err){
        console.log(res.rows)
    }
    else{
        console.log(err.message)
    }

    client.end
})