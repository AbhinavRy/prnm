const mongoose = require('mongoose');

const SchemesSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
    unique: true,
  },
  link: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: "No Category",
    required: true
  }
});

module.exports = Schemes = mongoose.model('schemes', SchemesSchema);
