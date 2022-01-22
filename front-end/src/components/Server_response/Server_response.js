import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import { Button } from 'reactstrap';
import Cookies from 'js-cookie';

export default function Server_response(){
    const [color, set_color] = useState('red');
    const [show_msg, set_show_msg] = useState(false);
    const [msg, set_msg] = useState('');
    const [duration, set_duration] = useState('');
    const [flag, set_flag] = useState(false);

    useEffect(() => {
        duration > 0  && setTimeout(() => set_duration(duration - 1), 1000);
        localStorage.setItem('duration_msg', localStorage.getItem('duration_msg') - 1)
    }, [duration]);

    const Msg_body = styled.div`
        position: fixed;
        width: auto;
        top: ${localStorage.getItem('duration_msg') > 0 ? '0px' : '-300px'};
        min-width: 50px;
        background-color: ${color};
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        color: white;
        border-radius: 5px;
    `;

    const Center = styled.div`
        display: flex;
        justify-content: center;
    `;

    return (
      <>
        <Center>
          <Msg_body>{msg}</Msg_body>
        </Center>
        {/* <Button onClick={() => set_counter(start)}>
          clicar
        </Button> */}
        {/* <Button onClick={() => set_show_msg(!show_msg)}>
          clicar
        </Button> */}
      </>
    );
}