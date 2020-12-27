import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Icon from "./components/Icon";
import { ToastContainer, toast } from 'react-toastify';
import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap';

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false)
  const [winMessage, setWinMessage] = useState("")

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);

  };

  const checkIsWinner = () => {
    if (itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0] !== "empty") {
      setWinMessage(`${itemArray[0]} won`)
    } else if (itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5] && itemArray[3] !== "empty") {
      setWinMessage(`${itemArray[3]} won`)
    } else if (itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8] && itemArray[6] !== "empty") {
      setWinMessage(`${itemArray[6]} won`)
    } else if (itemArray[0] === itemArray[3] && itemArray[3] === itemArray[6] && itemArray[0] !== "empty") {
      setWinMessage(`${itemArray[0]} won`)
    } else if (itemArray[1] === itemArray[4] && itemArray[4] === itemArray[7] && itemArray[1] !== "empty") {
      setWinMessage(`${itemArray[1]} won`)
    } else if (itemArray[2] === itemArray[5] && itemArray[5] === itemArray[8] && itemArray[2] !== "empty") {
      setWinMessage(`${itemArray[2]} won`)
    } else if (itemArray[0] === itemArray[4] && itemArray[4] === itemArray[8] && itemArray[0] !== "empty") {
      setWinMessage(`${itemArray[0]} won`)
    } else if (itemArray[2] === itemArray[4] && itemArray[4] === itemArray[6] && itemArray[2] !== "empty") {
      setWinMessage(`${itemArray[2]} won`)
    } else {
      var i = 0;
      for (var j = 0; j < itemArray.length; j++) {
        if (itemArray[j] !== "empty") {
          i++;
        }
      }
      if (i === 9) {
        setWinMessage("Match drawn")
      }
      ;
    }

  }

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "circle" : "cross";
      setIsCross(!isCross)
    } else {
      return toast("Already filled", { type: "error" });
    }

    checkIsWinner();

  }

  return (
    <Container className="p-5">
      <h1 className="text-center text-uppercase" style={{color:"white", fontSize:"70px"}}>PLAY TIC-TAC-TOE</h1>
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          <div className="grid mt-5">
            {itemArray.map((item, index) => (
              <Card color="warning" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>

          {winMessage==="" ? (
            <div className="mt-5">
            <h1 className="text-center text-warning text-uppercase ">
              {isCross ? "Circle" : "Cross"}'s Turn
            </h1>
            </div>
          ) : (
              <div className="mb-3 mt-4">
                <Button color="success" block onClick={reloadGame}><h3>Reload the game</h3></Button>
                <h1 className="text-success text-uppercase text-center mt-2">
                  {winMessage}
                </h1>
              </div>
            )}

        </Col>
      </Row>
    </Container>
  );
}

export default App;
