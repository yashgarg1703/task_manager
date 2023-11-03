
import PropTypes from 'prop-types';
import Button from './Button'
const Header=({onAdd,showAdd})=>
{
    return(
        <div className="header">
            <h1 style={headerStyle}/*style={{color:'grey'}}*/>TASK TRACKER</h1>
            <Button color={showAdd ? 'red':'green'} text={showAdd ? 'CLOSE':'ADD'} onClick={onAdd}/>
        </div>
    )
} 

/************* Another Way To Display Props ************/
// const Header=({header})=>
// {
//     return(
//         <header>
//             <h1>{header}</h1>
//         </header>
//     )
// }

const headerStyle={
    color:'grey'
}
Header.defaultProps={
    header:'TASK MANAGER'
}
export default Header