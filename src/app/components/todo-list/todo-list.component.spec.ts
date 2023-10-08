import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListComponent } from '../../components/todo-list';

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoListComponent]
    });
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
