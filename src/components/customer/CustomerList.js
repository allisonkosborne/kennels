const [customers, setCustomers] = useState([]);

const getCustomers = () => {
    //After the data comes back from the API, we
    //  use the setCustomers function to update state
    return getAllCustomers().then(customersFromAPI => {
      // We'll do something more interesting with this data soon.
      console.log(customersFromAPI);
    });
  };
// got the customers from the API on the component's first render
  useEffect(() => {
    getcustomers();
  }, []);

const navigate = useNavigate();
//useEffect tells React to call the getAnimals() function that will fetch data from our API
//The empoty array argument tells React ot call the function on the first render of the component

//Finally we use .map() to "loop over" the customers array to show a list of customer cards
return (
  <div className="container-cards">
    {customers.map(customer => 
    <CustomerCard 
    key={customer.id}
    customer={customer} //prop
    handleDeleteCustomer={handleDeleteCustomer}/>)}
  </div>
);