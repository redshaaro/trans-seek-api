const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all trucks
exports.getAllTrucks = async (req, res) => {
  try {
    const trucks = await prisma.truck.findMany();
    res.json(trucks);
  } catch (error) {
    console.error('Error fetching trucks:', error);
    res.status(500).json({ error: 'Error fetching trucks' });
  }
};
