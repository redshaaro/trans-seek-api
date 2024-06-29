const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all warehouses
exports.getAllWarehouses = async (req, res) => {
  try {
    const warehouses = await prisma.warehouse.findMany();
    res.json(warehouses);
  } catch (error) {
    console.error('Error fetching warehouses:', error);
    res.status(500).json({ error: 'Error fetching warehouses' });
  }
};
