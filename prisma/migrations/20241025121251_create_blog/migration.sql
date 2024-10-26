-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);
