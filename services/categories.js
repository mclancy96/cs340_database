/**
 * This holds the queries for categories
 */

const db = require('./db');

async function getCategories() {
    const categories = await db.query(
        `SELECT * FROM Class_Categories`
    );

    return categories;
}

async function getCategoryById(categoryId) {
    const category = await db.query(
        `SELECT * FROM Class_Categories WHERE class_category_id = ${categoryId}`
    );

    return category;
}

async function createCategory(categoryObject) {
    const updateStatus = await db.query(
        `INSERT INTO Class_Categories (name)
        VALUES("${categoryObject.name}");`
    );
    return updateStatus;
}

async function updateCategory(categoryId, categoryObject) {
    const updateStatus = await db.query(
        `UPDATE Class_Categories
        SET name = "${categoryObject.name}"
        WHERE class_category_id = "${categoryId}";`
    );
    return updateStatus;
}

async function deleteCategory(categoryId) {
    const updateStatus = await db.query(
        `DELETE FROM Class_Categories WHERE class_category_id = "${categoryId}";`
    );
    return updateStatus;
}


module.exports = {
    getCategories,
    getCategoryById,
    updateCategory,
    createCategory,
    deleteCategory
}