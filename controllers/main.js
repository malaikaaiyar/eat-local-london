const Supplier = require('../models/supplier')

exports.getIndex = (req, res, next) => {
    res.render('index', {
        categories: [{
                title: 'fresh fruit and veg',
                imageUrl: 'assets/img/fruit-and-veg.png'
            },
            {
                title: 'meat and seafood',
                imageUrl: 'assets/img/meat.png'
            },
            {
                title: 'non-perishables',
                imageUrl: 'assets/img/non-perishables.png'
            },
            {
                title: 'perishable ingredients',
                imageUrl: 'assets/img/perishables.png'
            },
            {
                title: 'meal kits',
                imageUrl: 'assets/img/meal-kits.png'
            },
            {
                title: 'sustainable options',
                imageUrl: 'assets/img/sustainable.png'
            },
            {
                title: 'world foods',
                imageUrl: 'assets/img/world-foods.png'
            },
            {
                title: 'alcoholic beverages',
                imageUrl: 'assets/img/alcoholic-drinks.png'
            }
        ]
    })
}

exports.getCategory = (req, res, next) => {
    category = req.params.category
    Supplier.fetchByCategory(category, (result) => {
        // console.log(result)
        res.render('supplier-list', {
            title: category,
            suppliers: result
        })
    })
}

exports.getAddSupplier = (req, res, next) => {
    res.render('add-supplier')
}

exports.getAbout = (req, res, next) => {
    res.render('about')
}

exports.postAddSupplier = (req, res, next) => {
    const supplier = new Supplier(req.body.title, req.body.url, req.body.description, req.body.category)
    supplier.save()
    res.redirect('/add-supplier')
}