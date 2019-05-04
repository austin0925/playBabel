class person{
    constructor(){
        this.age = 5;
        this.name = 'peter';
    }
    async test(){
        [1, 2, 3].map(n => n+1);
    }
    render(){
        return `<div>
            Your dice roll:
            {this.state.num}
        </div>`
    }

}