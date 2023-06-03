import { Box, Grid, styled } from "@mui/material";
import Dabba from "../component/Dabba";
import { useEffect } from "react";
import axios from "axios";

const Right = styled(Grid)`
  background: #ecf8f9;
  color: #e55807;
  padding: 10px 10px;
  display: flex;
  flex-wrap: wrap;
`;

const GridItem = styled(Grid)`
  margin-right: 10px;
`;

const Program = () => {
  useEffect(() => {
    getallcourse();
  }, []);

  
  var courses;

  const getallcourse = async () => {
    try {
      courses = await axios.get(
        "http://localhost:5000/getcourses/?cate=programcore"
      );
      console.log(courses.data.courses);
    } catch (error) {
      console.log(error.message);
    }
  };

  // console.log(courses);

  return (
    <div>
      <Right>
        <GridItem item lg={6} md={6} xs={12}>
          <Dabba />
        </GridItem>
      </Right>
    </div>
  );
};

export default Program;
