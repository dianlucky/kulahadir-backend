/*
  Warnings:

  - You are about to alter the column `check_in` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `check_out` on the `attendances` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `birth_date` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `attendances` MODIFY `check_in` DATETIME NOT NULL,
    MODIFY `check_out` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `employees` MODIFY `birth_date` DATETIME NOT NULL;

-- CreateTable
CREATE TABLE `salaries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` INTEGER NOT NULL,
    `bonus` INTEGER NOT NULL,
    `salary_deduction` INTEGER NOT NULL,
    `date` DATETIME NOT NULL,
    `employee_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `salaries` ADD CONSTRAINT `salaries_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
