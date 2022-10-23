import { Card, Space } from 'antd';
import React from 'react';
import "./Card1.css";
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';



const Card1 = () => (
  <Card className='card1'
    style={{
      backgroundColor: '#0080a7'
    
      
    }}
  >
    <p className='text'>Related links</p>
    <p className='text2'>____________</p>
    <Space direction='horizeton' size={10}>
    <Link to='/resources'><p className='text1'>Information for woman in Computer Science</p></Link>
    <RightOutlined 
    style={{
      color:'white',
      fontSize: 20 
    }}
    />
    </Space>
  </Card>
);

export default Card1;