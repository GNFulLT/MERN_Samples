/*
  Warnings:

  - You are about to alter the column `categoryName` on the `category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(31)` to `VarChar(23)`.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `categoryName` VARCHAR(23) NOT NULL;
