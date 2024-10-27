import { Table } from "flowbite-react";
import { useState } from "react";
import { ModalPopup } from "../../components/ModalPopup";

function TaskItem(props) {
    let [openModal, setOpenModal] = useState(false);
    let { title, description, assignTo, priority } = props.data;
    let editHandler = (data) => {
        props.onEdit(data);
        
    }
    return (
        <>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>{props.index + 1}</Table.Cell>
            <Table.Cell>{title}</Table.Cell>
            <Table.Cell>{description}</Table.Cell>
            <Table.Cell>{assignTo}</Table.Cell>
            <Table.Cell>{priority}</Table.Cell>
            <Table.Cell>
                <a onClick={() => setOpenModal(true)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-3 cursor-pointer">
                    Edit
                </a>
                <a href="#" className="font-medium text-rose-600 hover:underline dark:text-rose-500">
                    Delete
                </a>
            </Table.Cell>
        </Table.Row>
        <ModalPopup taskToEdit={props.data} onEdit={editHandler} onOpen={openModal} onClose={() => setOpenModal(false)} />
        </>
    );
}

export default TaskItem;