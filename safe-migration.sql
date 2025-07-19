-- DropForeignKey
ALTER TABLE `items` DROP FOREIGN KEY `items_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `incoming_items` DROP FOREIGN KEY `incoming_items_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `incoming_details` DROP FOREIGN KEY `incoming_details_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `incoming_details` DROP FOREIGN KEY `incoming_details_item_id_fkey`;

-- DropForeignKey
ALTER TABLE `incoming_details` DROP FOREIGN KEY `incoming_details_incoming_id_fkey`;

-- DropForeignKey
ALTER TABLE `outgoing_items` DROP FOREIGN KEY `outgoing_items_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `outgoing_details` DROP FOREIGN KEY `outgoing_details_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `outgoing_details` DROP FOREIGN KEY `outgoing_details_item_id_fkey`;

-- DropForeignKey
ALTER TABLE `outgoing_details` DROP FOREIGN KEY `outgoing_details_outgoing_id_fkey`;

-- AlterTable
ALTER TABLE `employees` MODIFY `birth_date` datetime NULL,
    MODIFY `created_at` timestamp NOT NULL;

-- AlterTable
ALTER TABLE `cash_advances` MODIFY `created_at` timestamp NOT NULL;

-- AlterTable
ALTER TABLE `attendances` MODIFY `check_in` datetime NOT NULL,
    MODIFY `check_out` datetime NULL;

-- AlterTable
ALTER TABLE `leave_requests` MODIFY `created_at` timestamp NOT NULL;

-- AlterTable
ALTER TABLE `daily_task_employees` MODIFY `date` datetime NOT NULL;

-- AlterTable
ALTER TABLE `salaries` MODIFY `date` datetime NOT NULL,
    MODIFY `created_at` timestamp NOT NULL;

-- AlterTable
ALTER TABLE `notifications` MODIFY `created_at` timestamp NOT NULL;

-- DropTable
DROP TABLE `categories`;

-- DropTable
DROP TABLE `items`;

-- DropTable
DROP TABLE `incoming_items`;

-- DropTable
DROP TABLE `incoming_details`;

-- DropTable
DROP TABLE `outgoing_items`;

-- DropTable
DROP TABLE `outgoing_details`;

-- CreateIndex
CREATE UNIQUE INDEX `account_id` ON `employees`(`account_id` ASC);

-- CreateIndex
CREATE INDEX `schedules_employee_id_fkey` ON `schedules`(`employee_id` ASC);

-- CreateIndex
CREATE INDEX `cash_advances_employee_id_fkey` ON `cash_advances`(`employee_id` ASC);

-- CreateIndex
CREATE INDEX `attendances_schedule_id_fkey` ON `attendances`(`schedule_id` ASC);

-- CreateIndex
CREATE INDEX `leave_requests_employee_id_fkey` ON `leave_requests`(`employee_id` ASC);

-- CreateIndex
CREATE INDEX `task_employees_employee_id_fkey` ON `task_employees`(`employee_id` ASC);

-- CreateIndex
CREATE INDEX `task_employees_task_id_fkey` ON `task_employees`(`task_id` ASC);

-- CreateIndex
CREATE INDEX `daily_task_employees_task_employee_id_fkey` ON `daily_task_employees`(`task_employee_id` ASC);

-- CreateIndex
CREATE INDEX `salaries_employee_id_fkey` ON `salaries`(`employee_id` ASC);

-- CreateIndex
CREATE INDEX `notifications_employee_id_fkey` ON `notifications`(`employee_id` ASC);

