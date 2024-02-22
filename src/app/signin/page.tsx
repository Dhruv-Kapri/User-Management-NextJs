'use client'

import { Avatar, InputLabel, List, ListItemAvatar, ListItemButton, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import logo from "../../../public/assets/kendra-white-full 2.png";
import Image from "next/image";
import e from "express";
import Link from '@mui/material/Link';;

const Signin = () => {
  const [role, setRole] = useState('admin');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newRole: string,
  ) => {
    setRole(newRole);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />

      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box sx={{
          my: 2,
          mx: 5
        }}>
          <Typography component="h5" variant="h5" sx={{
            display: "flex", alignItems: "center"
          }}>
            <Image
              src={logo}
              width={30}
              height={30}
              alt="logo"
              style={{ marginRight: 5 }}
            />Kendra Sustain
          </Typography>
        </Box>
        <Box
          sx={{
            my: 8,
            mx: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box sx={{ display: "flex" }}>
            <List sx={{ display: "flex" }}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
              </ListItemButton>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
              </ListItemButton>
            </List>
          </Box>
          <Typography component="p" sx={{ color: "gray" }}>
            ------------- or Login in with Email -------------
          </Typography>
          <Box
            component="form"
            noValidate
            // onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              sx={{ mb: -1 }}
              size="small"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              sx={{ mb: -1 }}
              size="small"
            />
            <Grid container sx={{ mt: 3, display: "flex", alignItems: "center" }}>
              <Grid item>
                <FormControlLabel
                  control={<Checkbox value="agree" color="primary" />}
                  label="I agree to the terms and conditions"
                />
              </Grid>
              <Grid item sx={{ display: "flex", float: "right" }}>
                <Link href="#" underline="none">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, mx: 25, color: "white", backgroundColor: "#001555", px: 3, alignSelf: "center" }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundColor: "#001555",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "80vh",
            justifyContent: "center",
          }}
        >
          <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
            New here ?
          </Typography>
          <Typography component="h1" variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            Welcome to Kendra Sustain
          </Typography>
          <Typography component="p" sx={{ mb: 3, }}>
            Enabling Organizations to Embed Data-driven Sustainability Decision-Making across business operations
          </Typography>
          <Typography component="p">
            Entry your personal details and start Journey with us
          </Typography>
          <Link href="/signup" underline="none">
            <Button
              type="submit"
              variant="outlined"
              sx={{ mt: 3, mb: 2, color: "white", borderColor: "white", px: 3 }}
            >
              Signup
            </Button>
          </Link>

        </Box>
      </Grid>
    </Grid >
  );
}

export default Signin;
