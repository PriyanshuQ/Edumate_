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
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.primary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Boxstyle>
    </>
    
  );
};


export default Dabba;