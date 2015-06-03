import Exception from './exception';

export default class InvalidField extends Exception {
  get code() { return 422; }
}