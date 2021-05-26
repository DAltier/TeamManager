import styled from 'styled-components';


export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;


export const DelButton = styled.button`
  color: white;
  background-color: red;
  border-radius: 15px;
  height: 30px;
  width: 150px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;


export const Form = styled.form`
  margin-top: 20px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
`;


export const FormGroup = styled.div`
  background-color: rgb(180, 179, 179);
  border-radius: 10px;
  width: 450px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;


export const Label = styled.label`
  display: inline-block;
  width: 160px;
  text-align: left;
  color: white;
  margin-right: 20px;
  font-size: 20px;
`;


export const Input = styled.input`
  width: 230px;
  border: none;
  height: 30px;
  color: rgb(179, 34, 236);
  font-weight: 600;
  border-radius: 0px 5px 5px 0px;
`;


export const Button = styled.button`
  color: white;
  background-color: #4F4F4C;
  border-radius: 15px;
  height: 30px;
  width: 150px;
  border: none;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
`;