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

const Dabba = ({data}) => {
  return (
    <>
      <Boxstyle variant="outlined">
        <CardContent>
          <Typography>
            {data.name}
          </Typography>
          <Typography >
          {data.code}
          </Typography>
          <Typography>
          {data.credit}
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