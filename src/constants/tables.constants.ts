import { GridColDef } from "@mui/x-data-grid";

export const MASTER_COLUMN_ITEM: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 1.5,
    minWidth: 10,
  },
  {
    field: "itemCode",
    headerName: "Code",
    flex: 0.5,
    minWidth: 80,
  },
  {
    field: "itemName",
    headerName: "Name",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 80,
  },
  {
    field: "cost",
    headerName: "Cost",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "updatedBy",
    headerName: "Updated By",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 120,
  },
  {
    field: "moodifiedDate",
    headerName: "Modified Date",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 100,
  },
];
