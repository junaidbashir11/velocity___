const { MongoClient, ServerApiVersion } = require('mongodb');

// Replace with your actual connection string
const uri = "mongodb+srv://junaid:junaid@cluster0.0ec6y.mongodb.net/?appName=Cluster0"; 

// Create a new MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1, // Equivalent to ServerApi('1') in Python
    strict: true,
    deprecationErrors: true,
  }
});

/**
 * Connects to MongoDB, pings the server, and provides the client.
 */
async function runConnectionTest() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Connection error:", error);
    // You might want to throw the error or handle it differently
  } 
  // NOTE: You typically keep the connection open for your application to use, 
  // so `client.close()` is omitted here.
}

// Call the connection test function
runConnectionTest();


/**
 * Returns the connected MongoDB client instance.
 * @returns {MongoClient} The MongoDB client.
 */
function provideClient() {
    return client;
}

// Example usage of the exported client (optional)
// const dbClient = provideClient();
// console.log("Client is available:", dbClient); 

export {provideClient}