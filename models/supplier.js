const fs = require('fs')
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'suppliers.json'
)

const getSuppliersFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([])
        } else {
            cb(JSON.parse(fileContent))
        }
    })
}

module.exports = class Supplier {
    constructor(title, url, description, category) {
        this.title = title
        this.url = url
        this.description = description
        this.category = category
    }

    save() {
        getSuppliersFromFile(suppliers => {
            suppliers.push(this);
            fs.writeFile(p, JSON.stringify(suppliers), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getSuppliersFromFile(cb)
    }

    static fetchByCategory(category, cb) {
        let sorted
        getSuppliersFromFile(suppliers => {
            cb(
                suppliers.filter(item => {
                    if(item.category.includes(category)){
                        return item
                    }   
                })
            )
        })
    }
}