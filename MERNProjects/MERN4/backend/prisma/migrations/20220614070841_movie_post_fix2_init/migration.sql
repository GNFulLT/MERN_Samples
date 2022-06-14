/*
  Warnings:

  - You are about to alter the column `categoryName` on the `category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(32)`.
  - A unique constraint covering the columns `[categoryName]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `categoryName` VARCHAR(32) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Category_categoryName_key` ON `Category`(`categoryName`);
