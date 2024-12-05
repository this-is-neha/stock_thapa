const pieService = require('./chart.service');
const pieDto = require('./chart.dto');

class PieController {
 
  async getPie(req, res) {
    try {
      console.log('Fetching chart data...');
      const data = await pieService.getPieData();
      if (!data) {
        console.log('No chart data found');
        return res.status(404).json({ message: 'No chart data found' });
      }
      console.log('Fetched chart data:', data);
      res.status(200).json({ series: data.series, id: data._id });
    } catch (error) {
      console.error('Error fetching chart data:', error);
      res.status(500).json({ message: 'Error fetching data', error });
    }
  }


  async saveOrUpdatePie(req, res) {
    try {
      console.log('Request received for saving/updating chart data:', req.body);
      const { error } = pieDto.validate(req.body);
      if (error) {
        console.log('Validation error:', error.details[0].message);
        return res.status(400).json({ message: error.details[0].message });
      }

      const { id } = req.params;
      const data = req.body;
      console.log('Parsed ID:', id);
      console.log('Parsed Data:', data);

      if (id) {
        console.log('Updating existing chart with ID:', id);
        const updatedPie = await pieService.updatePie(id, data);
        if (!updatedPie) {
          console.log('Chart not found for ID:', id);
          return res.status(404).json({ message: 'Chart not found' });
        }
        console.log('Chart updated successfully:', updatedPie);
        res.status(200).json({ message: 'Chart updated successfully', chart: updatedPie });
      } else {
        console.log('Creating new chart...');
        const newPie = await pieService.createPie(data);
        console.log('Chart created successfully:', newPie);
        res.status(201).json({ message: 'Chart created successfully', chart: newPie });
      }
    } catch (error) {
      console.error('Error saving/updating chart data:', error);
      res.status(500).json({ message: 'Error saving/updating data', error });
    }
  }
}

module.exports = new PieController();
