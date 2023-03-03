export class Product{
  public id !: number;
  public  name !: string;
  public img !: string;
  public price !: number;
  public status !: boolean;


  constructor(id: number,name: string, img: string, price: number , status: boolean) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.status = status
  }

}
