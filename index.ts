// 1. 
// 2. Typescript의 에러메세지 에러메시지의 질이 좋음.

let 이름 : string[] = ['kim', 'park'];
이름 = ['kimd'];

let 이름2:{name : string} = { name : 'kim'};
let 이름3:string | number = 123;


function 함수(x:number) :number {   // 무조건 넘버가 들어와야하고 리턴되어도 넘버임
    return x*2
}

함수(123);

type Member = {
   [key:string]: string, name : string
}

let john : Member = {name : 'kim'}


class User{
    name : string;
    constructor(name : string){
        this.name = name;
    }
}