import { Item } from './item';

export class ItemFactory {

  // Uses the User model to create a new User
  create(itemInfo:any) {
    return new Item(itemInfo);
  }

}