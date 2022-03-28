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
export const StatusList = {
  ACTIVE: {
    "name": "ACTIVE",
    "color": "#4287f5"
  },
  OFFLINE: {
    "name": "OFFLINE",
    "color": "#c4c4c4"
  },
  BUSY: {
    "name": "BUSY",
    "color": "#f20707"
  },
}
