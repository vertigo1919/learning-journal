exports.getOwners = (errors, db) => db.owners;

exports.getCatsByOwner = (errors, db, owner) => {
  const cats = db.catsByOwner[owner];
  if (cats) return cats;
  else errors.push(`404 - ${owner} not found`);
};
