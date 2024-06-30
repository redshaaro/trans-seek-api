const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Update subscription status for Exporter
exports.updateExporterSubscription = async (req, res) => {
  const { id } = req.params;
  const { isSubscribed } = req.body;

  try {
    const exporter = await prisma.exporter.update({
      where: { id: parseInt(id) },
      data: { isSubscribed },
    });

    res.json(exporter);
  } catch (error) {
    console.error('Error updating exporter subscription:', error);
    res.status(500).json({ error: 'Error updating exporter subscription' });
  }
};

// Update subscription status for Freight Forwarder
exports.updateFreightForwarderSubscription = async (req, res) => {
  const { id } = req.params;
  const { isSubscribed } = req.body;

  try {
    const forwarder = await prisma.freightForwarder.update({
      where: { id: parseInt(id) },
      data: { isSubscribed },
    });

    res.json(forwarder);
  } catch (error) {
    console.error('Error updating freight forwarder subscription:', error);
    res.status(500).json({ error: 'Error updating freight forwarder subscription' });
  }
};
