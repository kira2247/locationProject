export class Location {
  name: string;
  address: string;
  phoneNumber: string;
  workTime: string;
  goods: string;
  username:string;
  locationId?:string;
  userId?:string;

  constructor(name:string, address:string, phoneNumber:string, workTime:string, goods: string,username:string,locationId?:string,userId?:string){
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.workTime = workTime;
    this.goods = goods;
    this.locationId= locationId;
    this.userId =userId;
    this.username= username;
  }
}
