import React, { useEffect } from 'react';
import axios from 'axios';

const Check = () => {
  const getData = async() => {
    const data = await axios.get('api/check')
    console.log(data)
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div>
      check!!!!
    </div>
  );
}
export default Check;