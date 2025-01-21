import { Typography } from "@mui/joy";
import { memo } from "react";
import { Link } from "react-router-dom";

export const NotFound = memo(() => {
  return (
    <>
      <Typography level="h1">404 NOT FOUND</Typography>
      <Typography level="body-lg">The page you were looking for was not found.</Typography>
      <Link to="/">Return to top</Link>
    </>
  );
});
