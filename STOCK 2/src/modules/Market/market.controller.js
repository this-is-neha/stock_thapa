const marketService = require("./market.service");

class MarketController {
  async getMarketRates(req, res) {
    const { symbols } = req.body;


    if (!symbols || !Array.isArray(symbols) || symbols.length === 0) {
      return res.status(400).json({ error: "Symbols are required and must be an array." });
    }

    try {
   
      const marketRates = await Promise.all(
        symbols.map(async (symbol) => {
          try {
            return await marketService.getMarketRates(symbol);
          } catch (error) {
            console.error(`Failed to fetch data for symbol: ${symbol}`, error.message);
            return { symbol, error: "Failed to fetch data." };
          }
        })
      );

    
      res.json(marketRates);
    } catch (error) {
      console.error("Error fetching market rates:", error.message);
      res.status(500).json({ error: "Failed to fetch market rates." });
    }
  }
}

module.exports = new MarketController();
