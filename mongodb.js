//CRUD create read update delete
const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { 'useNewUrlParser': true, 'useUnifiedTopology': true }, (error, client) => {
    if (error) {
        console.log('Erreur de connection à la base de données!')
    }

    //création de la base de données 
    const db = client.db(databaseName) 

    
})



// Start serveur
// /Users/mathieudrapala/mongodb/bin/mongod --dbpath=/Users/mathieudrapala/mongodb-data