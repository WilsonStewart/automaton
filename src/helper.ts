export function splitModuleAndFunction(moduleActionString: string) {
  return {
    module: moduleActionString.split(":")[0],
    action: moduleActionString.split(":")[0],
  };
}
