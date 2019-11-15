import React, { useState } from "react";
export default function HarvestCreate(props) {
  return "fon";
  // const [millName, MillName] = useState("");
  // const [errorState, setErrorState] = useState({
  //   open: false,
  //   error: ""
  // });
  // const onSubmit = async event => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   const { REACT_APP_API_ENDPOINT: api_endpoint } = process.env;
  //   try {
  //     const mill = await axios.post(`${api_endpoint}/mills`, {
  //       name: millName
  //     });
  //     const {
  //       data: { id }
  //     } = mill;
  //     props.history.push(`/mill/${id}`);
  //   } catch (error) {
  //     console.log(error.response.data);
  //     const { message } = error.response.data;
  //     setErrorState({ open: true, error: message });
  //   }
  // };
  // const classes = useStyles();
  // return (
  //   <Container component="main" maxWidth="xs">
  //     <CssBaseline />
  //     <div className={classes.paper}>
  //       <Avatar className={classes.avatar}>
  //         <DomainIcon />
  //       </Avatar>
  //       <Typography component="h1" variant="h5">
  //         Register Mill
  //       </Typography>
  //       <form onSubmit={onSubmit} className={classes.form}>
  //         <TextField
  //           variant="outlined"
  //           margin="normal"
  //           required
  //           fullWidth
  //           label="Mill name"
  //           autoFocus
  //           value={millName}
  //           onChange={ev => MillName(ev.target.value)}
  //         />
  //         <Button
  //           type="submit"
  //           fullWidth
  //           variant="contained"
  //           color="primary"
  //           className={classes.submit}
  //         >
  //           Create Mill!
  //         </Button>
  //       </form>
  //     </div>
  //     <ErrorDisplayer errorState={errorState} setErrorState={setErrorState} />
  //   </Container>
  // );
}
