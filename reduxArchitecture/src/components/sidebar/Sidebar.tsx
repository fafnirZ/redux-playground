import React, { ReactElement } from 'react'
import {useDispatch} from 'react-redux';
import { folderAct } from '../../state/folders';


interface Props {
  
}

function Sidebar({}: Props): ReactElement {
  const dispatch = useDispatch();

  return (
    <div style={{
      background: "grey"
    }}>
      <button onClick={()=> {
        dispatch(
          folderAct.addFolderItemAction({
            id: "1",
            folderName: "hello",
          })
        )
      }}>
        add folder
      </button>
    </div>
  )
}

export default Sidebar
