import { FiPlus, FiX } from 'react-icons';

import { Container } from './styled';

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return(
    <Container isNew={isNew}>
      <input type="text"
      value={value}
      readOnly={!isNew}
      {...rest} 
      />

      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}