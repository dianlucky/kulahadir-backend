/*
  Warnings:

  - You are about to drop the column `level_id` on the `accounts` table. All the data in the column will be lost.
  - You are about to alter the column `check_in` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `check_out` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `day` on the `daily_task_employees` table. All the data in the column will be lost.
  - You are about to drop the column `employee_id` on the `daily_task_employees` table. All the data in the column will be lost.
  - You are about to drop the column `task_id` on the `daily_task_employees` table. All the data in the column will be lost.
  - You are about to drop the column `task` on the `daily_tasks` table. All the data in the column will be lost.
  - You are about to alter the column `birth_date` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `date` on the `salaries` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the `employee_loans` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `leaves` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `levels` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `paid_leaves` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `salary_deductions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `level` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `daily_task_employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_employee_id` to the `daily_task_employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_code` to the `daily_tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_name` to the `daily_tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `salaries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_time` to the `schedules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shift_code` to the `schedules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_time` to the `schedules` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `accounts_level_id_fkey`;

-- DropForeignKey
ALTER TABLE `daily_task_employees` DROP FOREIGN KEY `daily_task_employees_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `daily_task_employees` DROP FOREIGN KEY `daily_task_employees_task_id_fkey`;

-- DropForeignKey
ALTER TABLE `employee_loans` DROP FOREIGN KEY `employee_loans_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `leaves` DROP FOREIGN KEY `leaves_schedule_id_fkey`;

-- DropForeignKey
ALTER TABLE `paid_leaves` DROP FOREIGN KEY `paid_leaves_schedule_id_fkey`;

-- DropForeignKey
ALTER TABLE `salary_deductions` DROP FOREIGN KEY `salary_deductions_employee_id_fkey`;

-- DropIndex
DROP INDEX `accounts_level_id_fkey` ON `accounts`;

-- DropIndex
DROP INDEX `daily_task_employees_employee_id_fkey` ON `daily_task_employees`;

-- DropIndex
DROP INDEX `daily_task_employees_task_id_fkey` ON `daily_task_employees`;

-- AlterTable
ALTER TABLE `accounts` DROP COLUMN `level_id`,
    ADD COLUMN `level` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `attendances` ADD COLUMN `attendance_lat` VARCHAR(255) NULL,
    ADD COLUMN `attendance_long` VARCHAR(255) NULL,
    MODIFY `check_in` DATETIME NOT NULL,
    MODIFY `check_out` DATETIME NULL;

-- AlterTable
ALTER TABLE `daily_task_employees` DROP COLUMN `day`,
    DROP COLUMN `employee_id`,
    DROP COLUMN `task_id`,
    ADD COLUMN `status` VARCHAR(25) NOT NULL,
    ADD COLUMN `task_employee_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `daily_tasks` DROP COLUMN `task`,
    ADD COLUMN `task_code` VARCHAR(10) NOT NULL,
    ADD COLUMN `task_name` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `employees` ADD COLUMN `created_at` TIMESTAMP NOT NULL,
    ADD COLUMN `profile_pic` VARCHAR(200) NULL,
    ADD COLUMN `status` VARCHAR(100) NOT NULL,
    MODIFY `birth_date` DATETIME NULL,
    MODIFY `phone` VARCHAR(20) NULL;

-- AlterTable
ALTER TABLE `salaries` ADD COLUMN `cash_advance` INTEGER NULL,
    ADD COLUMN `created_at` TIMESTAMP NOT NULL,
    ADD COLUMN `note` TEXT NULL,
    MODIFY `bonus` INTEGER NULL,
    MODIFY `salary_deduction` INTEGER NULL,
    MODIFY `date` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `schedules` ADD COLUMN `end_time` VARCHAR(20) NOT NULL,
    ADD COLUMN `shift_code` VARCHAR(25) NOT NULL,
    ADD COLUMN `start_time` VARCHAR(20) NOT NULL;

-- DropTable
DROP TABLE `employee_loans`;

-- DropTable
DROP TABLE `leaves`;

-- DropTable
DROP TABLE `levels`;

-- DropTable
DROP TABLE `paid_leaves`;

-- DropTable
DROP TABLE `salary_deductions`;

-- CreateTable
CREATE TABLE `cash_advances` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` INTEGER NOT NULL,
    `date` DATE NOT NULL,
    `reason` TEXT NULL,
    `status` VARCHAR(100) NOT NULL,
    `employee_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `leave_requests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reason` TEXT NOT NULL,
    `type` VARCHAR(25) NOT NULL,
    `date` DATE NOT NULL,
    `status` VARCHAR(50) NOT NULL,
    `attachment` VARCHAR(255) NULL,
    `created_at` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `task_employees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `day` VARCHAR(20) NOT NULL,
    `employee_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notifications` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(50) NOT NULL,
    `message` TEXT NULL,
    `was_read` BOOLEAN NOT NULL,
    `created_at` TIMESTAMP NOT NULL,
    `employee_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cash_advances` ADD CONSTRAINT `cash_advances_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `task_employees` ADD CONSTRAINT `task_employees_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `daily_task_employees` ADD CONSTRAINT `daily_task_employees_task_employee_id_fkey` FOREIGN KEY (`task_employee_id`) REFERENCES `task_employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
