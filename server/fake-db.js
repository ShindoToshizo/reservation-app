const Product = require('./model/product');

class FakeDb{
  constructor(){
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of best screens',
        heading1: 'サンプルテキスト',
        heading2: 'サンプルテキスト',
        heading3: 'サンプルテキスト',
        headingtext: 'サンプルテキスト',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of best screens',
        heading1: 'サンプルテキスト',
        heading2: 'サンプルテキスト',
        heading3: 'サンプルテキスト',
        headingtext: 'サンプルテキスト',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: 'サンプルテキスト',
        heading2: 'サンプルテキスト',
        heading3: 'サンプルテキスト',
        headingtext: 'サンプルテキスト',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone s',
        price: 199,
        description: '',
        heading1: 'サンプルテキスト',
        heading2: 'サンプルテキスト',
        heading3: 'サンプルテキスト',
        headingtext: 'サンプルテキスト',
      },
    ]
  }
  async initDb(){
    await this.cleanDb();
    this.pushProductsToDb();
  }

  async cleanDb(){
    await Product.deleteMany({});
  }

  pushProductsToDb(){
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product);
        newProduct.save();
      }
    );
  }

  seeDb() {
    this.pushProductsToDb();
  }
}

module.exports = FakeDb;