const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{title: "FIRST", background: "white", initial: "white"},
				{title: "SECOND", background: "white", initial: "white"}],

			titulo: 'Agenda-Alfredo',
			myArray: [],
			myObject: {},
			isLogin: false,
			cohorte: 'Spain 54',
			favorites: [],
			users:[],
			currentUser: {},
			agenda: 'Agenda-Alfredo',
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			assignUser: (item) => {setStore({ currentUser: item})},

			clearUser: () => {setStore({ currentUser: null })},


			newUser: async (name, email, agenda, address, phone) => {
				const url = "https://playground.4geeks.com/apis/fake/contact/";
				const options = {
					method: "POST",

					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: getStore().agenda,
						address: address,
						phone: phone
					}),


					headers: {
						"Content-Type": "application/json",
					},
				};

				const response = await fetch(url, options);
				if(!response.ok){
					console.log("Error en el fetch: ", response.status, response.statusText);
					return
				}
				console.log("Usuario añadido correctamente");
				getActions().getUsers()

			},

			getUsers: async () =>  {
				const url = 'https://playground.4geeks.com/apis/fake/contact/agenda/Agenda-Alfredo';
				const options = {
					method: "GET"
				};
				const response = await fetch(url, options);
				if (response.ok) {
					console.log("Usuario añadido correctamente");
				} else {
					console.error("Error al agregar usuario");
				}
				const data = await response.json()
				console.log(data);
				// Codigo con la logica necesaria 
				setStore( {users: data })
			},

			deleteUsers: async (idUser) => {
				const url = "https://playground.4geeks.com/apis/fake/contact/" + idUser;
				const options = {
					method:"DELETE"
				};

				const response = await fetch (url, options);
				if(!response.ok) {
					console.log("Typer Error : ", response.status, response.statusText);
					return response.status
				}
				const data = await response.json()
				console.log(data);
				getActions().getUsers()
			},

			editUser: async (id, data) => {
				const url ="https://playground.4geeks.com/apis/fake/contact/" + id;
				const options = {
					method: "PUT",
				 	headers: { "Content-Type": "application/json" },
				 	body: JSON.stringify(data),
				};

				const response = await fetch(url, options);
				console.log(response);

				if (response.ok) {
					const data = await response.json();
					getActions().getUsers()
					console.log(data);
				} else {
					console.log("Error: ", response.status, response.statusText);
				}

				
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

/* 
Syntax into actions:

1. Usar getActions() para llamar a otra actions(function) dentro de una actions(fuction)
	getActions().changeColor(0, "green")

2. Utilizar getStore() para acceder al valor de un "store" dentro de un "actions"
		2.1
			const store = getStore();
			store.demo.map()
		2.2
			getStore().demo.map()

3. Utilizar setStore() para guardar un valor en un "store" (recordar que store es un objeto)
	setStore({ demo: demo });

*/