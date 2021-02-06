import React from "react";
import {
  Card,
  Icon,
  Header,
  Label,
  Image,
  Popup,
  Button,
} from "semantic-ui-react";

function ProjectCard(props) {
  // const contextRef = React.useRef();
  const genres = [];

  for (var i = 0; i < props.items.length; i++) {
    genres.push(
      <Label
        key={genres.toString()}
        style={{ marginTop: "3px", textAlign: "center" }}
        color={props.items[i][1]}
      >
        {props.items[i][0]}
      </Label>
    );
  }
  return (
    <div>
      {/* <Popup
        trigger={ */}
      <Card fluid color="green">
        {/* <Image src={props.img} wrapped ui={false} /> */}
        {/* <img className="d-block w-100" src={props.img} alt={props.img} /> */}
        <Image src={props.img} wrapped ui={false} />
        <Card.Content>
          <Card.Header style={{ backgroundColor: "white" }} textAlign="center">
            {props.name}
          </Card.Header>
          {/* <Card.Meta textAlign="center">{props.subheader}</Card.Meta> */}
          {/* <Card.Description textAlign="center">{props.desc}</Card.Description> */}
        </Card.Content>

        <Card.Content textAlign="center" extra>
          {/* {genres} */} Unfortunately Taylor Swift only has{" "}
          <Label
            // style={{textAlign: "center" }}
            color="black"
          > <Icon style={{color:'#db2828'}} name="arrow down" />
             40,095,337
          </Label>
    {" "}Monthly Lisenters
        </Card.Content>

        {/* <Button.Group> */}

        <Button color="black">
          <Icon name="winner" /> Score: 5
        </Button>
        <Button color="red">
          <Icon  name="redo" /> Try Again
        </Button>

        {/* </Button.Group> */}
      </Card>
    </div>
  );
}

export default ProjectCard;