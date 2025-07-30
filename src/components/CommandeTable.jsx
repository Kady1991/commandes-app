import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Checkbox, IconButton,
  Popover, TextField, Typography
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const headers = [
  "Part Number",
  "Description",
  "Serial Number",
  "Prix HTVA",
  "Prix TTC",
  "Quantity",
  "Type",
  "Date Facturation",
  "Date Livraison",
  "Statut",
  "Service Installed",
  "Person Name",
  "Mobil/Fixe",
  "Fournisseur",
  "INF"
];

function CommandeTable({ commandes, setCommandes }) {
  const [selected, setSelected] = useState([]);
  const [anchorEls, setAnchorEls] = useState({});
  const [filters, setFilters] = useState({});

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelected(commandes.map((_, index) => index));
    } else {
      setSelected([]);
    }
  };

  const handleClickFilter = (event, key) => {
    setAnchorEls({ ...anchorEls, [key]: event.currentTarget });
  };

  const handleCloseFilter = (key) => {
    setAnchorEls({ ...anchorEls, [key]: null });
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={selected.length === commandes.length && commandes.length > 0}
                indeterminate={selected.length > 0 && selected.length < commandes.length}
                onChange={handleSelectAll}
              />
            </TableCell>
            {headers.map((header) => (
              <TableCell key={header}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>{header}</span>
                  <IconButton size="small" onClick={(e) => handleClickFilter(e, header)}>
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </div>

                <Popover
                  open={Boolean(anchorEls[header])}
                  anchorEl={anchorEls[header]}
                  onClose={() => handleCloseFilter(header)}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <div style={{ padding: "1rem", width: "200px" }}>
                    <TextField
                      label={`Filtrer ${header}`}
                      variant="standard"
                      fullWidth
                      value={filters[header] || ""}
                      onChange={(e) => handleFilterChange(header, e.target.value)}
                      autoFocus
                    />
                  </div>
                </Popover>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {/* Pour l’instant : vide */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CommandeTable;
