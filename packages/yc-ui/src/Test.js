import React, {useState} from 'react';

export function Test(){
    const [count,setCount] = useState(0)
    return <div>
        <h3>yc-ui Test!</h3>
        <div>count：{count}</div>
        <div>
            <button onClick={()=>setCount(count+1)}>增加1</button>
            <button onClick={()=>setCount(count-1)}>减小1</button>
        </div>
    </div>
}
