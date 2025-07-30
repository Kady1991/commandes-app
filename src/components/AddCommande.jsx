import React, { useState } from "react";
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Typography,
  Grid,
  Paper
} from "@mui/material";

const steps = ["Informations générales", "Dates et livraison", "Contact et service"];

function AddCommande({ onAdd }) {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    partNumber: "",
    description: "",
    serialNumber: "",
    prixHTVA: "",
    prixTTC: "",
    quantity: "",
    type: "",
    dateFacturation: "",
    dateLivraison: "",
    statut: "",
    serviceInstalled: "",
    personName: "",
    contactType: "",
    fournisseur: "",
    inf: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      onAdd(formData);
      setFormData({
        partNumber: "",
        description: "",
        serialNumber: "",
        prixHTVA: "",
        prixTTC: "",
        quantity: "",
        type: "",
        dateFacturation: "",
        dateLivraison: "",
        statut: "",
        serviceInstalled: "",
        personName: "",
        contactType: "",
        fournisseur: "",
        inf: "",
      });
      setActiveStep(0);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid item xs={6}><TextField label="Part Number" name="partNumber" value={formData.partNumber} onChange={handleChange} fullWidth /></Grid>
            <Grid item xs={6}><TextField label="Description" name="description" value={formData.description} onChange={handleChange} fullWidth /></Grid>
            <Grid item xs={6}><TextField label="Serial Number" name="serialNumber" value={formData.serialNumber} onChange={handleChange} fullWidth /></Grid>
            <Grid item xs={6}><TextField label="Prix HTVA" name="prixHTVA" value={formData.prixHTVA} onChange={handleChange} fullWidth /></Grid>
            <Grid item xs={6}><TextField label="Prix TTC" name="prixTTC" value={formData.prixTTC} onChange={handleChange} fullWidth /></Grid>
            <Grid item xs={6}><TextField label="Quantity" name="quantity" value={formData.quantity} onChange={handleChange} fullWidth /></Grid>
            <Grid item xs={6}><TextField label="Type" name="type" value={formData.type} onChange={handleChange} fullWidth /></Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={6}><TextField label="Date Facturation" name="dateFacturation" value={formData.dateFacturation} onChange={handleChange} fullWidth /></Grid>
            <Grid item xs={6}><TextField label="Date Livraison" name="dateLivraison" value={formData.dateLivraison} onChange={handleChange} fullWidth /></Grid>
            <Grid item xs={6}><TextField label="Statut" name="statut" value={formData.statut} onChange={handleChange} fullWidth /></Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={2}>
            <Grid item xs={6}><TextField label="Service Installed" name="serviceInstalled" value={formData.serviceInstalled} onChange={handleChange} fullWidth /></Grid>
            <Grid item xs={6}><TextField label="Person Name" name="personName" value={formData.personName} onChange={handleChange} fullWidth /></Grid>
            <Grid item xs={6}><TextField label="Mobil/Fixe" name="contactType" value={formData.contactType} onChange={handleChange} fullWidth /></Grid>
            <Grid item xs={6}><TextField label="Fournisseur" name="fournisseur" value={formData.fournisseur} onChange={handleChange} fullWidth /></Grid>
            <Grid item xs={6}><TextField label="INF" name="inf" value={formData.inf} onChange={handleChange} fullWidth /></Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <Box mt={6}>
      <Paper sx={{ p: 6, maxWidth: 1300, margin: "auto" }}>
    <Typography variant="h6" gutterBottom>Nouvelle commande</Typography>

       <Stepper
  activeStep={activeStep}
  alternativeLabel
  sx={{
    '& .MuiStepIcon-root': {
      color: '#ccc', // couleur par défaut
      '&.Mui-active': {
        color: '#48873a',
      },
      '&.Mui-completed': {
        color: '#48873a',
      },
    },
    '& .MuiStepLabel-label.Mui-active': {
      color: '#48873a',
    },
    '& .MuiStepLabel-label.Mui-completed': {
      color: '#48873a',
    }
  }}
>
  {steps.map((label) => (
    <Step key={label}>
      <StepLabel>{label}</StepLabel>
    </Step>
  ))}
</Stepper>


        <Box mt={4}>{renderStepContent(activeStep)}</Box>

        <Box mt={4} display="flex" justifyContent="space-between">
          <Button 
            disabled={activeStep === 0} 
            onClick={handleBack} 
            sx={{ backgroundColor: "#b1dca8", color: "black", '&:hover': { backgroundColor: "#9bcd8d" } }}
          >
            Retour
          </Button>
          <Button 
            variant="contained" 
            onClick={handleNext} 
            sx={{ backgroundColor: "#b1dca8", color: "black", '&:hover': { backgroundColor: "#9bcd8d" } }}
          >
            {activeStep === steps.length - 1 ? "Valider" : "Suivant"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default AddCommande;
