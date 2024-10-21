/* eslint-disable react/prop-types */
import {
  Button,
  Modal,
  Label,
  TextInput,
  Textarea,
  Select,
} from "flowbite-react";
import { useState } from "react";
export function ModalPopup({ onOpen, onClose }) {

    let [data, setData] = useState({
        title: '',
        description: '',
        assignTo: '',
        priority: ''
    });
    
    let [errors, setErrors] = useState({
        title: null,
        description: null,
        assignTo: null,
        priority: null
    });

    let changeHandler = (e) => {
        let newObject = {
            ...data,
            [e.target.name]: e.target.value,
        }
        setData(newObject);
        setErrors({
            title: null,
            description: null,
            assignTo: null,
            priority: null
        })
    }
    let submitHandler = (event) => {
        event.preventDefault();
        if (data.title === '') {
            setErrors({
                ...errors,
                title: 'title khali'
            });
        }
        else if (data.description === '') {
            setErrors({
                ...errors,
                description: 'description khali'
            });
        }
        else if (data.assignTo === '') {
            setErrors({
                ...errors,
                assignTo: 'assignTo khali'
            });
        }
        else if (data.priority === '') {
            setErrors({
                ...errors,
                priority: 'priority khali'
            });
        }
    }
  return (
    <>
      <Modal show={onOpen} onClose={() => onClose(false)}>
        <Modal.Header>Add New Task</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form action="#" className="flex flex-wrap" onSubmit={submitHandler}>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="title" value="Title" />
                </div>
                <TextInput name="title" onChange={changeHandler} id="title" type="text" />
                {errors.title && <span className="text-red-600">{errors.title}</span>}
              </div>
              <div className="w-full mt-2">
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description" />
                </div>
                <Textarea name="description" onChange={changeHandler} id="description" rows={4} />
                {errors.description && <span className="text-red-600">{errors.description}</span>}
              </div>
              <div className="w-2/3 mt-2">
                <div className="pr-2">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="Assign To" />
                  </div>
                  <Select id="countries" onChange={changeHandler} name="assignTo">
                    <option>Select Something</option>
                    <option value="Person One">Person One</option>
                    <option value="Person Tow">Person Tow</option>
                    <option value="Person Three">Person Three</option>
                    <option value="Person Four">Person Four</option>
                  </Select>
                  {errors.assignTo && <span className="text-red-600">{errors.assignTo}</span>}
                </div>
              </div>
              <div className="w-1/3 mt-2">
                <div className="mb-2 block">
                  <Label htmlFor="countries" value="Priority" />
                </div>
                <Select id="countries" onChange={changeHandler} name="priority">
                  <option>Select Something</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Select>
                {errors.priority && <span className="text-red-600">{errors.priority}</span>}
              </div>
              <Button type="submit" className="mt-5">Add Task</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
