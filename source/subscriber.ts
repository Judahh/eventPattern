class Subscriber {
  private _name: string;

  get name(): string {
    return this._name;
  }
  constructor(name: string) {
    this._name = name;
  }

  read(title: string, content: string): Promise<boolean> {
    console.log('Eu ' + this.name + ' leio:');
    return new Promise((resolve) => {
      console.log(title);
      console.log(content);
      console.log();
      resolve(true);
    });
  }
}
export { Subscriber };
