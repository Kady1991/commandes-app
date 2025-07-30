import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import AddCommande from "../components/AddCommande";
import CommandeTable from "../components/CommandeTable";

function CommandePage() {
  const [commandes, setCommandes] = useState([]);

  const handleAddCommande = (newCommande) => {
    setCommandes((prev) => [...prev, newCommande]);
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Gestion des commandes
      </Typography>

      {/* Formulaire d'ajout */}
      <AddCommande onAdd={handleAddCommande} />

      <Box mt={6}>
        <Typography variant="h6" gutterBottom>
          Liste des commandes ({commandes.length})
        </Typography>
                
        <CommandeTable commandes={commandes} setCommandes={setCommandes} />
      </Box>
    </Box>
  );
}

export default CommandePage;
