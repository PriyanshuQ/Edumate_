import {Grid, styled } from "@mui/material";
import Dabba from "../component/Dabba";
import { useEffect, useState } from "react";
import axios from "axios";

const Right = styled(Grid)`
  color: #e55807;
  padding: 10px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const GridItem = styled(Grid)`
  margin-right: 10px;
  background: #C38154;
`;

const Program = () => {
  const [courses, setCourses] = useState([]);

  const getallcourse = async () => {
    try {
      let courses = await axios.get(
        "http://localhost:5000/getcourses/?cate=programcore"
      );
      setCourses(courses.data.courses);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getallcourse();
  }, []);

  return (
    <div>
      <Right>
        {courses !== [] ? (
          courses.map((data) => {
            return (
              <GridItem item lg={6} md={6} xs={12}>
                <Dabba data={data}/>
              </GridItem>
            );
          })
        ) : (
          <div> Empty </div>
        )}
      </Right>
    </div>
  );
};

export default Program;
