import styled from "styled-components";
import { useGlobalContext } from "./context";
import { useEffect, useRef, useState } from "react";

const ModalParent = styled.div`
position:fixed;
width:${props => props.show ? '100vw': '0'};
height:${props => props.show ? '100vh': '0'};
display:flex;
opacity:${props => props.show ? 1: 0};
text-align:center;
justify-content:center;
align-items:center;
visibility:${props=> props.show ? 'visible' : 'hidden'};
background-color: rgba(0,0,0,0.7);
transition: opacity 0.4s, visibility 0.3s;
`

const ModalContainer = styled.div`
position:fixed;
width:400px;
height:400px;,
box-shadow:0 2px 5px;
background-color: white;
transform: ${props => props.show ? 'scale(1)' : 'scale(0.7)'};
transition:transform 0.3s;
`
const MyForm = styled.form`
text-align:center;
p{
    color:red
}

input{
    height:30px;
    
}
`

const DetailBox = styled.input`
padding:5px;
&:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
  
  `

const InputMoney = styled.input`
padding:5px;
&:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

`
const RadioBtns = styled.div`
display:flex;
justify-content:center;

`

const RadioLable = styled.label`
cursor:pointer;
margin:0 20px;
`

const AddButtn = styled.button`
font-size:15px;
width:fit-content;
border: 2px solid black;
border-radius: 10%;
padding: 5px 12px;
margin-top:1em;
cursor:pointer;
box-shadow:0 2px 5px;


&:hover{
    background-color:lightblue;
}
`

const ButtonClose = styled.div`
width:100%;
text-align:end;
`

const Cancel = styled.div`
font-size:15px;
width:fit-content;
border: 2px solid black;
border-radius: 10%;
padding: 5px 12px;
cursor:pointer;
box-shadow:0 2px 5px;

&:hover{
    background-color:red;
}
`




const Modal = () => {
    const detailRef = useRef(null);
    const {setExpenseList, setIncomeList, incomeList, showModal, setShowModal, setIncome, setExpanse} = useGlobalContext();
    const [message, setMessage] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);
    // const [localExpanse, setLocalExpanse] = useState('');
    const [transactionType, setTransactionType] = useState(false);
    const [transactionDetails, setTransactionDetails] = useState('');
    
    useEffect(() => {
        console.log("modal useEffect income List: ", incomeList);
        if(showModal && detailRef.current){
            console.log("detailRef ran", detailRef.current)
            detailRef.current.focus();
        }

        setTimeout(() => {
            if (detailRef.current) {
              detailRef.current.focus();
            }
          }, 100);
    },[showModal, incomeList]);


    const closeModal = () => {
        
        setShowModal(!showModal);
        setTransactionAmount('');
        setTransactionType(false);
        setTransactionDetails('')
        setMessage('');
       
    } 

    function handleSubmit(e){
        e.preventDefault();

        console.log("transaction type: ", transactionType);
        if(transactionType === 'income' && !transactionAmount){
            setMessage("plz enter the Income")
        }    

        if(transactionType === 'expanse' && !transactionAmount){
            setMessage("Expanse Is Not entered")
        }
        if(!transactionType){
            setMessage("Plz Select the Transaction Type")
        }  
        if(transactionType === 'expanse' && transactionAmount || transactionType==='income' && transactionAmount) {
            if(transactionType === 'expanse'){
                const myFloat = parseFloat(transactionAmount);
                setExpenseList(prev => [...prev, myFloat]);
                setExpanse(prev => prev+myFloat);
                closeModal();
            }
            else{
                const myFloat = parseFloat(transactionAmount);
                setIncomeList(prev => ([...prev, myFloat]))
                setIncome(prev => prev + myFloat);
                closeModal();
            }
        }
       
    } 

   return (
 
    <ModalParent show={showModal}>
        <ModalContainer show={showModal}>
        <ButtonClose>
            <Cancel onClick={closeModal}> Close </Cancel>
        </ButtonClose>

        <MyForm onSubmit={handleSubmit} > 
            <div>Write the details </div>
            <p> {message}</p>

            <DetailBox
            ref={detailRef} 
            type='text' 
            name="details" 
            placeholder="Enter transaction Detials"
            onChange={(e) => setTransactionDetails(e.target.value)}
            value ={transactionDetails}
            />
            <h5>
                Enter the Transaction Amount
            </h5>

            <InputMoney type='number' name="income" 
            placeholder="Enter Money(*only Numbers)"
            onChange={(e) => setTransactionAmount(e.target.value)}
            value={transactionAmount} />

            <RadioBtns>
                <RadioLable>
                    <input type="radio" 
                    name="transactionType" 
                    value="income"
                    checked={transactionType === 'income'}
                    onChange={(e) =>                   
                        setTransactionType(e.target.value) } 
                    />
                    Income
                </RadioLable>
                <RadioLable>
                    <input type="radio" 
                    name="transactionType" 
                    value="expanse"
                    checked={transactionType === 'expanse'}
                    onChange={(e) => setTransactionType(e.target.value)}
                     />
                    Expanse
                </RadioLable>
            </RadioBtns>
            <AddButtn onClick={(e)=> handleSubmit(e)}> Add</AddButtn>

           
        </MyForm>
            
        </ModalContainer>
        
    </ModalParent>
   
    
   
   )
}

export default Modal