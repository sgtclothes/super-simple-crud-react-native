'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MyProductsSchema extends Schema {
  up () {
    this.create('my_products', (table) => {
			table.increments()
			table.string('name')
			table.double('price')
			table.string('image')
			table.text('desc')
			table.integer('qty')
      table.timestamps()
    })
  }

  down () {
    this.drop('my_products')
  }
}

module.exports = MyProductsSchema
