/*
  Warnings:

  - Added the required column `about` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `review` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Made the column `title` on table `movie` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `movie` ADD COLUMN `about` MEDIUMTEXT NOT NULL,
    ADD COLUMN `review` MEDIUMTEXT NOT NULL,
    MODIFY `title` VARCHAR(255) NOT NULL;
