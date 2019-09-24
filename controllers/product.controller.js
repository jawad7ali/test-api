const Product = require('../models/product.model');

//List Records
exports.list = function (req, res) {
    Product.find( (err,supper) =>{
		if(err){
			res.send(err);
		}
		else{
			res.send(supper);
		}
			
	})
};

//Create Record
exports.product_create = function (req, res, next) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

//Delete Record
exports.product_delete=  (req,res) => {
	Product.findByIdAndRemove(req.params.id, (err,product)=>{
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "delete one   successfully",
				product
			})
		}
	})
}

//Update Record
exports.update_product = (req,res)=>{

	Product.findByIdAndUpdate(req.params.id, req.body.updateData,{ new :true}, (err,product)=>{
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({ 
				product
			})
		}
	})
}

//Get record by id
exports.get_product_by_id = (req,res)=>{	 
	Product.findById(req.params.id, (err,product)=>{
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "get one product successfully",
				product
			})
		}
	})
}