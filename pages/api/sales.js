import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../db/firebase";
async function handler(req, res) {


    // GET request
    if (req.method === 'GET') {
        console.log('GET request');
        const salesCollection = collection(db, 'sales');
        const salesSnapshot = await getDocs(salesCollection);
        const salesData = salesSnapshot.docs.map(doc => doc.data());
      
        const sellersCollection = collection(db, 'seller');
        const sellersSnapshot = await getDocs(sellersCollection);
        const sellersData = sellersSnapshot.docs.map(doc => doc.data());
      
        console.log(salesData);
        console.log(sellersData);
        // Get the seller name for each sale
        const salesWithSellerName = salesData.map(sale => {
          const seller = sellersData.find(seller => seller._id === sale.sellerId);
          return { ...sale, sellerName: seller ? seller.name : 'Vendedor desconocido' };
        });
        
        res.status(200).json({ sales: salesWithSellerName });

    }
}

export default handler;
