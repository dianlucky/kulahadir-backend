/*
  Warnings:

  - You are about to alter the column `check_in` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `check_out` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `employees_account_id_fkey`;

-- DropIndex
DROP INDEX `employees_account_id_key` ON `employees`;

-- AlterTable
ALTER TABLE `attendances` MODIFY `check_in` DATETIME NOT NULL,
    MODIFY `check_out` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `employee_loans` MODIFY `date` DATE NOT NULL;

-- AlterTable
ALTER TABLE `employees` MODIFY `birth_date` DATETIME NOT NULL;

-- CreateTable
CREATE TABLE `daily_tasks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `task` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

