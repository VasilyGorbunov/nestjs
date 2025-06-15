import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.interface';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Learn NestJS',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Build API',
      isCompleted: true,
    },
  ];

  findAll(): Task[] {
    return this.tasks;
  }

  findById(id: number): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException('Task not found.');
    }
    return task;
  }

  create(dto: CreateTaskDto): Task[] {
    const { title } = dto;

    const newTask: Task = {
      id: this.tasks.length + 1,
      title,
      isCompleted: false,
    };

    this.tasks.push(newTask);

    return this.tasks;
  }

  update(id: number, dto: UpdateTaskDto): Task {
    const { title, isCompleted } = dto;
    const task = this.findById(id);

    task.title = title;
    task.isCompleted = isCompleted;

    return task;
  }

  patchUpdate(id: number, dto: Partial<UpdateTaskDto>): Task {
    const task = this.findById(id);

    Object.assign(task, dto);

    return task;
  }

  deleteTask(id: number): Task {
    const task = this.findById(id);

    this.tasks = this.tasks.filter((t) => t.id !== task.id);

    return task;
  }
}
