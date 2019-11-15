import React, { useState } from "react";
import { TextField } from "@material-ui/core/";
import DomainIcon from "@material-ui/icons/Domain";
import axios from "axios";
import CreateForm from "../CreateForm";

// const useStyles = makeStyles(theme => ({
//   "@global": {
//     body: {
//       backgroundColor: theme.palette.common.white
//     }
//   },
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1)
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2)
//   }
// }));

// export default function MillCreate(props) {
//   const [millName, setMillName] = useState("");
//   const [errorState, setErrorState] = useState({
//     open: false,
//     error: ""
//   });
//   const onSubmit = async event => {
//     event.preventDefault();
//     event.stopPropagation();
//     const { REACT_APP_API_ENDPOINT: api_endpoint } = process.env;
//     try {
//       const mill = await axios.post(`${api_endpoint}/mills`, {
//         name: millName
//       });
//       const {
//         data: { id }
//       } = mill;

//       props.history.push(`/mill/${id}`);
//     } catch (error) {
//       console.log(error.response.data);

//       const { message } = error.response.data;
//       setErrorState({ open: true, error: message });
//     }
//   };

//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <DomainIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Register Mill
//         </Typography>
//         <form onSubmit={onSubmit} className={classes.form}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             label="Mill name"
//             autoFocus
//             value={millName}
//             onChange={ev => setMillName(ev.target.value)}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Create Mill!
//           </Button>
//         </form>
//       </div>
//       <ErrorDisplayer errorState={errorState} setErrorState={setErrorState} />
//     </Container>
//   );
// }

export default function MillCreate(props) {
  const [millName, setMillName] = useState("");
  const onSubmit = async () => {
    const { REACT_APP_API_ENDPOINT: api_endpoint } = process.env;
    const mill = await axios.post(`${api_endpoint}/mills`, {
      name: millName
    });
    const {
      data: { id }
    } = mill;

    props.history.push(`/mill/${id}`);
  };
  return (
    <CreateForm
      onSubmit={onSubmit}
      actionText="Create Mill!"
      title="Register Mill"
      icon={DomainIcon}
    >
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Mill name"
        autoFocus
        value={millName}
        onChange={ev => setMillName(ev.target.value)}
      />
    </CreateForm>
  );
}
