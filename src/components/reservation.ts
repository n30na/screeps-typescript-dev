
export class reservation {

  private constructor(id :string) {

  }


  static getReservationById(id : string) {
    return new reservation(id);
  }
}
