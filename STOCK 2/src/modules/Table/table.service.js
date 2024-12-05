const Item = require('./table.model');

class ItemService {
 
  async getAllItems() {
    return await Item.find();
  }

 
 
async  createItem(data) {
    try {
      const item = new Item(data);
      return await item.save();
    } catch (error) {
      throw new Error('Error creating item: ' + error.message);
    }
  }
  async updateItem(id, data) {
    return await Item.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteItem(id) {
    return await Item.findByIdAndDelete(id);
  }
}

module.exports = new ItemService();
