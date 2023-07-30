export class Generator {
  private static * id() {
    let id = 0;
    while(true) {
      yield id++;
    }
  }

  private static idController = Object.assign(Generator.id(), {
    oldValue: 0
  });

  static generateId(old = false) {
    if(old) {
      return Generator.idController.oldValue;
    }

    const id = Generator.idController.next();

    if(!id.done) {
      Generator.idController.oldValue = id.value;
      return id.value;
    }

    Generator.idController.oldValue = -1;
    return -1;
  }
}