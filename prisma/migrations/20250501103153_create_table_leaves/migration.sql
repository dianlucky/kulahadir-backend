/*
  Warnings:

  - You are about to alter the column `check_in` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `check_out` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `date` on the `employee_loans` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `birth_date` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `date` on the `salary_deductions` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `attendances` MODIFY `check_in` DATETIME NOT NULL,
    MODIFY `check_out` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `employee_loans` MODIFY `date` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `employees` MODIFY `birth_date` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `salary_deductions` MODIFY `date` TIMESTAMP NOT NULL;

-- CreateTable
CREATE TABLE `leaves` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reason` TEXT NOT NULL,
    `status` VARCHAR(50) NOT NULL,
    `schedule_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `leaves` ADD CONSTRAINT `leaves_schedule_id_fkey` FOREIGN KEY (`schedule_id`) REFERENCES `schedules`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
