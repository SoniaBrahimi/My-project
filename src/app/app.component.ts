import { Component } from '@angular/core';
import { Item } from './item';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project_Users_tasks';

  filter: 'all' | 'work' | 'house' | 'activities' | 'children' = 'all';

  curUser: number = 0;

  users: User[] = [
    {
      id: 0, name: 'Sonia', todoList: [
        { description: 'cooking a pizza', done: true, category: 'house' },
        { description: 'work', done: true, category: 'work' },
        { description: 'read a book', done: false, category: 'activities' },
        { description: 'play with my daughters', done: false, category: 'house' },

      ]
    },
    {
      id: 1, name: 'Luna', todoList: [
        { description: 'Sleep', done: false, category: 'children' },
        { description: 'take a shower', done: false, category: 'children' },
        { description: 'play with balls', done: true, category: 'activities' },
        { description: 'makes mischief', done: true, category: 'house' },


      ]
    },
    {
      id: 2, name: 'Jasmine', todoList: [
        { description: 'play puzzles', done: false, category: 'children' },
        { description: 'learn the numbers', done: false, category: 'work' },
        { description: 'ride a bike', done: true, category: 'activities' },
        { description: 'help mom to cook', done: true, category: 'house' },

      ]
    },
    {
      id: 3, name: 'Mohamed', todoList: [
        { description: 'wash the car', done: false, category: 'house' },
        { description: 'do the dishes', done: false, category: 'house' },
        { description: 'jogging', done: true, category: 'activities' },
        { description: 'work', done: true, category: 'work' },

      ]
    },

  ];

  get filteredItems() {
    if (this.filter === 'all') {
      return this.users[this.curUser].todoList;
    }
    return this.users[this.curUser].todoList.filter((item) => this.filter === item.category);
  }

  get itemsActive() {
    return this.filteredItems.filter((item) => !item.done);
  }

  get itemsDone() {
    return this.filteredItems.filter((item) => item.done);
  }

  addItem(description: string, category: string) {
    this.users[this.curUser].todoList.unshift({
      description,
      done: false,
      category
    });
  }

  remove(item: Item) {
    this.users[this.curUser].todoList.splice(this.users[this.curUser].todoList.indexOf(item), 1);
  }

  setCurrentUser(id: string) {
    this.curUser = +id;
  }

}
