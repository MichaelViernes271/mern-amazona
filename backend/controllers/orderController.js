req.body.orderItems.map(async (item) => {
    const product = await Product.findById(item._id);
    product.countInStock -= item.quantity;
    await product.save();
});