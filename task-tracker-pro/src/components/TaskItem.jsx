import React from 'react';
import { Checkbox, IconButton, ListItem, ListItemText, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskItem = ({ task, onToggle, onDelete }) => (
  <Paper elevation={2} sx={{ marginBottom: 1, paddingX: 1 }}>
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={onDelete} color="error">
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox checked={task.completed} onChange={onToggle} />
      <ListItemText
        primary={task.title}
        sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      />
    </ListItem>
  </Paper>
);

export default TaskItem;