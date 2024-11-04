import {Input} from "@nextui-org/react";

function Email() {
  return (
    <Input
      isClearable
      type="email"
      label="Email"
      variant="bordered"
      placeholder="Enter your email"
      defaultValue="correo@gmail.com"
      onClear={() => console.log("input cleared")}
      className="max-w-xs"
    />
  );
}
export default Email;