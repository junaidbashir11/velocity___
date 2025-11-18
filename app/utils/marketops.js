import { provideClient }  from "../utils/mongodb";

const client = provideClient();
const db = client.db("x402ify_db");
const marketplace = db.collection("x402marketplace");




async function UpdateMarketData(endpoint_method, endpoint_linker, status_code) {
    const call_success = status_code >= 200 && status_code < 300;

    await marketplace.updateOne(
        { owner: "system" },
        {
            $set: {
                "market.$[elem].endpoint_method": endpoint_method
            },
            $inc: {
                "market.$[elem].calls": 1,
                "market.$[elem].failures": call_success ? 0 : 1
            }
        },
        {
            arrayFilters: [
                { "elem.endpoint_linker": endpoint_linker }
            ]
        }
    );
}
export {UpdateMarketData}