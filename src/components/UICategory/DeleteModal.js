import React,{useContext} from "react";
import { UserContext } from "views/admin/Categorynew";
import Card from "./Card";
import Button from "./Button";
import classes from './Modal.module.css';


const EditModal = (props) => {
    const {setData} = useContext(UserContext)

    function deleteUserHandler () {
        setData(prevDatas => {
            return prevDatas.filter((data,index) => {
                return index !== props.rowId
            });
        });
        props.onDelete(false);
    };
    const closeModal = () => {
        props.onDelete(false);
    }
    return (
        <div>
            <div className= {classes.backdrop} />
            <Card className = {classes.modal}>
                <header className= {classes.header}>
                    <h2>Are you sure you want to delete?</h2>
                </header>
                <footer className= {classes.actions}>
                    <Button onClick={deleteUserHandler}>Yes</Button>
                    <Button onClick = {closeModal}>No</Button>
                </footer>
            </Card>
            
        </div>
    );
};
export default EditModal;