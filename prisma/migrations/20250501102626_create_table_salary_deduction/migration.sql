/*
  Warnings:

  - You are about to alter the column `date` on the `employee_loans` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `birth_date` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `employee_loans` MODIFY `date` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `employees` MODIFY `birth_date` DATETIME NOT NULL;

-- CreateTable
CREATE TABLE `salary_deductions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` INTEGER NOT NULL,
    `date` TIMESTAMP NOT NULL,
    `employee_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `salary_deductions` ADD CONSTRAINT `salary_deductions_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
