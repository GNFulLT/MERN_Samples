/*
  Warnings:

  - Added the required column `rate` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `movie` ADD COLUMN `totalRate` DOUBLE NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `post` ADD COLUMN `rate` DOUBLE NOT NULL;
