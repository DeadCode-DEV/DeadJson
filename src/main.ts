import { existsSync, readFileSync, writeFileSync } from "fs";
import { Path, space, DataOBJ, DeadJSONInterface } from "./typings/data";
namespace Dead {
  export class DeadJSON<DataType> implements DeadJSONInterface {
    private path!: string;
    private data: DataOBJ = {};
    private TypeData!: DataType;
    constructor(path: Path, Types: DataType) {
      if (!path.path) return;
      try {
        if (!existsSync(path.path)) {
          writeFileSync(path.path, JSON.stringify({}));
        }
        var read: any = readFileSync(path.path, path.options);
        const data = JSON.parse(read);
        this.data = data;
        this.TypeData = data;
        this.path = path.path;
      } catch (err: any) {
        if (!read) {
          writeFileSync(path.path, JSON.stringify({}));
        } else {
          throw new Error(err);
        }
      }
    }
    add(key: string, Value: any) {
      this.data[key] = Value;
      return this;
    }
    delete(key: keyof DataType) {
      delete this.TypeData[key];
      return this;
    }
    get() {
      return this.TypeData as DataType
    }
    save(space: space) {
      if (!space.spaces) {
        space.spaces = 2;
      }
      writeFileSync(this.path, JSON.stringify(this.data, null, space.spaces));
      return this;
    }
  }
}

export default Dead.DeadJSON;
