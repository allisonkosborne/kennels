const [employees, setEmployees] = useState([]);

const getEmployees = () => {
    //After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllEmployees().then(employeesFromAPI => {
      // We'll do something more interesting with this data soon.
      console.log(employeesFromAPI);
    });
  };
// got the animals from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);
//useEffect tells React to call the getAnimals() function that will fetch data from our API
//The empoty array argument tells React ot call the function on the first render of the component

//Finally we use .map() to "loop over" the animals array to show a list of animal cards
return (
  <div className="container-cards">
    {employees.map(employee => 
    <EmployeeCard 
    key={employee.id}
    employee={employee} //prop
    handleDeleteEmployee={handleDeleteEmployee}
    />)}
  </div>
);