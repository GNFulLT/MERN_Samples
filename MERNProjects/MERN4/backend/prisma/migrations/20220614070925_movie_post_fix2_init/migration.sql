/*
  Warnings:

  - You are about to alter the column `categoryName` on the `category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(32)` to `VarChar(31)`.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `categoryName` VARCHAR(31) NOT NULL;
