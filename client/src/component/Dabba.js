import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const Boxstyle = styled(Card)`
  width: 300px;
  background: #ffffff;
  margin: auto;
  margin-bottom: 10px;
`

const Dabba = () => {
  return (
    <>
      <Boxstyle variant="outlined">
        <CardContent>
          <Typography>
            Name: Introduction To Aerospace Engineering
          </Typography>
          <Typography >
            Course_Code: ASE1001
          </Typography>
          <Typography>
            Credit: 3
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Download</Button>
        </CardActions>
      </Boxstyle>
    </>
    
  );
};


export default Dabba;