import React, { useState } from 'react'
import { connect } from "react-redux"
import { buyBook } from '../redux/index';

function BookConatainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h1>Number of Books : {props.numberOfBooks} </h1>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyBook(number)} >Buy {number} Book</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        numberOfBooks : state.numberOfBooks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyBook : function(number){
            dispatch(buyBook(number));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookConatainer)
