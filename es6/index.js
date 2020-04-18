// const 

function home() {
    let homename = 'my house';
    homename = 'your house';
    console.log(homename);
}

home();


function home_immutable() {
	const list = ["“apple”", "“orange”", "“watermelon”"];
	list.push("“banana”");
	console.log(list);
}
home_immutable();