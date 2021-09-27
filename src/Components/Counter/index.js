import { useDispatch, useSelector } from "react-redux";
import { countMore, countLess } from "../../store/module/counter/action";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Counter = () => {
  const dispatch = useDispatch();
  const showNumber = useSelector((store) => store.counter);
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <Typography variant="h3" gutterBottom component="div">
        {showNumber}
      </Typography>

      <Button
        size="small"
        variant="outlined"
        onClick={() => dispatch(countMore())}
      >
        +
      </Button>

      <Button
        size="small"
        variant="outlined"
        onClick={() => dispatch(countLess())}
      >
        -
      </Button>
    </Box>
  );
};

export default Counter;
