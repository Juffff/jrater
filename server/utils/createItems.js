module.exports = (db) => {
    // Create test Item
    db.listItems().then((data) => {
        if (data.length === 0) {
            db.createItem({
                name: 'Secretary',
                rate: 0,
                count: 0,
                description: 'Secretary department'
            });
        }
    });
};
