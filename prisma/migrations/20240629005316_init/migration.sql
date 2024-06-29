-- CreateTable
CREATE TABLE "Exporter" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "typeOfGoods" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "isSubscribed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Exporter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FreightForwarder" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "isSubscribed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "FreightForwarder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipment" (
    "id" SERIAL NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "dateOfDispatch" TIMESTAMP(3) NOT NULL,
    "timeToShip" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "dateOfArrival" TIMESTAMP(3) NOT NULL,
    "exporterId" INTEGER,
    "forwarderId" INTEGER,

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShipmentsOrderedByUser" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "shipmentId" INTEGER NOT NULL,

    CONSTRAINT "ShipmentsOrderedByUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "productType" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "freightForwarderId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Truck" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,

    CONSTRAINT "Truck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Warehouse" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "inventory" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,

    CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Exporter_username_key" ON "Exporter"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Exporter_email_key" ON "Exporter"("email");

-- CreateIndex
CREATE UNIQUE INDEX "FreightForwarder_username_key" ON "FreightForwarder"("username");

-- CreateIndex
CREATE UNIQUE INDEX "FreightForwarder_email_key" ON "FreightForwarder"("email");

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_exporterId_fkey" FOREIGN KEY ("exporterId") REFERENCES "Exporter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_forwarderId_fkey" FOREIGN KEY ("forwarderId") REFERENCES "FreightForwarder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_freightForwarderId_fkey" FOREIGN KEY ("freightForwarderId") REFERENCES "FreightForwarder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
