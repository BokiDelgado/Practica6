import {Input} from "@nextui-org/react";

function Pass() {
  return (
    <Input
      isClearable
      type="password"
      label="Contraseña"
      variant="bordered"
      placeholder="contraseña"
      defaultValue="*******"
      onClear={() => console.log("input cleared")}
      className="max-w-xs"
    />
  );
}
export default Pass;