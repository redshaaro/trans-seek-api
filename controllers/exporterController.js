const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Function to get an exporter by username
exports.getExporterByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const exporter = await prisma.exporter.findUnique({
      where: { username },
      include: { shipments: true }, // Adjust this if you want to include related data
    });

    if (!exporter) {
      return res.status(404).json({ error: 'Exporter not found' });
    }

    // Remove password before sending response
    const { password, ...exporterData } = exporter;

    res.json({ exporter: exporterData });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
