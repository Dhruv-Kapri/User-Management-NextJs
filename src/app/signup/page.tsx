'use client'

import { Avatar, InputLabel, Link, ToggleButton, ToggleButtonGroup } from "@mui/material";
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

const Signup = () => {
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
            height: "75vh",
            justifyContent: "center",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            Welcome back!
          </Typography>
          <Typography component="p">
            To keep connected with us please login with your personal info
          </Typography>
          <Link href="/signin" underline="none">
            <Button
              type="submit"
              variant="outlined"
              sx={{ mt: 3, mb: 2, color: "white", borderColor: "white", px: 3 }}
            >
              Login
            </Button>
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
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
            Create Account
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
              id="username"
              label="Username"
              name="username"
              autoFocus
              sx={{ mb: -1 }}
              size="small"
            />
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
              id="organization"
              label="Organization"
              name="organization"
              size="small"
            />
            <InputLabel shrink htmlFor="role">
              Role
            </InputLabel>
            <ToggleButtonGroup
              color="primary"
              value={role}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="admin" sx={{ mx: 5, px: 5, borderRadius: 2 }} size="small">Admin</ToggleButton>
              <ToggleButton value="user" sx={{ mx: 5, px: 5, borderRadius: 2 }} size="small">User</ToggleButton>
            </ToggleButtonGroup>

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
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="confirm password"
              sx={{ mb: -1 }}
              size="small"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="country"
              label="Country"
              name="country"
              sx={{ mb: -1 }}
              size="small"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              sx={{ mb: -1 }}
              size="small"
            />
            <FormControlLabel
              control={<Checkbox value="agree" color="primary" />}
              label="I agree to the terms and conditions"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, mx: 25, color: "white", backgroundColor: "#001555", px: 3, alignSelf: "center" }}
            >
              Signup
            </Button>
            <br />

          </Box>
        </Box>
      </Grid>
    </Grid >
  );
}

export default Signup;