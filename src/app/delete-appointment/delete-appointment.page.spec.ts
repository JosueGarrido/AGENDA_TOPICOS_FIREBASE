import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteAppointmentPage } from './delete-appointment.page';

describe('DeleteAppointmentPage', () => {
  let component: DeleteAppointmentPage;
  let fixture: ComponentFixture<DeleteAppointmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAppointmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteAppointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
