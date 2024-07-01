// Import the Express module
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const shipmentRoutes = require("./routes/shipmentRoutes");
const truckRoutes = require("./routes/truckRoutes");
const warehouseRoutes = require("./routes/warehouseRoutes");
const freightForwarderRoutes = require("./routes/freightForwarderRoutes"); // Add this line
const subscriptionRoutes = require("./routes/subscriptionRoutes"); // Add this line
const exporterRoutes = require("./routes/exporterRouter"); // Adjust the path as necessary
// Create an instance of Express
const app = express();

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/api", shipmentRoutes);
app.use("/api", truckRoutes);
app.use("/api", warehouseRoutes);
app.use("/api", freightForwarderRoutes);
app.use("/api", subscriptionRoutes);
app.use("/api", exporterRoutes);
// Export the app instance
module.exports = app;
