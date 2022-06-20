import { connect } from 'react-redux'


const Main = ({ thisNumber} : {thisNumber : number}) => {

    return (
        <>
            <h2>{thisNumber}</h2>
            <h1>hello</h1>
        </>
    )
}

interface RootState {
    thisNumber : number
}


const mapState = (state: RootState) => {
    console.log(state);
    
    return {thisNumber : state}
}

// const connector = connect(mapState);

export default connect(mapState)(Main);