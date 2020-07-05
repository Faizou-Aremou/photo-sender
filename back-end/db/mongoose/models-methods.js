

module.exports.save = (collection) => {
    collection.save((err) => {
        if (err) console.log(error);
    })
}