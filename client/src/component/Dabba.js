import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  styled,
} from "@mui/material";

const Boxstyle = styled(Card)`
  width: 315px;
  height: 225px;
  background: #ffffff;
  margin: auto;
  margin-bottom: 10px;
  objectfit: "fill";
`;

const CT = styled(Box)`
  height: 100px;
`;

const CTH = styled(Typography)`
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`

const CD = styled(Typography)`
  font-size: 14px;
`;

const Dabba = ({ data }) => {
  return (
    <>
      <Boxstyle variant="outlined">
        <CardContent>
          <CT>
            <CTH>Course Title : {data.name}</CTH>
          </CT>
          <Box>
            <CD>Course Code : {data.code}</CD>
            <CD>Course Credit : {data.credit}</CD>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">Download</Button>
        </CardActions>
      </Boxstyle>
    </>
  );
};

export default Dabba;
