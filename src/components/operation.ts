export abstract class operation {
  protected name: string;

  public abstract run(creep: Creep, params: any): number;
}
