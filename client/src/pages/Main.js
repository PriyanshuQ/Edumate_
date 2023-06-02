import { Box, styled, MenuItem, MenuList, Grid } from "@mui/material";
import Dabba from "../component/Dabba";

const Container = styled(Box)`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

const Left = styled(Box)`
  background: #884a39;
  color: #f9e0bb;
  flex: 1;
  padding: 10px 10px;
`;

const Right = styled(Grid)`
  background: #ecf8f9;
  color: #e55807;
  flex: 4;
  padding: 10px 10px;
  display: flex;
  justify-content: space-evenly;
`;

const Ml = styled(MenuList)`
  
`

const Mi = styled(MenuItem)`
  font-weight: 700;
  margin-bottom: 30px;
`

const Main = () => {
  return (
    <>
      <Container>
        <Left>
          <Ml>
            <Mi>Program Core</Mi>
            <Mi>Program Elective</Mi>
            <Mi>Natural Science, Humanities and Management</Mi>
            <Mi>Open Elective</Mi>
          </Ml>
        </Left>
        <Right container>
          <Grid item lg={6} md ={6} xs={12}>
            <Box><Dabba /></Box>
          </Grid>
          <Grid item lg={6} md ={6} xs={12}>
            <Box><Dabba /></Box>
          </Grid>
          <Grid item lg={6} md ={6} xs={12}>
            <Box><Dabba /></Box>
          </Grid>
          <Grid item lg={6} md ={6} xs={12}>
            <Box><Dabba /></Box>
          </Grid>
          <Grid item lg={6} md ={6} xs={12}>
            <Box><Dabba /></Box>
          </Grid>
          <Grid item lg={6} md ={6} xs={12}>
            <Box><Dabba /></Box>
          </Grid>
          <Grid item lg={6} md ={6} xs={12}>
            <Box><Dabba /></Box>
          </Grid>
          <Grid item lg={6} md ={6} xs={12}>
            <Box><Dabba /></Box>
          </Grid>
          <Grid item lg={6} md ={6} xs={12}>
            <Box><Dabba /></Box>
          </Grid>
          <Grid item lg={6} md ={6} xs={12}>
            <Box><Dabba /></Box>
          </Grid>
          <Grid item lg={6} md ={6} xs={12}>
            <Box><Dabba /></Box>
          </Grid>
          <Grid item lg={6} md ={6} xs={12}>
            <Box><Dabba /></Box>
          </Grid>
        </Right>
      </Container>
    </>
  );
};

export default Main;
