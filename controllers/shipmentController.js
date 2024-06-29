const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all shipments
exports.getAllShipments = async (req, res) => {
  try {
    const shipments = await prisma.shipment.findMany({
      include: {
        exporter: true,
        forwarder: true,
      },
    });
    res.json(shipments);
  } catch (error) {
    console.error('Error fetching shipments:', error);
    res.status(500).json({ error: 'Error fetching shipments' });
  }
};

// Get shipment by ID
exports.getShipmentById = async (req, res) => {
  const { id } = req.params;

  try {
    const shipment = await prisma.shipment.findUnique({
      where: { id: parseInt(id) },
      include: {
        exporter: true,
        forwarder: true,
      },
    });

    if (!shipment) {
      return res.status(404).json({ error: 'Shipment not found' });
    }

    res.json(shipment);
  } catch (error) {
    console.error('Error fetching shipment:', error);
    res.status(500).json({ error: 'Error fetching shipment' });
  }
};
