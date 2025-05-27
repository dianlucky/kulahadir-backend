/*
  Warnings:

  - You are about to alter the column `check_in` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `check_out` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `status` on the `employees` table. All the data in the column will be lost.
  - You are about to alter the column `birth_date` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `created_at` on the `leave_requests` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `created_at` on the `notifications` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `date` on the `salaries` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `salaries` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - Added the required column `status` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `accounts` ADD COLUMN `status` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `attendances` MODIFY `check_in` DATETIME NOT NULL,
    MODIFY `check_out` DATETIME NULL;

-- AlterTable
ALTER TABLE `employees` DROP COLUMN `status`,
    MODIFY `birth_date` DATETIME NULL,
    MODIFY `created_at` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `leave_requests` MODIFY `created_at` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `notifications` MODIFY `created_at` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `salaries` MODIFY `date` DATETIME NOT NULL,
    MODIFY `created_at` TIMESTAMP NOT NULL;
