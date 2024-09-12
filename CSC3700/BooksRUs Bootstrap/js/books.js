let myVar = "Happy!";

function orderThis(id) {
    // alert(`order id${id}`);
    let res = document.getElementById('results');
    res.innerHTML = `<span style="color: red;"> id:${id}</span>`;
    let x = "BlackJack";
    if (x == "BlackJack") {
        console.log(x);
    }
}

function orderThat(id) {
    let res = document.getElementById('results');
    res.innerHTML = `id:${id} myVar:${myVar}`;
}

function orderThatV2(id) {
    const myList = ['planes', 'trains', 'automobiles'];
    myList.push('boat');
    let oStr = " ";
    let c = "";

    for (let i = 0; i < myList.length; i++) {
        oStr += c + myList[i];
        c = ", ";
    }
    console.log("FLAG1:" + oStr);
    console.log(myList.map(i => "item:" + i));
    let newList = myList.map(i => "item:" + i);
    console.log("---------------");
    console.log(myList);
    console.log(newList);
}

function orderThatV3(id) {
    let myString = "Apples";
    myString = 'Bananas';
    let myNum = 4;
    let myList = [];
    let myObj = {};

    let student = {
        name: "Jack",
        age: 22,
        gpa: 3.55,
        courses: ["CSC1700", "CSC2200", "CSC3500"]
    };
    let studentV2 = [
        {
            name: "Jack",
            age: 22,
            gpa: 3.55,
            courses: ["CSC1700", "CSC2200"]
        },
        {
            name: "Jill",
            age: 21,
            gpa: 3.95,
            courses: ["CSC1700", "CSC2200", "CSC3700"],
            hobby: "Running"
        },
        {
            name: "Tony",
            age: 24,
            gpa: 3.5,
            courses: ["CSC1700", "CSC2200", "CSC3700"],
            hobby: "Guitar"
        }
    ];
    // console.log(`name: ${studentV2[1].name}`);
    // console.log(`age: ${studentV2[1].age}`);
    // console.log(`course1: ${studentV2[1].courses[0]}`);
    // console.log(`Num Students: ${studentV2.length}`);

    // for (let i = 0; i < studentV2.length; i++) {
    //     console.log(`Name: ${studentV2[i].name}`);
    // }

    let numCourses = 0;
    for (let i = 0; i < studentV2.length; i++) {
        numCourses += studentV2[i].courses.length;
    }
    alert(`Courses Completed: ${numCourses}`);
}

function orderThatV4(id) {
    let myVar = null;
    let myVar2 = undefined;

    if(myVar == null) {
        console.log('null');
    }
    if (myVar2 === undefined) {
        console.log('undefined');
    }
}