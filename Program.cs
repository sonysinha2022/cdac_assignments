using HRAPP.Entities;
using HRAPP.Services;
using HRAPP.Controllers;
using HRAPP.Views;

IEmployeeService svc=new EmployeeService();
EmployeesController controller=new EmployeesController(svc);
List<Employee> model=controller.GetAll();
ListView view=new ListView(model);
view.Render();
Console.WriteLine("Welcome to MVC in C#");
