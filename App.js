const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose
  .connect('mongodb://localhost:27017/Gitag', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

const app = express();
app.use(express.json());
app.use(cors());

// Product Schema
const ProductSchema = new mongoose.Schema({
  IDs: Number,
  Title: String,
  Category: String,
  Price: Number,
  Rating: Number,
  ImageUrl: String
});

// Models
const Spices = mongoose.model('spices', ProductSchema);
const Paintings = mongoose.model('paintings', ProductSchema);
const Handicrafts = mongoose.model('handicrafts', ProductSchema);
const Textiles = mongoose.model('textiles', ProductSchema);

// 
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

//  POST - Create Spices
app.post('/postSpicesdata', async (req, res) => {
  try {
    const newSpices = new Spices(req.body);
    const savedSpices = await newSpices.save();
    res.status(201).json(savedSpices);
  } catch (error) {
    console.error('❌ Error saving spices data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET - Fetch Spices
app.get('/getSpicesdata', async (req, res) => {
  try {
    const spices = await Spices.find();
    res.status(200).json(spices);
  } catch (error) {
    console.error('❌ Error fetching spices data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

//  PUT - Update Spices
app.put('/updateSpicesdata/:_id', async (req, res) => {
  const { _id } = req.params;
  if (!isValidObjectId(_id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const updateData = await Spices.updateOne(
      { _id: new mongoose.Types.ObjectId(_id) },
      { $set: req.body }
    );

    if (updateData.modifiedCount === 0) {
      return res.status(404).json({ message: 'No changes made' });
    }

    res.status(200).json({ message: 'Data updated successfully' });
  } catch (error) {
    console.error('❌ Error updating spices data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// DELETE - Remove Spices
app.delete('/deleteSpicesData/:_id', async (req, res) => {
  const { _id } = req.params;
  if (!isValidObjectId(_id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const deleteData = await Spices.deleteOne({ _id: new mongoose.Types.ObjectId(_id) });

    if (deleteData.deletedCount === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting spices data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

//  POST - Create Paintings
app.post('/postPaintingsdata', async (req, res) => {
  try {
    const newPainting = new Paintings(req.body);
    const savedPainting = await newPainting.save();
    res.status(201).json(savedPainting);
  } catch (error) {
    console.error('❌ Error saving paintings data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET - Fetch Paintings
app.get('/getPaintingsdata', async (req, res) => {
  try {
    const paintings = await Paintings.find();
    res.status(200).json(paintings);
  } catch (error) {
    console.error('❌ Error fetching paintings data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// PUT - Update Paintings
app.put('/updatePaintingsdata/:_id', async (req, res) => {
  const { _id } = req.params;
  if (!isValidObjectId(_id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const updateData = await Paintings.updateOne(
      { _id: new mongoose.Types.ObjectId(_id) },
      { $set: req.body }
    );

    if (updateData.modifiedCount === 0) {
      return res.status(404).json({ message: 'No changes made' });
    }

    res.status(200).json({ message: 'Data updated successfully' });
  } catch (error) {
    console.error('❌ Error updating paintings data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// DELETE - Remove Paintings
app.delete('/deletePaintingsData/:_id', async (req, res) => {
  const { _id } = req.params;
  if (!isValidObjectId(_id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const deleteData = await Paintings.deleteOne({ _id: new mongoose.Types.ObjectId(_id) });

    if (deleteData.deletedCount === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting paintings data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// POST - Create Handicraft
app.post('/postHandicraftdata', async (req, res) => {
  try {
    const newHandicraft = new Handicrafts(req.body); 
    const savedHandicraft = await newHandicraft.save();
    res.status(201).json(savedHandicraft); 
  } catch (error) {
    console.error('❌ Error saving Handicraft data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET - Fetch Handicraft
app.get('/getHandicraftdata', async (req, res) => {
  try {
    const handicraft = await Handicrafts.find(); 
    res.status(200).json(handicraft); 
  } catch (error) {
    console.error('❌ Error fetching Handicraft data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// PUT - Update Handicraft
app.put('/updateHandicraftdata/:_id', async (req, res) => {
  const { _id } = req.params;
  if (!isValidObjectId(_id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const updateData = await Handicrafts.updateOne(
      { _id: new mongoose.Types.ObjectId(_id) },
      { $set: req.body }
    );

    if (updateData.modifiedCount === 0) {
      return res.status(404).json({ message: 'No changes made' });
    }

    res.status(200).json({ message: 'Data updated successfully' });
  } catch (error) {
    console.error('❌ Error updating Handicraft data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// DELETE - Remove Handicraft
app.delete('/deleteHandicraftData/:_id', async (req, res) => {
  const { _id } = req.params;
  if (!isValidObjectId(_id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const deleteData = await Handicrafts.deleteOne({ _id: new mongoose.Types.ObjectId(_id) });

    if (deleteData.deletedCount === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting Handicraft data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

//  POST - Create Textiles
app.post('/postTextilesdata', async (req, res) => {
  try {
    const newTextile = new Textiles(req.body); 
    const savedTextile = await newTextile.save();
    res.status(201).json(savedTextile);
  } catch (error) {
    console.error('❌ Error saving Textiles data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET - Fetch Textiles
app.get('/getTextilesdata', async (req, res) => { 
  try {
    const textiles = await Textiles.find(); 
    res.status(200).json(textiles); 
  } catch (error) {
    console.error('❌ Error fetching Textiles data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

//  PUT - Update Textiles
app.put('/updateTextilesdata/:_id', async (req, res) => {
  const { _id } = req.params;
  if (!isValidObjectId(_id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const updateData = await Textiles.updateOne(
      { _id: new mongoose.Types.ObjectId(_id) },
      { $set: req.body }
    );

    if (updateData.modifiedCount === 0) {
      return res.status(404).json({ message: 'No changes made' });
    }

    res.status(200).json({ message: 'Data updated successfully' });
  } catch (error) {
    console.error('❌ Error updating Textiles data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// DELETE - Remove Textiles
app.delete('/deleteTextilesData/:_id', async (req, res) => {
  const { _id } = req.params;
  if (!isValidObjectId(_id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const deleteData = await Textiles.deleteOne({ _id: new mongoose.Types.ObjectId(_id) });

    if (deleteData.deletedCount === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting Textiles data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start Server
app.listen(8000, () => console.log('🚀 Server is running on port 8000'));
