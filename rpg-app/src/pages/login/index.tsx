import React from "react";
import {
  Container,
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { useStyles } from "./styles";

const Login = () => {
  const styles = useStyles();
  return (
    <Container
      style={{
        background: "red",
        display: "flex",
      }}
      className={styles.container}
    >
      <Grid item xl={7} sm={7} lg={7}>
        Outras coisas
      </Grid>
      <Grid
        item
        xl={5}
        sm={5}
        lg={5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper style={{ width: "60%", height: "80%" }}>
          <Box
            style={{
              display: "flex",
              height: "18%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Faça seu login</Typography>
          </Box>
          <Box style={{ height: "82%" }}>
            <Box
              style={{
                height: "50%",
                padding: "32px 32px 0px 32px",
              }}
            >
              <TextField
                style={{ marginBottom: "16px", width: "100%" }}
                label="email"
                variant="outlined"
              />
              <TextField
                label="senha"
                variant="outlined"
                style={{ width: "100%" }}
              />
              <Box>
                <Button
                  style={{
                    border: "1px solid black",
                    marginTop: "16px",
                    width: "100%",
                  }}
                >
                  Logar
                </Button>
              </Box>
            </Box>
            <Box
              style={{
                height: "25%",
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>Esqueceu sua senha?</Box>
              <Box>Criar nova conta</Box>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Login;
