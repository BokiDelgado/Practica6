import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    tarea: "Selenium",
    descrip: "Descargar selenium ",
    fecha: "04/11/24",
    estado: "Alto",
  },
  {
    key: "2",
    tarea: "React",
    descrip: "Estudiar hooks",
    fecha: "04/11/24",
    estado: "Alto",
  },
  {
    key: "3",
    tarea: "Documentacion EYU",
    descrip: "Diagrama SOA",
    fecha: "04/11/24",
    estado: "Alto",
  },
  {
    key: "4",
    tarea: "Tareas IoT",
    descrip: "Son para mañana video y escrito",
    fecha: "04/11/24",
    estado: "Alto",
  }
];

const columns = [
  {
    key: "tarea",
    label: "TO-DO",
  },
  {
    key: "descrip",
    label: "Descripción",
  },
  {
    key: "fecha",
    label: "Fecha",
  },
  {
    key: "estado",
    label: "prioridad",
  }
];

function TablaTareas() {
  return (
    <div style={{margin: "30px"}}>
        <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
  );
}
export default TablaTareas;