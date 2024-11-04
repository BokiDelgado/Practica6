import {Input} from "@nextui-org/react";

function NombreU() {
  return (
    <Input
      isClearable
      type="text"
      label="Usuario"
      variant="bordered"
      placeholder="Username"
      defaultValue="Boki Delgado"
      onClear={() => console.log("input cleared")}
      className="max-w-xs"
    />
  );
}
export default NombreU;