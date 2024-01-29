const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{title: "FIRST", background: "white", initial: "white"},
				{title: "SECOND", background: "white", initial: "white"}],

			titulo: 'Flux con React',
			myArray: [],
			myObject: {},
			isLogin: false,
			cohorte: 'Spain 54',
			favorites: [],
			users:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			getUsers: async () =>  {
				const url = 'https://playground.4geeks.com/apis/fake/contact/agenda/Agenda-Alfredo';
				const options = {
					method: "GET"
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log("Error en el fetch", response.status, response.statusText)
					return response.status
				}
				const data = await response.json()
				console.log(data);
				// Codigo con la logica necesaria 
				setStore( {users: data })
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
