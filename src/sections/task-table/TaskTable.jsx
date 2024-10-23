/* eslint-disable no-unused-vars */
import Container from "../../components/Container";
import { Button, Table } from "flowbite-react";
import TaskItem from "./TaskItem";
import TaskTableHeader from "../TaskTableHeader";
import { ModalPopup } from "../../components/ModalPopup";
import { useState } from "react";
import { DeleteTasksModal } from "../../components/DeleteTasksModal";

function NoData() {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell colSpan={6} className="text-center">
                🥸No Data Found🥸
            </Table.Cell>
        </Table.Row>
    );
}

function TaskTable() {
    let [openModal, setOpenModal] = useState(false);
    let [openDeleteModal, setOpenDeleteModal] = useState(false);
    let [tasks, setTasks] = useState([]);
    let createHandler = (item) => {
        let updateTasks = [
            ...tasks,
            {
                ...item,
                id: tasks.length + 1,
            },
        ];
        setTasks(updateTasks.reverse());
    };
    return (
        <Container className="mt-5">
            <div className="flex justify-end">
                <Button onClick={() => setOpenModal(true)} className="mr-2" color="success">
                    Add Task
                </Button>
                <Button color="failure" onClick={() => setOpenDeleteModal(true)}>
                    Clear Tasks
                </Button>
            </div>
            <div className="p-2 rounded-md border dark:border-gray-500 my-6">
                <TaskTableHeader />
                <div className="overflow-x-auto">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>#</Table.HeadCell>
                            <Table.HeadCell>Title</Table.HeadCell>
                            <Table.HeadCell>Description</Table.HeadCell>
                            <Table.HeadCell>Assigned To</Table.HeadCell>
                            <Table.HeadCell>Priority</Table.HeadCell>
                            <Table.HeadCell>Action</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">{tasks.length == 0 ? <NoData /> : tasks.map((item, index) => <TaskItem data={item} index={index} key={item.id} />)}</Table.Body>
                    </Table>
                </div>
            </div>
            <ModalPopup onCreate={createHandler} onOpen={openModal} onClose={() => setOpenModal(false)} />
            {tasks.length > 0 && <DeleteTasksModal onOpenModal={openDeleteModal} onCloseModal={() => setOpenDeleteModal(false)} setTasks={setTasks} />}
        </Container>
    );
}

export default TaskTable;