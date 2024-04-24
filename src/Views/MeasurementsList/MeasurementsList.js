import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { BASE_URL } from "../../apiConfig";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "measurementName",
    headerName: "Measurement Name",
    width: 300,
  },
  {
    field: "grade",
    headerName: "Grade",
    width: 90,
    editable: true,
  },
  {
    field: "created_at",
    headerName: "Created At",
    valueGetter: (value, row) => new Date(row.created_at).toLocaleString(),
    width: 200,
  },
  {
    field: "show",
    headerName: "Show",
    width: 110,
    renderCell: (params) => {
      return (
        <Button
          variant="outlined"
          onClick={() => {
            window.location.href = `/measurement-view/${params.row.id}`;
          }}
        >
          Show
        </Button>
      );
    },
  },
  {
    field: "measure",
    headerName: "Measure",
    width: 110,
    renderCell: (params) => {
      return (
        <Button
          variant="outlined"
          onClick={() => {
            window.location.href = `/measurement-view/${params.row.id}`;
          }}
        >
          Measure
        </Button>
      );
    },
  },
];

export const MeasurementsList = () => {
  const [measurements, setMeasurements] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/measurements`)
      .then((response) => response.json())
      .then((data) => {
        setMeasurements(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="app-main">
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={measurements}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
          loading={measurements.length === 0}
        />
      </Box>
    </main>
  );
};
