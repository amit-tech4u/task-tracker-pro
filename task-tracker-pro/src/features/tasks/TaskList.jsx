import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, deleteTask } from './taskSlice';
import TaskItem from '../../components/TaskItem';
import { TextField, Button, List, Typography, Paper, Box } from '@mui/material';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask(title));
      setTitle('');
    }
  };

  return (
    <Box sx={{ padding: 3, maxWidth: 600, margin: '0 auto' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <TextField
          inputRef={inputRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add task"
          label="New Task"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Task
        </Button>
      </form>
      {tasks.length === 0 ? (
        <Typography align="center">No tasks yet. Add your first task!</Typography>
      ) : (
        <Paper elevation={3} sx={{ padding: 2 }}>
          <List>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={() => dispatch(toggleTask(task.id))}
                onDelete={() => dispatch(deleteTask(task.id))}
              />
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default TaskList;