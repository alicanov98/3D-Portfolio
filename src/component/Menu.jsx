/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */



// import { HiMiniBars3 } from 'react-icons/hi';
// import {GrClose} from 'react-icons/gr';
export const Menu = (props) => {
  const { menuOpened, setMenuOpened,onSectionChange } = props;


  return (
    <>
      {menuOpened ? (
        <>
          <button
            className="barsBtn"
            onClick={() => setMenuOpened(!menuOpened)}
          >
            {/* <GrClose/>  */}
            Close
          </button>
          <div className="menuBars" style={{ width: 200 }}>
          <MenuButton label="About" onClick={()=>onSectionChange(0)}/>
          <MenuButton label="Skills" onClick={()=>onSectionChange(1)}/>
          <MenuButton label="Projects" onClick={()=>onSectionChange(2)}/>
          <MenuButton label="Contact" onClick={()=>onSectionChange(4)}/>
    
          </div>
        </>
      ) : (
        <>
          <button
            className="barsBtn"
            onClick={() => setMenuOpened(!menuOpened)}
          >
            {/* <HiMiniBars3/>  */}
            Open
          </button>
          <div className="menuBars" style={{ width: 0 }}>
          </div>
        </>
      )}
    </>
  );
};

const MenuButton = (props)=>{
    const {label,onClick}=props
    return (
<button  onClick={onClick} className="buttonMenu">
{label}
</button>
    )
}