import Exception from './exception';

export default class DocumentNotFound extends Exception {
  get code() { return 404; }
}