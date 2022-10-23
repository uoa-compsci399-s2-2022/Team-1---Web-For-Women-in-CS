import { Card } from 'antd';
import React from 'react';
import "./Card_p.css";

const App = (props) => (

  <Card className=''
    hoverable
    // cover={<img src="https://kantata.marketing/wp-content/uploads/2021/08/project-managemenr-goals.jpg"></img>}
    style={{

      width: '100%',
      height:'100%',
      boxShadow:'0px 1px 4px 0px rgb(35 31 32 / 25%)',
      top:'10px',
 
    }}
  >
    <p className='title_p' >{props.title}</p>
    <p className='cardtext' >{props.text}</p>


  </Card>



);

export default App;