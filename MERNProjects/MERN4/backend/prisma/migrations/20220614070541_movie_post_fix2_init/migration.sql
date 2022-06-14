/*
  Warnings:

  - Added the required column `categoryID` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `movie` ADD COLUMN `categoryID` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryName` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Movie` ADD CONSTRAINT `Movie_categoryID_fkey` FOREIGN KEY (`categoryID`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
