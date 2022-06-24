import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { AccessTime } from "@mui/icons-material";

import "./TourCard.css";
const TourCard = ({ img }) => {
  console.log(img);
  return (
    <>
      <Grid item xs={3}>
        <Paper elevation={3}>
          <img
            src="https://www.niagarafallsstatepark.com/~/media/parks/niagara-falls/homepage/niagara-falls-mist-880x592.jpg?mw=640&hash=A8A122619847D8A9F7B6395285F6D82CC1E6F438"
            alt="Niagara Falls"
          />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              Immerse into the Falls
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime
                sx={{
                  width: 16,
                  marginRight: 0.5,
                }}
              />
              <Typography variant="caption" component="p">
                5 hours ago
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating name="read-only" value={4} readOnly />
              <Typography
                variant="body1"
                component="span"
                sx={{
                  paddingRight: 1,
                  paddingLeft: 0.4,
                }}
              >
                4
              </Typography>
              <Typography variant="body1" component="span">
                (462 reviews)
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default TourCard;
