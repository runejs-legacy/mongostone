import Exception from './exception';

export default class InvalidValue extends Exception {
  get code() { return 422; }
}