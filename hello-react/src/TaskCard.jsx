/* eslint-disable react/prop-types */
import './TaskCard.css'
const TaskCard = ({ title, dueDate, completedAtDate, assigneeName }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm mb-2 bg-white">
      <h2 className="text-lg font-bold">{title}</h2>
      {dueDate && <p className="text-sm text-gray-600">Due on: {dueDate}</p>}
      {completedAtDate && <p className="text-sm text-gray-600">Completed on: {completedAtDate}</p>}
      <p className="text-sm text-gray-600">Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;