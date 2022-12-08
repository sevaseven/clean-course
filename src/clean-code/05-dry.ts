type Size = '' |'S' |'M' | 'L' | 'XL' |'XXL';

class Product{
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}

    isProductValid(): boolean{
        for (const key in this) {
            switch (typeof this[key]) {
              case 'string':
                  if ((<string>this[key]).length === 0) throw new Error(`${key} is required`);
                  break;
                  case 'number':
                      if (this[key] === 0) throw new Error(`${key} is zero`);
                      break;
              default:
                throw new Error('Type not supported');
                  break;
            }
          }
          return true;
    }

    toString(){
        //Sin dry 
        // if (this.name.length === 0) throw new Error('Name is required');
        // if (this.price === 0) throw new Error('Proce is zero');
        // if (this.size.length === 0) throw new Error('Size is required');

        if (!this.isProductValid) return;
        return `${this.name} (${this.price}) , ${this.size}`;
    }
    // getFinalPrice(): number{
    //     return this.price * (1 - this.discount);
    // }
}

(() => {
    const bluePants = new Product('Blue Pants', 0, 'M');
    console.log(bluePants.toString())
})()