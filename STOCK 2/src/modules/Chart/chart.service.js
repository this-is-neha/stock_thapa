const Pie = require('./chart.model');

class PieService {

  async getPieData() {
    const pieData = await Pie.findOne();
    return pieData || null;
  }

  
  async createPie(data) {
    const newPie = new Pie(data);
    return await newPie.save();
  }

  async updatePie(id, data) {
    const updatedPie = await Pie.findByIdAndUpdate(id, data, { new: true });
    return updatedPie;
  }
}

module.exports = new PieService();
