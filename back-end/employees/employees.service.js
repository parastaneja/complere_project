const employeeList = [{
  employee_id: 1,
  employee_name: 'Kajal',
},
{
  employee_id: 2,
  employee_name: 'Rajan',
},
{
  employee_id: 3,
  employee_name: 'Siddharth',
},
{
  employee_id: 4,
  employee_name: 'Adarsh',
}];

const getEmployeeList = async () => employeeList;

module.exports = {
  getEmployeeList,
};
