import { MongoClient } from 'mongodb';


async function handler(req, res) {
    //connection
    const client = await MongoClient.connect(
        'mongodb+srv://crud:crud123@web.gq8l24z.mongodb.net/?retryWrites=true&w=majority'
    );
    //GET request
    if (req.method === 'GET') {
        const db = client.db('minicore');

        const collections = db.collection('sales');

        const data = await collections.find().toArray();
        
        res.status(200).json({ sales: data });
    }

    client.close();
}

export default handler;