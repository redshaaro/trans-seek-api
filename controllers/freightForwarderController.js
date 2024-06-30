const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all freight forwarders
exports.getAllFreightForwarders = async (req, res) => {
  try {
    const freightForwarders = await prisma.freightForwarder.findMany();
    res.json(freightForwarders);
  } catch (error) {
    console.error('Error fetching freight forwarders:', error);
    res.status(500).json({ error: 'Error fetching freight forwarders' });
  }
};
exports.getFreightForwarderById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const freightForwarder = await prisma.freightForwarder.findUnique({
        where: { id: parseInt(id) },
      });
  
      if (!freightForwarder) {
        return res.status(404).json({ error: 'Freight forwarder not found' });
      }
  
      res.json(freightForwarder);
    } catch (error) {
      console.error('Error fetching freight forwarder:', error);
      res.status(500).json({ error: 'Error fetching freight forwarder' });
    }
  };