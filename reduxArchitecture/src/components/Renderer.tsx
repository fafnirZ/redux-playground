import React, { ReactElement, useEffect } from 'react'
import {useSelector} from 'react-redux';
import { folderSelector } from '../state/folders';
import { RootState } from '../state/reducers';
import Folder from './folders/Folder';

interface Props {
  
}

function Renderer({}: Props): ReactElement {
  const folders = useSelector((state: RootState) => 
    folderSelector.getFolderState(state),
  )

  // useEffect(() => {
  //   console.log(folders);
  // }, [folders])

  
  return (
    <div>
      {
        folders?.items.map(()=> (
          <Folder/>
        ))
      }
    </div>
  )
}

export default Renderer
