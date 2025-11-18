import { provideClient }  from "../utils/mongodb";

const client = provideClient();
const db = client.db("x402ify_db");
const coll = db.collection("x402ify_col");

async function updateInvoice(owner, endpoint_linker, data) {
    const isX402 = endpoint_linker.includes("x402");

    const field = isX402 
        ? "endpoints.$[elem].invoices" 
        : "dynamicendpoints.$[elem].invoices";

    await coll.findOneAndUpdate(
        { owner },
        {
            $push: {
                [field]: data
            }
        },
        {
            arrayFilters: [{ "elem.endpoint_linker": endpoint_linker }]
        }
    );
}

export { updateInvoice };
