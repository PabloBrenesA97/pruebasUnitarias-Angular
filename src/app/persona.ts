const AGE_FOR_DRIVE = 18;
export class Persona {
  private age: number;

  setAge(age:number){
    this.age = age;
  }

  getAge(): number{
    return this.age;
  }

  canDrive(): boolean{
    return this.getAge() >= AGE_FOR_DRIVE;
  }
}
