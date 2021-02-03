import React from "react";
import { Container, Box, Paper, Typography } from "@material-ui/core";
import imagemLogin from "../../components/images/fundo.png";
import { useStyles } from "./styles";

const Login = () => {
  const styles = useStyles();
  return (
    <Container
      style={{ backgroundImage: `url(${imagemLogin})` }}
      className={styles.container}
    >
      <Paper>
        <Box>
          <Typography>Login</Typography>
        </Box>
        <Box>
          <Box>Seu nome</Box>
          <Box>Sua senha</Box>
          <Box>
            <Box>Manter</Box>
            <Box>Check</Box>
          </Box>
          <Box>
            <Box>Esqueceu</Box>
            <Box>Register</Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
