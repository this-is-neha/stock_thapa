// const itemService = require('./table.service');
// const { CreateItemDTO, UpdateItemDTO } = require('./table.dto');

// class ItemController {
//   async getAll(req, res) {
//     try {
//       const items = await itemService.getAllItems();
//       res.status(200).json({ success: true, result: items });
//     } catch (error) {
//       res.status(500).json({ success: false, message: error.message });
//     }
//   }

//   async create(req, res) {
//     try {
//       const { error, value } = CreateItemDTO.validate(req.body);
//       if (error) {
//         return res.status(400).json({
//           success: false,
//           message: error.details[0].message,
//         });
//       }
//       const newItem = await itemService.createItem(value);
//       res.status(201).json({ success: true, result: newItem });
//     } catch (error) {
//       res.status(500).json({ success: false, message: error.message });
//     }
//   }

//   async update(req, res) {
//     try {
//       const { error, value } = UpdateItemDTO.validate(req.body);
//       if (error) {
//         return res.status(400).json({
//           success: false,
//           message: error.details[0].message,
//         });
//       }
//       const updatedItem = await itemService.updateItem(req.params.id, value);
//       if (!updatedItem) {
//         return res.status(404).json({ success: false, message: 'Item not found' });
//       }
//       res.status(200).json({ success: true, result: updatedItem });
//     } catch (error) {
//       res.status(500).json({ success: false, message: error.message });
//     }
//   }

//   async delete(req, res) {
//     try {
//       const deletedItem = await itemService.deleteItem(req.params.id);
//       if (!deletedItem) {
//         return res.status(404).json({ success: false, message: 'Item not found' });
//       }
//       res.status(200).json({ success: true, result: deletedItem });
//     } catch (error) {
//       res.status(500).json({ success: false, message: error.message });
//     }
//   }
// }

// module.exports = new ItemController();


const itemService = require('./table.service');
const { CreateItemDTO, UpdateItemDTO } = require('./table.dto');

class ItemController {
  async getAll(req, res) {
    try {
      console.log('Fetching all items...');
      const items = await itemService.getAllItems();
      console.log('Items fetched successfully:', items);
      res.status(200).json({ success: true, result: items });
    } catch (error) {
      console.error('Error fetching items:', error.message);
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async create(req, res) {
    try {
      console.log('Creating a new item with data:', req.body);
      const { error, value } = CreateItemDTO.validate(req.body);
      if (error) {
        console.log('Validation failed:', error.details[0].message);
        return res.status(400).json({
          success: false,
          message: error.details[0].message,
        });
      }
      const newItem = await itemService.createItem(value);
      console.log('New item created:', newItem);
      res.status(201).json({ success: true, result: newItem });
    } catch (error) {
      console.error('Error creating item:', error.message);
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async update(req, res) {
    try {
      console.log(`Updating item with ID: ${req.params.id}`);
      const { error, value } = UpdateItemDTO.validate(req.body);
      if (error) {
        console.log('Validation failed:', error.details[0].message);
        return res.status(400).json({
          success: false,
          message: error.details[0].message,
        });
      }
      const updatedItem = await itemService.updateItem(req.params.id, value);
      if (!updatedItem) {
        console.log('Item not found for update');
        return res.status(404).json({ success: false, message: 'Item not found' });
      }
      console.log('Item updated successfully:', updatedItem);
      res.status(200).json({ success: true, result: updatedItem });
    } catch (error) {
      console.error('Error updating item:', error.message);
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async delete(req, res) {
    try {
      console.log(`Deleting item with ID: ${req.params.id}`);
      const deletedItem = await itemService.deleteItem(req.params.id);
      if (!deletedItem) {
        console.log('Item not found for deletion');
        return res.status(404).json({ success: false, message: 'Item not found' });
      }
      console.log('Item deleted successfully:', deletedItem);
      res.status(200).json({ success: true, result: deletedItem });
    } catch (error) {
      console.error('Error deleting item:', error.message);
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

module.exports = new ItemController();
