import React, { Component} from 'react';

class IterationSample extends Component {
    render(){
        const names =['snowman', 'ice', 'snow', 'wind'];
        const nameList = names.map((name)=>(<li>{name}</li>));

        return (
            <ul>
                {nameList}
                </ul>
        );
    }
}

export default IterationSample;