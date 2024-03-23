import { useEffect, useState } from "react";
import CardNoticia from "../components/CardNoticia";

function HomePage() {

  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    try {
      const data = await fetch('api.com/tasks')
        .then(response => response.json())

      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, [])

  return (
    <>
      <h2>Home</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title} - {task.status}</li>
        ))}
      </ul>
      <CardNoticia title="Champions League 01/06" />
    </>
  )
}

export default HomePage;