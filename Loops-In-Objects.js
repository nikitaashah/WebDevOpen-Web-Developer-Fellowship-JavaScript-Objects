let olympicRecords = {
    athletics100Men: 'Justin Gatlin',
    athleticsLongJumpMen: 'Mike Powell'
};

// Get the object keys

for (let key in olympicRecords) {
    console.log(key);
}

// Get the corresponding values

for (let key1 in olympicRecords) {
    console.log(olympicRecords[key1]); // <== objectName[key]
}
