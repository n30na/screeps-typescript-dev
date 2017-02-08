
export function buildBody(bodySpec: any[][]): string[] {
  let body: string[] = new Array();
  for (let part in bodySpec) {
    for(let x = 0; x < part[1]; x++) {
      body.concat(part[0]);
    }
  }
  return body;
}
