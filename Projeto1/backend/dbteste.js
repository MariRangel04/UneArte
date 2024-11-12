// teste com código do banco de dados
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://root:UneArte24@cluster0.gkrpw.mongodb.net/UneArteDB?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("UneArteDB").command({ ping: 1 });
    console.log("Pingou sua implantação. Você se conectou com sucesso ao MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
