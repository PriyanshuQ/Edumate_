import { Box, Grid, styled } from "@mui/material";
import Dabba from "../component/Dabba";

const Right = styled(Grid)`
  background: #ecf8f9;
  color: #e55807;
  padding: 10px 10px;
  display: flex;
  flex-wrap: wrap;
  
`;

const GridItem = styled(Grid)`
  margin-right: 10px;
`

const Program = () => {
  return (
    <div>
      <Right>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
      </Right>
    </div>
  );
};

export default Program;
