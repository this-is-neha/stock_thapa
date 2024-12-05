import  { useEffect, useState } from "react";
import axios from "axios";

const MarketRatesPage = () => {
  const [stocks, setStocks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMarketData = async () => {
    setIsLoading(true);
    setError("");
    try {

      const response = await axios.post("http://localhost:9006/news/market-rates", {
        symbols: ["AAPL", "GOOGL", "MSFT", "AMZN", "TSLA", "NFLX", "META", "NVDA", "INTC", "BABA", "TSM", "V", "PYPL"],
      });

      setStocks(response.data); 
    } catch (err) {
      console.error("Error fetching market rates:", err);
      setError("Failed to fetch market rates. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
    const interval = setInterval(fetchMarketData, 10000);
    return () => clearInterval(interval);
  }, []);

 
  const filteredStocks = stocks.filter((stock:any) =>
    stock.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Market Rates</h1>

       
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search stocks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        
        {error && <div className="text-red-500 mb-4">{error}</div>}

       
        {isLoading && <div className="text-center">Loading market data...</div>}


        {!isLoading && filteredStocks.length > 0 && (
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Stock</th>
                <th className="px-4 py-2 text-right">Price</th>
                <th className="px-4 py-2 text-right">Change</th>
              </tr>
            </thead>
            <tbody>
              {filteredStocks.map((stock:any) => (
                <tr key={stock.symbol} className="border-b">
                  <td className="px-4 py-2">{stock.symbol}</td>
                  <td className="px-4 py-2 text-right">${stock.price.toFixed(2)}</td>
                  <td
                    className={`px-4 py-2 text-right ${
                      stock.change >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stock.change >= 0 ? "+" : ""}
                    {stock.change.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}


        {!isLoading && filteredStocks.length === 0 && (
          <div className="text-center">No stocks found.</div>
        )}
      </div>
    </div>
  );
};

export default MarketRatesPage;
