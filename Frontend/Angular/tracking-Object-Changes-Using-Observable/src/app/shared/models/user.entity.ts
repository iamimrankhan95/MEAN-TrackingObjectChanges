export class User {
  public id!: number;
  public name!: string;
  public status: Status = new Status();
}
export class Status {
  public id!: number;
  public activeStatus!: string;
  public color!: string;
}
export enum StatusList {
  ACTIVE = 'Active',
  OFFLINE = 'Offline',
  BUSY = 'Busy',
}
