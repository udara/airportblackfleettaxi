const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transferSchema = new Schema(
    {
        pickup_address: {
            type: String,
            trim: true,
            required: "Pickup address is required"
          },
        drop_address: {
            type: String,
            trim: true,
            required: "Drop address is required"
          },
        name: {
            type: String,
            trim: true,
            required: "Name is required"
          },
        email: {
            type: String,
            trim: true,
            required: "Email is required"
          },
        mobile: {
            type: String,
            trim: true,
            required: "Mobile phone is required"
          },
        pickup_date: {
            type: String,
            trim: true,
            required: "Pickup date is required"
          },
        pickup_time: {
            type: String,
            trim: true,
            required: "pickup time is required"
          },
      }
);

const Transfer = mongoose.model("Transfer", transferSchema);

module.exports = Transfer;
