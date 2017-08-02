module.exports = (db) => {
    // Create test Item
  db.listItems().then((data) => {
    if (data.length === 0) {
      db.createItem({
        name: 'Secretary',
        rate: 4.5,
        count: 10,
        description: 'Secretary department'
      });

      db.createItem({
        name: 'Administrators',
        rate: 5,
        count: 100,
        description: 'Administrators department'
      });

      db.createItem({
        name: 'Sales',
        rate: 4.1,
        count: 90,
        description: 'Sales department'
      });

      db.createItem({
        name: 'Products',
        rate: 2.6,
        count: 900,
        description: 'Products department'
      });


      // TODO: kill console.log and this test module
    }
  });
};
