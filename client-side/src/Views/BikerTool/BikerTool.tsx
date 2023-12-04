import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems } from "./partials/listItems";
import CopyRights from "../../Components/CopyRights";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import { formatTimestamp } from "../../Utils/helperFunctions";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function BikerTool() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const myParcels = [
    {
      _id: "656b06d60b9cd6040e60ec28",
      createdBy: {
        _id: "64a2835d0d891295bcb000c8",
        userName: "mina elan",
        role: "user",
      },
      parcelName: "eeee",
      pickupAddress: "Cairo",
      dropOffAddress: "Gize",
      parcelStatus: "delivered",
      createdAt: "2023-12-02T10:28:38.863Z",
      updatedAt: "2023-12-02T14:40:32.258Z",
      deliveredBy: {
        _id: "74a283720d891295bcb030cc",
        userName: "ahmed salah",
        role: "biker",
      },
      dropOffTime: "4-12-2023",
      pickupTime: "3-12-2023",
    },
    {
      _id: "656b06d60b9cd6040e60ec28",
      createdBy: {
        _id: "64a2835d0d891295bcb000c8",
        userName: "mina elan",
        role: "user",
      },
      parcelName: "eeee",
      pickupAddress: "Cairo",
      dropOffAddress: "Gize",
      parcelStatus: "delivered",
      createdAt: "2023-12-02T10:28:38.863Z",
      updatedAt: "2023-12-02T14:40:32.258Z",
      deliveredBy: {
        _id: "74a283720d891295bcb030cc",
        userName: "ahmed salah",
        role: "biker",
      },
      dropOffTime: "4-12-2023",
      pickupTime: "3-12-2023",
    },
    {
      _id: "656b06d60b9cd6040e60ec28",
      createdBy: {
        _id: "64a2835d0d891295bcb000c8",
        userName: "mina elan",
        role: "user",
      },
      parcelName: "eeee",
      pickupAddress: "Cairo",
      dropOffAddress: "Gize",
      parcelStatus: "delivered",
      createdAt: "2023-12-02T10:28:38.863Z",
      updatedAt: "2023-12-02T14:40:32.258Z",
      deliveredBy: {
        _id: "74a283720d891295bcb030cc",
        userName: "ahmed salah",
        role: "biker",
      },
      dropOffTime: "4-12-2023",
      pickupTime: "3-12-2023",
    },
  ];
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     parcelName: data.get("parcelName"),
  //     pickupAddress: data.get("pickupAddress"),
  //     dropOffAddress: data.get("dropOffAddress"),
  //   });
  // };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Biker Tool
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{mainListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h2>My Parcels</h2>
                <Grid container spacing={4} sx={{ mt: 4 }}>
                  {myParcels.map((parcel, idx) => (
                    <Grid item xs={12} md={4} key={idx}>
                      <CardActionArea component="a" href="#">
                        <Card>
                          <CardContent sx={{ flex: 1 }}>
                            <Typography component="h2" variant="h5">
                              {parcel.parcelName}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                            >
                              Created At {formatTimestamp(parcel.createdAt)}
                            </Typography>
                            {/* <Typography variant="subtitle1" paragraph>
                              Created By {parcel?.createdBy?.userName}
                            </Typography> */}
                            {/* <Typography variant="subtitle1" color="primary">
                              Continue reading...
                            </Typography> */}
                          </CardContent>
                          <CardActions sx={{ display: "block" }}>
                            <Button size="small">
                              <Accordion>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Typography>View more details</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography>
                                    <div>
                                      <span>Created By: </span>
                                      <span>{parcel?.createdBy?.userName}</span>
                                    </div>
                                    <div>
                                      <span>Pickup Address: </span>
                                      <span>{parcel.pickupAddress}</span>
                                    </div>
                                    <div>
                                      <span>Dropoff Address: </span>
                                      <span>{parcel.dropOffAddress}</span>
                                    </div>
                                    <div>
                                      <span>Pickup Time: </span>
                                      <span>{parcel.pickupTime}</span>
                                    </div>
                                    <div>
                                      <span>Dropoff Time: </span>
                                      <span>{parcel.dropOffTime}</span>
                                    </div>
                                  </Typography>
                                </AccordionDetails>
                              </Accordion>
                            </Button>
                            <Button sx={{ marginLeft: "0 !important" }}>
                              <Accordion>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Typography>Update Status</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                  </Typography>
                                </AccordionDetails>
                              </Accordion>
                            </Button>
                          </CardActions>
                        </Card>
                      </CardActionArea>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <br />
              {/* Recent Orders */}
              <Grid item xs={12}>
                <h2>All Parcels</h2>
                {/* <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders />
                </Paper> */}
              </Grid>
            </Grid>
            <CopyRights sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
