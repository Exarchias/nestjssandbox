import { Controller } from '@nestjs/common';
import { Body, Get, Post } from '@nestjs/common/decorators';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    console.log(createTaskDto.title, createTaskDto.description);
    return this.tasksService.createTask(createTaskDto);
  }
}
