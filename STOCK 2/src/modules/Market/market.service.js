

const axios = require('axios');

class MarketService {
  constructor() {
    this.BASE_URL = "https://finnhub.io/api/v1/quote"; 
    this.API_TOKEN = "ct4b0ehr01qo7vqak1fgct4b0ehr01qo7vqak1g0"; 
  }

  async getMarketRates(symbol) {
    try {
    
      if (!symbol || typeof symbol !== "string") {
        throw new Error("Invalid symbol provided.");
      }

     
      const response = await axios.get(this.BASE_URL, {
        params: { symbol, token: this.API_TOKEN },
      });

      const { c: currentPrice, d: change, dp: percentChange } = response.data;

      return {
        symbol,
        price: currentPrice || 0, 
        change: change || 0,
        percentChange: percentChange || 0,
      };
    } catch (error) {
      console.error(
        `Error fetching market rates for symbol: ${symbol}`,
        error.response?.data || error.message
      );
      throw new Error("Failed to fetch market rates.");
    }
  }
}

module.exports = new MarketService();
