let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    function PrintDeveloperbyMap() {
      employees.map((employee) => {
        if (employee.profession === "developer") {
          console.log(employee);
        }
      });
    }  
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    function PrintDeveloperbyForEach() {
      employees.forEach((employee) => {
        if (employee.profession === "developer") {
          console.log(employee);
        }
      });
    }  
  }
  
  function addData() {
    //Write your code here, just console.log
    function addData() {
      const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
      employees.push(newEmployee);
      console.log(employees);
    }  
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    function removeAdmin() {
      employees = employees.filter((employee) => employee.profession !== "admin");
      console.log(employees);
    }  
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    function ConcatinateArray() {
      const newEmployees = [
        { id: 5, name: "paul", age: "23", profession: "developer" },
        { id: 6, name: "mary", age: "21", profession: "designer" },
        { id: 7, name: "david", age: "22", profession: "manager" }
      ];
      const concatenatedArray = employees.concat(newEmployees);
      console.log(concatenatedArray);
    }  
  }