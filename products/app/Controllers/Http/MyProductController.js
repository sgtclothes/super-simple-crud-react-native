'use strict'

const MyProduct = use('App/Models/MyProduct')

class MyProductController {

	async index ({request}) {
		const { limit } = request.get()
	 return await MyProduct.query().select('*').limit(limit).fetch()
	 }
 
	async insert ({ request }) {
		const { name, price, image, desc, qty } = request.post()
		return await MyProduct.query().insert(request.post())
	 }

	 async show ({params, response}) {
		const product = await MyProduct.find(params.id)

		return response.json(product)
	}

	async delete ({params, response}) {
		const product = await MyProduct.find(params.id)
		if (!product) {
			return response.status(404).json({data: 'Resource not found'})
		}
		await product.delete()

		return response.status(204).json(null)
	}

	async update ({params, request, response}) {
		const productInfo = request.only(['name', 'price', 'image', 'desc', 'qty'])

		const product = await MyProduct.find(params.id)
		if (!product) {
			return response.status(404).json({data: 'Resource not found'})
		}
		product.name = productInfo.name
		product.price = productInfo.price
		product.image = productInfo.image
		product.desc = productInfo.desc
		product.qty = productInfo.qty

		await product.save()

		return response.status(200).json(product)
	}

}

module.exports = MyProductController
