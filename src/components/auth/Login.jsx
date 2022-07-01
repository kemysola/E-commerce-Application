import React,{useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import coat from '../../data/discount.png'
import AuthContext from "../../context/AuthContext";

function Login() {
    const [currency, setCurrency] = useState('Select');

    const currencies = [
        {
          label: 'Male',
        },
        {
          label: 'Female',
        },
    ]
  return (
      <div className="row d-flex justify-content-between mt-0 bg-light mb-3 pb-3 pt-3">
        {/****************************** Column for the Auth image        ****************/}

        <div className="row col-sm-12 col-lg-6">
            <div className="container gx-5">
                {/* <img src={coat} className='img-fluid'/> */}
            </div>

        </div>
        {/****************************** Column for the sign up and login  ****************/}
        <div className="row col-sm-12 col-lg-6 ">
          <div className="container ">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 0.22, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <h5>Create an Account</h5>

              <div className="pt-3 mt-3 ">
                <TextField
                  required
                  id="standard-required"
                  label="First Name"
                  name="firstname"
                  defaultValue="James"
                  variant="standard"
                />
                
                <TextField
                  required
                  id="standard-required"
                  label="Last Name"
                  defaultValue="Doe"
                  name='lastname'
                  variant="standard"
                />
                <TextField
                  required
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  name='password'
                  autoComplete="current-password"
                  variant="standard"
                />
                <TextField
                  required
                  id="standard-password-input"
                  label="Confirm Password"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                />

                <TextField
                  required
                  id="standard-number"
                  label="Mobile Number"
                  name='mobile'
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                />
                <TextField
                  required
                  id="standard-email"
                  label="Email"
                  name='email'
                  defaultValue="essy@Feiy's.com"
                  type="email"
                  variant="standard"
                />
              </div>
              <button>Sign Up</button>
            </Box>
          </div>
        </div>
      </div>
  );
}

export default Login;
