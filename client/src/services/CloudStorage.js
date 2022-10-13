// // photographersList states
// const [photographersList, setPhotographersList] = useState([]);

// useEffect(() => {
//   getData();
// }, []);

// // sends GET request for the data to the backend
// async function getData() {
//   await axios("http://localhost:5000/photographers")
//     .then((response) => {
//       setPhotographersList(response.data);
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log("Error fetching data: ", error);
//     })
//     .finally(() => {
//       console.log("Success");
//     });
// }

// // sends POST request of data to the backend
// async function handleAdd(list) {
//   axios({
//     method: "post",
//     url: "http://localhost:5000/photographers",
//     data: [
//       {
//         first_name: list.first_name,
//         last_name: list.last_name,
//         age: list.age,
//         city: list.city,
//       },
//     ],
//   }).then(
//     (response) => {
//       console.log(response);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );

//   alert(`${list.first_name} has been registered as a Photographer.`);
// }

// // send DELETE request of data to the backend
// async function handleDelete(list) {
//   axios({
//     method: "delete",
//     url: "http://localhost:5000/photographers",
//     data: [
//       {
//         first_name: list.first_name,
//       },
//     ],
//   }).then(
//     (response) => {
//       console.log(response);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// }

// // Function to Modify Data
// async function handleModify(list) {
//   axios({
//     method: "put",
//     url: "http://localhost:5000/photographers",
//     data: [
//       {
//         first_name: list.first_name,
//         updateData: list.updateData,
//       },
//     ],
//   }).then(
//     (response) => {
//       console.log(response);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// }
