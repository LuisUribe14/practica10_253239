/*
  Warnings:

  - Added the required column `descripcion` to the `clases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clases` ADD COLUMN `descripcion` VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE `horarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `claseId` INTEGER NOT NULL,
    `dia` VARCHAR(50) NOT NULL,
    `horaInicio` VARCHAR(5) NOT NULL,
    `cupoMaximo` INTEGER NOT NULL,
    `entrenador` VARCHAR(255) NOT NULL,

    INDEX `horarios_claseId_idx`(`claseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `horarios` ADD CONSTRAINT `horarios_claseId_fkey` FOREIGN KEY (`claseId`) REFERENCES `clases`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
