import {v4 as uuidv4} from 'uuid';

  export default function TaskInputForm({
    task,
    onSetTask,
    taskList,
    onSetTaskList
  }) {
    //タスク追加ロジック
    const onClickSubmit = (e) => {
      if (task==="") return
        onSetTaskList(
          taskList => [...taskList,{id: uuidv4(),task,isCompleted:false}
          ]);
     onSetTask("")
    }
    return (
      <div className="TaskInputForm">
        <h2>タスク登録フォーム</h2>
        <input
        className="InputField"
        maxLength="15"
        value={task}
        onChange={(event) => onSetTask(event.target.value)}
     />
        <SubmitButton />
    </div>
    );

    function SubmitButton() {
      return (
        <input
          className="SubmitButton"
          type="submit"
          value="タスク内容を登録"
          onClick={onClickSubmit}
        />
      );
    }
    
  } 