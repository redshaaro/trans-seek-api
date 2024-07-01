const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const JWT_SECRET = 'z@rurh##n12121*$*@!'; // Replace with your secret

// Helper function to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ userId: user.id, userType: user.userType }, JWT_SECRET, {
    expiresIn: '1h',
  });
};

// Signup function for Exporter
exports.exporterSignup = async (Areq, res) => {
  const { username, email, password, companyName, typeOfGoods, country, phoneNumber } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const exporter = await prisma.exporter.create({
      data: {
        username,
        email,
        password: hashedPassword,
        companyName,
        typeOfGoods,
        country,
        phoneNumber,
      },
    });

    const token = generateToken(exporter);
    res.json({ token, user: exporter });
  } catch (error) {
    res.status(400).json({ error: 'Error creating user' });
  }
};

// Signup function for FreightForwarder
exports.freightForwarderSignup = async (req, res) => {
  const { username, email, password, companyName, country, phoneNumber, experience } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const forwarder = await prisma.freightForwarder.create({
      data: {
        username,
        email,
        password: hashedPassword,
        companyName,
        country,
        phoneNumber,
        experience,
      },
    });

    const token = generateToken(forwarder);
    res.json({ token, user: forwarder });
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Error creating user' });
  }
};

// Login function
exports.login = async (req, res) => {
  const { email, password, userType } = req.body;

  try {
    let user;
    if (userType === 'exporter') {
      user = await prisma.exporter.findUnique({ where: { email } });
    } else if (userType === 'freightForwarder') {
      user = await prisma.freightForwarder.findUnique({ where: { email } });
    }

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = generateToken(user);
    // Remove password before sending response
    const { password: userPassword, ...userData } = user;
    res.json({ token, user: userData });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};