import styled from 'styled-components';
import { StyledInput } from '../components/ErrorMessage';

const validatePassword = (password) => {
  const errors = [];
  if (password.length < 6) {
    errors.push('비밀번호는 6자 이상이어야 합니다.');
  }
  if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
    errors.push('비밀번호에는 문자와 숫자가 포함되어야 합니다.');
  }
  if (/(.)\1\1/.test(password)) {
    errors.push('비밀번호에 3개 이상의 동일한 숫자를 나열할 수 없습니다.');
  }
  return errors;
};

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

// const StyledInput = styled.input`
//   border: 1px solid ${props => (props.hasError ? 'red' : '#FF0000')};
//   padding: 8px;
//   margin-bottom: 8px;
//   &:focus {
//     outline: none;
//     border-color: ${props => (props.hasError ? 'red' : '#FF0000')};
//   }
// `;

export default ErrorMessage;
export { validatePassword }; // validatePassword 함수 내보내기
