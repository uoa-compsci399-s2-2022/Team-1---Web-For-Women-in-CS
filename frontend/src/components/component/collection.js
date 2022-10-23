import { Image } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './collection.css'

const Collection = (props) => {
  const [visible, setVisible] = useState(false);
// console.log(size);
  return (
    <>
    <div className='collection'>
      <Image className='collection_cover'
        preview={{
          visible: false,
        }}
        width={368}
        height={368}
        src= {props.src}
        onClick={() => setVisible(true)}
      />
      <div
        style={{
          display: 'none',
        }}
      >
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          <Image src={props.src}  className='collection_cover'/>
         
        </Image.PreviewGroup>
      </div>
      </div>
      
    </>
  );
};

export default Collection;