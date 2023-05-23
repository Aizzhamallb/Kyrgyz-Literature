import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function OutstandingPeople() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div id="outstanding-block">
        <Card   style={{ marginLeft: "50px" }} sx={{ maxWidth: 300 }}>
          <CardHeader
            style={{ color: "#660000", fontWeight: "500" }}
            title="Чынгыз Айтматов"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://interesnyefakty.org/wp-content/uploads/CHingiz-Aytmatov.jpg"
            alt=""
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ color: "#003153" }}>
             Кыргызстандын залкар уулу, дүйнөгө аты таанымал белгилүү жазуучу, коомдук жана мамлекеттик ишмер Чыңгыз Айтматов Талас облусуна караштуу Кара-Буура районундагы Шекер айылында 1928-жылы 12-декабрда туулган.
            </Typography>
          </CardContent>
        </Card>
        
        <Card   style={{ marginLeft: "50px" }} sx={{ maxWidth: 300 }}>
          <CardHeader
            style={{ color: "#660000", fontWeight: "500" }}
            title="Алыкул Осмонов"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://sanjyra.net/storage/people-image/juqrQS3IdlICZIKKCUGBdf5FtQg5WMvqXxmX4nuS.jpeg"
            alt=""
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ color: "#003153" }}>
           Кыргыз поэзиясынын өкүлү, таланттуу акын Алыкул Осмонов — 1915-жылы Панфилов районуна караштуу Каптал-Арык айылында туулган.
            </Typography>
          </CardContent>
        </Card>
        <Card   style={{ marginLeft: "50px" }} sx={{ maxWidth: 300 }}>
          <CardHeader
            style={{ color: "#660000", fontWeight: "500" }}
            title="Касым Тыныстанов"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://upload.wikimedia.org/wikipedia/commons/9/91/Kasym_Tynystanov_on_10_som_note.jpg"
            alt=""
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ color: "#003153" }}>
          Кыргыз тил илиминин түптөөчүсү, жазма адабиятыбыздын негиз салуучусу, акын, драматург, агартуучу, коомдук ишмер, реформатор жана биринчи кыргыз профессору Касым Тыныстанов туптуура 81 жыл мурун жалган жалаага кабылып, атууга кеткен.
            </Typography>
          </CardContent>
        </Card>
        
        <Card   style={{ marginLeft: "50px" }} sx={{ maxWidth: 300 }}>
          <CardHeader
            style={{ color: "#660000", fontWeight: "500" }}
            title="Суюнбай Эралиев"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://s-eraliev.el.kg/wp-content/uploads/S.Eraliev-fotografiya-3.jpg"
            alt=""
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ color: "#003153" }}>
         Поэзия дүйнөсүнө салмактуу салымын кошкон Кыргыз Эл акыны, Токтогул атындагы мамлекеттик сыйлыктын лауреаты Сүйүнбай Эралиев 1921-жылдын 15-октябрында Талас облусунун Үч-Эмчек айлында жарыкка келген.
            </Typography>
          </CardContent>
        </Card>
        
      </div>
    </>
  );
}
