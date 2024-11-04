import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

function AgregarTarea() {
  const items = [
    { key: "new", label: "Agregar tarea" },
    { key: "copy", label: "Editar tarea" },
    { key: "delete", label: "Eliminar tarea" }
  ];

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      margin:"20px",
    }}>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Acción</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions" items={items}>
          {(item) => (
            <DropdownItem
              key={item.key}
              color={item.key === "delete" ? "danger" : "default"}
              className={item.key === "delete" ? "text-danger" : ""}
            >
              {item.label}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default AgregarTarea;
