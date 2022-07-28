// Connect to database and start server
import app from './server.js'
import mongodb from 'mongodb';
import dotenv from 'dotenv'

async function main(){

    dotenv.config(); //load environment variables

    const client = new mongodb.MongoClient(
        process.env.MOVIEREVIEWS_DB_URI
    )

    const port = process.env.PORT || 8000


    try {
        // Connect to MongoDB cluster
        await client.connect();

        app.listen(port, () => {
            console.log(`Server running on port: ${port}`);
        })
        
    } catch (e) {
        console.error(e);
        process.exit(1);
        
    }
}

main().catch(console.error);