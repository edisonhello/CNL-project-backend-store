
export default class Store {
  constructor({ id, phone, password, name, address, qrcode }) {
    this.id = id;
    this.phone = phone;
    this.password = password;
    this.name = name;
    this.address = address;
    this.qrcode = qrcode;
  }
}