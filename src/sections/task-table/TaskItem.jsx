import { Table } from "flowbite-react";
import { useState } from "react";
import { ModalPopup } from "../../components/ModalPopup";
import { DeleteTasksModal } from "../../components/DeleteTasksModal";

function TaskItem(props) {
    let [openDeleteModal, setOpenDeleteModal] = useState(false);
    let [openModal, setOpenModal] = useState(false);
    let { id, title, description, assignTo, priority } = props.data;
    let editHandler = (data) => {
        props.onEdit(data);
    };
    return (
        <>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{props.index + 1}</Table.Cell>
                <Table.Cell>{title}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
                <Table.Cell>{assignTo}</Table.Cell>
                <Table.Cell>{priority}</Table.Cell>
                <Table.Cell>
                    <button onClick={() => setOpenModal(true)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-3 cursor-pointer">
                        Edit
                    </button>
                    <button onClick={() => setOpenDeleteModal(true)} className="font-medium text-rose-600 hover:underline dark:text-rose-500">
                        Delete
                    </button>
                </Table.Cell>
            </Table.Row>
            <ModalPopup taskToEdit={props.data} onEdit={editHandler} onOpen={openModal} onClose={() => setOpenModal(false)} />
            <DeleteTasksModal onDeleteModal={() => props.onDelete(id)} onOpenModal={openDeleteModal} onCloseModal={() => setOpenDeleteModal(false)} />
        </>
    );
}

export default TaskItem;