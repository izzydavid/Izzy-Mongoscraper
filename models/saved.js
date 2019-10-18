var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new SavedSchema object
// This is similar to a Sequelize model
var SavedSchema = new Schema({
  // `saved` is of type Boolean
  saved: Boolean
});

// This creates our model from the above schema, using mongoose's model method
var Saved = mongoose.model("Saved", SavedSchema);

// Export the Saved model
module.exports = Saved;
