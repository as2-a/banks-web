import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { MenuItem, Select, useMediaQuery, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import UpdateIcon from "@mui/icons-material/Update";
import SaveIcon from "@mui/icons-material/Save";
import bam from "../assets/bam.jpg";

const CreateOrUpdateAccount = ({ theme }: any) => {
  const { type } = useParams();
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");
  const isDarkMode: boolean = theme.palette.mode === "dark";

  const initialAccountInfo =
    type === "update"
      ? {
          accountNumber: "123456789",
          accountName: "Cuenta Monetaria BAM",
          accountType: "Monetaria",
          currency: "Quetzales",
          image: bam,
          representative: "Juan Pérez",
          phoneNumber: "12345678",
          email: "ejuarezh5@miumg.edu.gt",
        }
      : {
          accountNumber: "",
          accountName: "",
          accountType: "",
          currency: "",
          image: "",
          representative: "",
          phoneNumber: "",
          email: "",
        };

  const [accountNumber, setAccountNumber] = useState(
    initialAccountInfo?.accountNumber || ""
  );
  const [accountName, setAccountName] = useState(
    initialAccountInfo?.accountName || ""
  );
  const [accountType, setAccountType] = useState(
    initialAccountInfo?.accountType || ""
  );
  const [currency, setCurrency] = useState(initialAccountInfo?.currency || "");
  const [representative, setRepresentative] = useState(
    initialAccountInfo?.representative || ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    initialAccountInfo?.phoneNumber || ""
  );
  const [email, setEmail] = useState(initialAccountInfo?.email || "");

  const [accountNumberError, setAccountNumberError] = useState(false);
  const [accountNameError, setAccountNameError] = useState(false);
  const [accountTypeError, setAccountTypeError] = useState(false);
  const [currencyError, setCurrencyError] = useState(false);
  const [representativeError, setRepresentativeError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = () => {
    // Validar los campos aquí antes de enviar los datos
    if (!accountNumber) {
      setAccountNumberError(true);
    } else {
      setAccountNumberError(false);
    }

    if (!accountName) {
      setAccountNameError(true);
    } else {
      setAccountNameError(false);
    }

    if (!accountType) {
      setAccountTypeError(true);
    } else {
      setAccountTypeError(false);
    }

    if (!currency) {
      setCurrencyError(true);
    } else {
      setCurrencyError(false);
    }

    if (!representative) {
      setRepresentativeError(true);
    } else {
      setRepresentativeError(false);
    }

    if (!phoneNumber) {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }

    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (
      accountNumber &&
      accountName &&
      accountType &&
      currency &&
      representative &&
      phoneNumber &&
      email
    ) {
      // Puedes continuar con el envío de datos aquí
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        textAlign={"start"}
        color="textPrimary"
        gutterBottom
        marginBottom={"3rem"}
      >
        {type === "update" ? "Actualizar cuenta" : "Agregar cuenta"}
      </Typography>
      <Grid
        container
        maxWidth="lg"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Card
          variant="outlined"
          style={{
            marginBottom: "16px",
            marginTop: "1rem",
            backgroundColor: isDarkMode ? "#1e1e1e" : "#f7f7f7",
            width: isLargeScreen ? "50%" : "100%",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              color="textPrimary"
              textAlign="start"
              gutterBottom
              marginBottom="1rem"
            >
              Información de la Cuenta
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={10} sm={5} md={4} lg={5} marginBottom="5px">
                <Tooltip
                  title="Ingrese el número de cuenta"
                  placement="top-start"
                >
                  <TextField
                    fullWidth
                    size="small"
                    label="Número de Cuenta"
                    variant="outlined"
                    type="number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    error={accountNumberError}
                    style={{
                      backgroundColor: isDarkMode ? "#3b3b3b" : "#ffffff",
                      borderColor: isDarkMode ? "#3b3b3b" : "#bcbcbc",
                    }}
                  />
                </Tooltip>
              </Grid>
              <Grid item xs={10} sm={6} md={6} lg={6} marginBottom="5px">
                <Tooltip
                  title="Ingrese el nombre que le asignará a su cuenta"
                  placement="top-start"
                >
                  <TextField
                    fullWidth
                    size="small"
                    label="Nombre de Cuenta"
                    variant="outlined"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    error={accountNameError}
                    style={{
                      backgroundColor: isDarkMode ? "#3b3b3b" : "#ffffff",
                      borderColor: isDarkMode ? "#3b3b3b" : "#bcbcbc",
                    }}
                  />
                </Tooltip>
              </Grid>
              <Grid item xs={5} sm={5} md={3} lg={4.5}>
                <FormControl fullWidth size="small" variant="outlined">
                  <InputLabel>Tipo de Cuenta</InputLabel>
                  <Select
                    size="small"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    label="Tipo de Cuenta"
                    error={accountTypeError}
                    style={{
                      backgroundColor: isDarkMode ? "#3b3b3b" : "#ffffff",
                      borderColor: isDarkMode ? "#3b3b3b" : "#bcbcbc",
                    }}
                  >
                    <MenuItem value="Monetaria">Monetaria</MenuItem>
                    <MenuItem value="Ahorro">Ahorro</MenuItem>
                    <MenuItem value="Planilla">Planilla</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={5} sm={5} md={2.5} lg={4}>
                <FormControl fullWidth size="small" variant="outlined">
                  <InputLabel>Moneda</InputLabel>
                  <Select
                    size="small"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    label="Moneda"
                    error={currencyError}
                    style={{
                      backgroundColor: isDarkMode ? "#3b3b3b" : "#ffffff",
                      borderColor: isDarkMode ? "#3b3b3b" : "#bcbcbc",
                    }}
                  >
                    <MenuItem value="Quetzales">Quetzales</MenuItem>
                    <MenuItem value="Dólares">Dólares</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{
            backgroundColor: isDarkMode ? "#1e1e1e" : "#f7f7f7",
            width: isLargeScreen ? "50%" : "100%",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              color="textPrimary"
              textAlign="start"
              gutterBottom
              marginBottom="1rem"
            >
              Información del Titular
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={10} md={10} lg={12} marginBottom="5px">
                <Tooltip
                  title="Ingrese el nombre del titular"
                  placement="top-start"
                >
                  <TextField
                    fullWidth
                    size="small"
                    label="Nombre completo"
                    variant="outlined"
                    value={representative}
                    onChange={(e) => setRepresentative(e.target.value)}
                    error={representativeError}
                    style={{
                      backgroundColor: isDarkMode ? "#3b3b3b" : "#ffffff",
                      borderColor: isDarkMode ? "#3b3b3b" : "#bcbcbc",
                    }}
                  />
                </Tooltip>
              </Grid>
              <Grid item xs={6} sm={3} md={4} lg={4}>
                <Tooltip
                  title="Ingrese el número de teléfono del titular"
                  placement="top-start"
                >
                  <TextField
                    fullWidth
                    size="small"
                    label="Teléfono"
                    variant="outlined"
                    type="number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    error={phoneNumberError}
                    style={{
                      backgroundColor: isDarkMode ? "#3b3b3b" : "#ffffff",
                      borderColor: isDarkMode ? "#3b3b3b" : "#bcbcbc",
                    }}
                  />
                </Tooltip>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Tooltip
                  title="Ingrese la dirección de correo electrónico del titular"
                  placement="top-start"
                >
                  <TextField
                    fullWidth
                    size="small"
                    label="Correo electrónico"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError}
                    style={{
                      backgroundColor: isDarkMode ? "#3b3b3b" : "#ffffff",
                      borderColor: isDarkMode ? "#3b3b3b" : "#bcbcbc",
                    }}
                  />
                </Tooltip>
              </Grid>
            </Grid>
          </CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "16px",
              marginBottom: "2rem",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={type === "update" ? <UpdateIcon /> : <SaveIcon />}
              onClick={handleSubmit}
            >
              {type === "update" ? "Actualizar" : "Guardar"}
            </Button>
          </div>
        </Card>
      </Grid>
    </Container>
  );
};

export default CreateOrUpdateAccount;
