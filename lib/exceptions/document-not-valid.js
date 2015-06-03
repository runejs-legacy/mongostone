import Exception from './exception';

export default class DocumentNotValid extends Exception {
  get code() { return 422; }
}