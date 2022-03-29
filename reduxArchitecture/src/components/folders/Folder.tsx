import React from 'react'
import styled from 'styled-components';

interface Props {
  
}
const FolderWrapper = styled.div`
  width: 150px;
  height: 200px;
  background: white;
  color: black;
  margin: 100px;
`

export default function Folder({}: Props) {
  return (
    <FolderWrapper>Folder</FolderWrapper>
  )
}
