const initState = {
    tasks: [
        {id:"1", title: 'Finish Unity Project', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illo, ipsa illum voluptas aspernatur eos quibusdam quod temporibus non quas.", deadline:"14th of January, 12pm"},
        {id:"2", title: "Set Up Database for React Project", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illo, ipsa illum voluptas aspernatur eos quibusdam quod temporibus non quas.", deadline:"14th of January, 12pm"},
        {id:"3", title: "Buy Christmas Gifts", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illo, ipsa illum voluptas aspernatur eos quibusdam quod temporibus non quas. Lorem...", deadline:"24th of December, 12pm"}
    ]
}

const taskReducer = (state = initState, action) => {
    return state; //setting up teh reducer for now

}

export default taskReducer;