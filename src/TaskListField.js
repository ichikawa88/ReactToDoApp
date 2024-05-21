

export default function TaskListField(
  {
    taskList,
    onSetTaskList
  }
) {

  const changeIsCompleted = (id) => {
    //チェックボックス選択更新処理
    const newTaskList = taskList.map((taskList) => {
      if (taskList.id === id) {
        
        return { ...taskList,isCompleted: !taskList.isCompleted };
      }
      return taskList;
    })
    onSetTaskList(newTaskList);
  }
  const onClickDelete = (id) => {
    //削除処理
    const newTaskList = taskList.filter(task => !task.isCompleted);
    onSetTaskList(newTaskList)
  }
  return (
    <>
      <ListField />
      <DeleteButton />
    </>
  );

function DeleteButton() {
    return (
        // <!-- 削除ボタン -->
        <input
            className="DeleteButton"
            type="button"
            value="チェック項目を一括削除"
            onClick={onClickDelete}
        />
    );
  }

  function ListField() {
    return (
      <>
      <h2>タスクリスト</h2>
        <div className="TaskListField">
        <ol>
          {taskList.map(taskList => (  
          <label
          key={taskList.id}
          style={{
          textDecoration: taskList.isCompleted ? 'line-through' : 'none'
          }}
            >
            <li
               >
              <input
                type="checkbox"
                name="checkBox"
                checked={taskList.isCompleted}
                onChange={() => changeIsCompleted(taskList.id)}
              />
              {taskList.task}
            </li>
          </label>
          ))}
          </ol>
        </div>
        </>
    );
  }
} 